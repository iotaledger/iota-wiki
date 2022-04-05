import React, { FC, useEffect, useState } from 'react';
import { Command } from 'clipanion';
import { render, Box, Text, useFocus, useFocusManager, useInput } from 'ink';
import TextInput from 'ink-text-input';
import MultiSelect, { ListedItem } from 'ink-multi-select';
import { writeConfig, readCommandLine } from '../../utils';
import { readdirSync } from 'fs';
import axios from 'axios';
import Spinner from 'ink-spinner';

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
      <Box display={isFocused ? 'flex' : 'none'}>
        <MultiSelect
          focus={isFocused}
          items={props.items}
          selected={value}
          onSelect={onSelect}
          onUnselect={onUnselect}
        />
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

export interface Tag {
  label: string;
  value: string;
  description: string;
  color: string;
}

type TagCategories = Map<string, Array<Tag>>;

const SetupComponent: FC = () => {
  const { focusNext } = useFocusManager();
  const [sourceUrl, setSourceUrl] = useState('');
  const [tagCategories, setTagCategories] = useState(
    new Map() as TagCategories,
  );
  const [loaded, setLoaded] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState('');
  const [tagsByCategory, setTagsByCategory] = useState(
    new Map() as TagCategories,
  );
  const [firstPage] = useState(getFirstPage());

  const getSourceUrl = async () => {
    const sourceUrl = await readCommandLine(
      `git config --get remote.origin.url`,
    );

    setSourceUrl(sourceUrl);
  };

  const getTagCategories = async () => {
    const { data } = await axios.get<Record<string, Array<Tag>>>(
      'https://raw.githubusercontent.com/iota-community/iota-wiki/feat/tuto-section/tutorials.json',
    );

    setTagCategories(new Map(Object.entries(data)));
  };

  useEffect(() => {
    setLoaded(sourceUrl !== '' && tagCategories.size > 0);
  }, [sourceUrl, tagCategories]);

  useEffect(() => {
    focusNext();
  }, [loaded]);

  useEffect(() => {
    getSourceUrl();
    getTagCategories();
  }, []);

  useInput((_, key) => {
    if (key.escape) process.exit();
    if (key.return) focusNext();
  });

  const onChangeTags = (category: string) => (newCategoryTags: Array<Tag>) => {
    tagsByCategory.set(category, newCategoryTags);
    setTagsByCategory(tagsByCategory);
  };

  return (
    <Box flexDirection='column'>
      <Text>Configure the tutorial using the options below.</Text>
      <Box flexDirection='column' padding={1}>
        <Text>Use ENTER, TAB and SHIFT+TAB to move up or down.</Text>
        <Text>Use SPACE to select items.</Text>
      </Box>
      {loaded ? (
        <>
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
          {Array.from(tagCategories?.entries()).map(([category, tags]) => (
            <SelectComponent
              label={`${category} tags`}
              items={tags}
              onChange={onChangeTags(category)}
              key={category}
            />
          ))}
          <SubmitComponent
            title={title}
            description={description}
            preview={preview}
            tags={Array.from(tagsByCategory.values())
              .flat()
              .map((tag) => tag.value)}
            sourceUrl={sourceUrl}
            firstPage={firstPage}
          />
        </>
      ) : (
        <Text color={'cyan'}>
          <Spinner type='dots' /> Loading data...
        </Text>
      )}
    </Box>
  );
};

export class Setup extends Command {
  static paths = [[`tutorial`, `configure`]];

  static usage = Command.Usage({
    description: `Configure the tutorial settings to properly list it on the IOTA Wiki.`,
  });

  async execute() {
    render(<SetupComponent />);
  }
}
