import React, { FC, useEffect, useState } from 'react';
import { Command } from 'clipanion';
import { render, Box, Text, useFocus, useFocusManager, useInput } from 'ink';
import TextInput from 'ink-text-input';
import MultiSelect, { ListedItem } from 'ink-multi-select';

const tagsList = [
  { label: 'Tag 1', value: 'tag1' },
  { label: 'Tag 2', value: 'tag2' },
];

interface InputComponentProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
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
          onSubmit={props.onSubmit}
        />
      </Text>
    </Box>
  );
};

interface SelectComponentProps {
  label: string;
  items: ListedItem[];
  onSubmit: (items: ListedItem[]) => void;
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

  return (
    <Box flexDirection='column'>
      <Text dimColor={!isFocused}>
        <Text>{props.label}: </Text>
        <Text>{value.map((item) => item.label).join(', ')}</Text>
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
          onSubmit={props.onSubmit}
        />
        <Text dimColor={true} italic={true}>
          Press SPACE to select
        </Text>
      </Box>
    </Box>
  );
};

interface SubmitComponentProps {
  value: string;
}

const SubmitComponent: FC<SubmitComponentProps> = (props) => {
  const { isFocused } = useFocus();

  return isFocused ? (
    <Box margin={1} padding={1} borderStyle={'single'} borderColor='green'>
      <Text color='green'>{props.value}</Text>
    </Box>
  ) : null;
};

const SetupComponent: FC = () => {
  const { focusNext } = useFocusManager();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [repository, setRepository] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    focusNext();
  }, []);

  useInput((_, key) => {
    if (key.escape) process.exit();
  });

  return (
    <Box flexDirection='column'>
      <InputComponent
        label='Title'
        value={title}
        onChange={setTitle}
        onSubmit={focusNext}
      />
      <InputComponent
        label='Description'
        value={description}
        onChange={setDescription}
        onSubmit={focusNext}
      />
      <InputComponent
        label='Preview image path'
        value={image}
        onChange={setImage}
        onSubmit={focusNext}
      />
      <InputComponent
        label='Repository URL'
        value={repository}
        onChange={setRepository}
        onSubmit={focusNext}
      />
      <SelectComponent
        label='Applicable tags'
        items={tagsList}
        onSubmit={(items) => {
          setTags(items);
          focusNext();
        }}
      />
      <SubmitComponent
        value={JSON.stringify({
          title,
          description,
          image,
          repository,
          tags,
        })}
      />
    </Box>
  );
};

export class Setup extends Command {
  static paths = [[`setup`]];

  static usage = Command.Usage({
    description: `Setup tutorial repos`,
  });

  async execute() {
    render(<SetupComponent />);
  }
}
