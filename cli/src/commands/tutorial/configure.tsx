import React, { FC, useEffect, useState } from 'react';
import { Command } from 'clipanion';
import { render, Box, Text, useFocus, useFocusManager, useInput } from 'ink';
import TextInput from 'ink-text-input';
import MultiSelect, { ListedItem } from 'ink-multi-select';
import { writeConfig, readCommandLine } from '../../utils';
import { readdirSync } from 'fs';
import axios from 'axios';

interface InputComponentProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const InputComponent: FC<InputComponentProps> = (props) => {
  const { isFocused } = useFocus();

  return (
    <Box marginRight={1}>
      <Text dimColor={!isFocused}>
        <Text>{props.label}: </Text>
        <TextInput
          focus={isFocused}
          showCursor={isFocused}
          value={props.value}
          onChange={props.onChange}
        />
      </Text>
    </Box>
  );
};

interface SelectComponentProps {
  label: string;
  items: ListedItem[];
  onChange?: (items: ListedItem[]) => void;
}

const SelectComponent: FC<SelectComponentProps> = (props) => {
  const { isFocused } = useFocus();
  const [value, setValue] = useState([]);

  const onSelect = (item) => {
    setValue([...value, item]);
  };

  const onUnselect = (item) => {
    setValue(value.filter((o) => o !== item));
  };

  useEffect(() => {
    props.onChange(value);
  }, [value]);

  return (
    <Box flexDirection='column'>
      <Text dimColor={!isFocused}>
        <Text>{props.label}: </Text>
        <Text>
          {value
            .map((item) => item.label)
            .sort()
            .join(', ')}
        </Text>
      </Text>
      <Box
        flexDirection='column'
        display={isFocused ? 'flex' : 'none'}
        marginLeft={1}
      >
        <MultiSelect
          focus={isFocused}
          items={props.items}
          selected={value}
          onSelect={onSelect}
          onUnselect={onUnselect}
        />
        <Text dimColor={true} italic={true}>
          Press SPACE to select
        </Text>
      </Box>
    </Box>
  );
};

export interface SubmitComponentProps {
  title: string;
  description: string;
  preview: string;
  tags: Array<string>;
  sourceUrl: string;
  firstPage: string;
}

const SubmitComponent: FC<SubmitComponentProps> = (props) => {
  const { isFocused } = useFocus();

  writeConfig(props);

  return isFocused ? (
    <Box margin={1} padding={1} borderStyle={'single'} borderColor='green'>
      <Text color='green'>
        Config file docusaurus.config.js was created/initialized sucessfully
      </Text>
    </Box>
  ) : null;
};

function getFirstPage() {
  // TODO First check if a sidebar with valid content exist, else:
  const files = readdirSync('docs');
  return files[0].replace(/\.[^/.]+$/, '');
}

interface SetupComponentProps {
  sourceUrl: string;
  tags: Record<string, Array<ListedItem>>;
}

const SetupComponent: FC<SetupComponentProps> = (props) => {
  const { focusNext } = useFocusManager();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState('');
  const [typeTags, setTypeTags] = useState([]);
  const [topicTags, setTopicTags] = useState([]);
  const [frameworkTags, setFrameworkTags] = useState([]);
  const [languageTags, setLanguageTags] = useState([]);
  const [tags, setTags] = useState([]);
  const [firstPage] = useState(getFirstPage());

  const getValues = (items) => items.map((item) => item.value);

  useEffect(() => {
    setTags(
      [
        ...getValues(typeTags),
        ...getValues(topicTags),
        ...getValues(frameworkTags),
        ...getValues(languageTags),
      ].sort(),
    );
  }, [typeTags, topicTags, frameworkTags, languageTags]);

  useEffect(() => {
    focusNext();
  }, []);

  useInput((_, key) => {
    if (key.escape) process.exit();
    if (key.return) focusNext();
  });

  return (
    <Box flexDirection='column'>
      <InputComponent label='Title' value={title} onChange={setTitle} />
      <InputComponent
        label='Description'
        value={description}
        onChange={setDescription}
      />
      <InputComponent
        label='Preview image path'
        value={preview}
        onChange={setPreview}
      />
      <SelectComponent
        label='Type Tags'
        items={props.tags.typeOptions}
        onChange={setTypeTags}
      />
      <SelectComponent
        label='Topic Tags'
        items={props.tags.topicOptions}
        onChange={setTopicTags}
      />
      <SelectComponent
        label='Framework Tags'
        items={props.tags.frameworkOptions}
        onChange={setFrameworkTags}
      />
      <SelectComponent
        label='Language Tags'
        items={props.tags.languageOptions}
        onChange={setLanguageTags}
      />
      <SubmitComponent
        title={title}
        description={description}
        preview={preview}
        tags={tags}
        sourceUrl={props.sourceUrl}
        firstPage={firstPage}
      />
    </Box>
  );
};

export class Setup extends Command {
  static paths = [[`tutorial`, `configure`]];

  static usage = Command.Usage({
    description: `Configure the tutorial settings to properly list it on the IOTA Wiki.`,
  });

  async execute() {
    const sourceUrl = await readCommandLine(
      `git config --get remote.origin.url`,
    );

    const {
      data: { typeOptions, topicOptions, frameworkOptions, languageOptions },
    } = await axios.get(
      'https://raw.githubusercontent.com/iota-community/iota-wiki/feat/tuto-section/tutorials.json',
    );

    const tags = {
      typeOptions,
      topicOptions,
      frameworkOptions,
      languageOptions,
    };

    render(<SetupComponent sourceUrl={sourceUrl} tags={tags} />);
  }
}
