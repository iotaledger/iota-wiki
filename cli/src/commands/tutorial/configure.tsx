import React, { FC, useEffect, useState } from 'react';
import { Command } from 'clipanion';
import git from 'isomorphic-git';
import {
  render,
  Box,
  Text,
  useFocus,
  useFocusManager,
  useInput,
  Newline,
  useApp,
} from 'ink';
import TextInput from 'ink-text-input';
import SelectInput from 'ink-select-input';
import MultiSelect, { ListedItem } from 'ink-multi-select';
import fs, { readdirSync } from 'fs';
import axios from 'axios';
import Spinner from 'ink-spinner';
import { parse } from '@babel/parser';
import {
  Statement,
  Expression,
  ObjectExpression,
  PatternLike,
  memberExpression,
  arrayExpression,
  assignmentExpression,
  identifier,
  objectExpression,
  objectProperty,
  expressionStatement,
  stringLiteral,
} from '@babel/types';
import generator from '@babel/generator';
import { UserOptions as TutorialOptions } from '@iota-wiki/plugin-tutorial';
import prettier from 'prettier';

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

interface SubmitComponentItem {
  label: string;
  value: () => void;
}

export interface SubmitComponentProps {
  label: string;
  items: Array<SubmitComponentItem>;
}

const SubmitComponent: FC<SubmitComponentProps> = (props) => {
  const { isFocused } = useFocus();

  return (
    <Box display={isFocused ? 'flex' : 'none'} flexDirection='column'>
      <Text color={'yellow'}>{props.label}:</Text>
      <SelectInput
        isFocused={isFocused}
        items={props.items}
        onSelect={(item) => item.value()}
      />
      <Newline />
    </Box>
  );
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

interface SetupComponentProps {
  addPlugin: (options: TutorialOptions) => void;
}

const SetupComponent: FC<SetupComponentProps> = (props) => {
  const { focusNext } = useFocusManager();
  const [sourceUrl, setSourceUrl] = useState('');
  const [tagCategories, setTagCategories] = useState(
    new Map() as TagCategories,
  );
  const [loaded, setLoaded] = useState(false);
  const [firstPage] = useState(getFirstPage());

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [preview, setPreview] = useState('');
  const [route, setRoute] = useState(firstPage);
  const [tagsByCategory, setTagsByCategory] = useState(
    new Map() as TagCategories,
  );

  const getSourceUrl = async () => {
    const dir = await git.findRoot({
      fs,
      filepath: process.cwd(),
    });

    const sourceUrl = await git.getConfig({
      fs,
      dir,
      path: 'remote.origin.url',
    });

    setSourceUrl(sourceUrl);
  };

  const getTagCategories = async () => {
    const { data } = await axios.get<Record<string, Array<Tag>>>(
      'https://raw.githubusercontent.com/iota-community/iota-wiki/feat/tuto-section/content/tutorials/tags.json',
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

  const addPlugin = () => {
    props.addPlugin({
      title,
      description,
      preview,
      route,
      source: sourceUrl,
      tags: Array.from(tagsByCategory.values())
        .flat()
        .map((tag) => tag.value),
    });
    process.exit();
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
          <InputComponent
            label='Route to the tutorial'
            value={route}
            onChange={setRoute}
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
            label={'Choose what to do'}
            items={[
              {
                label: 'Write the config to file.',
                value: addPlugin,
              },
              {
                label: 'Exit without writing config to file.',
                value: process.exit,
              },
            ]}
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

interface SelectTutorialComponentItem {
  label: string;
  value: number;
}

interface SelectTutorialComponentProps {
  items: SelectTutorialComponentItem[];
  onSelect: (index: number) => void;
}

const SelectTutorialComponent: FC<SelectTutorialComponentProps> = (props) => {
  const { exit } = useApp();

  const handleSelect = (item) => {
    props.onSelect(item.value);
    exit();
  };

  return (
    <Box flexDirection='column' marginBottom={1}>
      <Text>Choose a plugin to configure or add a new one: </Text>
      <SelectInput items={props.items} onSelect={handleSelect} />
    </Box>
  );
};

function tryModuleExports(statement: Statement): Expression {
  if (
    statement.type === 'ExpressionStatement' &&
    statement.expression.type === 'AssignmentExpression' &&
    statement.expression.left.type === 'MemberExpression' &&
    statement.expression.left.object.type === 'Identifier' &&
    statement.expression.left.object.name === 'module' &&
    statement.expression.left.property.type === 'Identifier' &&
    statement.expression.left.property.name === 'exports'
  ) {
    return statement.expression.right;
  }
}

function getConfig(statements: Statement[]): Expression {
  let expression = statements.reduce(
    (previous, current) => previous || tryModuleExports(current),
    null as Expression,
  );

  if (expression === null) {
    expression = assignmentExpression(
      '=',
      memberExpression(identifier('module'), identifier('exports')),
      objectExpression([]),
    );

    statements.push(expressionStatement(expression));
  }

  return expression;
}

function tryPlugins(
  property: ObjectExpression['properties'][number],
): Expression | PatternLike {
  if (
    property.type === 'ObjectProperty' &&
    property.key.type === 'Identifier' &&
    property.key.name === 'plugins'
  ) {
    return property.value;
  }
}

function getPlugins(properties: ObjectExpression['properties']) {
  let plugins = properties.reduce(
    (previous, current) => previous || tryPlugins(current),
    null as Expression | PatternLike,
  );

  if (plugins === null) {
    plugins = arrayExpression([]);

    properties.push(objectProperty(identifier('plugins'), plugins));
  }

  return plugins;
}

export class Setup extends Command {
  static paths = [[`tutorial`, `configure`]];

  static usage = Command.Usage({
    description: `Configure the tutorial settings to properly list it on the IOTA Wiki.`,
  });

  async execute() {
    // TODO: Remove hardcoded config file path.
    const filePath = 'docusaurus.config.js';

    const ast = parse(fs.readFileSync(filePath, 'utf-8'));
    const config = getConfig(ast.program.body);

    // TODO: Allow config exported via variable assigned to `module.exports`.
    if (config.type !== 'ObjectExpression')
      throw 'Module needs to export a config object.';

    const plugins = getPlugins(config.properties);

    // TODO: Allow variable and convert it to variable spread in array literal.
    if (plugins.type !== 'ArrayExpression')
      throw 'Plugins property needs to be an array.';

    const tutorialPlugins = plugins.elements.reduce(
      (result, element, index) => {
        if (element.type === 'ArrayExpression') {
          const pluginElement = element.elements[0];

          if (
            pluginElement.type !== 'StringLiteral' ||
            pluginElement.value !== '@iota-wiki/plugin-tutorial'
          ) {
            return result;
          }

          const optionsElement = element.elements[1];

          if (optionsElement.type !== 'ObjectExpression') return result;

          const title = optionsElement.properties.reduce((result, property) => {
            if (
              property.type === 'ObjectProperty' &&
              property.key.type === 'Identifier' &&
              property.key.name === 'title' &&
              property.value.type === 'StringLiteral'
            ) {
              return property.value.value;
            }
            return result;
          }, '' as string);

          if (title === '') return result;

          return result.set(index, { title });
        }
      },
      new Map<number, Partial<TutorialOptions>>(),
    );

    let pluginIndex: number | undefined;
    const setPluginIndex = (index) => (pluginIndex = index);

    if (tutorialPlugins.size > 0) {
      const items = Array.from(tutorialPlugins, ([index, options]) => ({
        label: options.title,
        value: index,
      }));

      items.push({
        label: 'Add a new tutorial...',
        value: plugins.elements.length,
      });

      const { waitUntilExit } = render(
        <SelectTutorialComponent items={items} onSelect={setPluginIndex} />,
      );

      await waitUntilExit();

      if (pluginIndex === undefined) process.exit();
    }

    const addPlugin = (options: TutorialOptions) => {
      const { tags, ...rest } = options;

      plugins.elements[pluginIndex] = arrayExpression([
        stringLiteral('@iota-wiki/plugin-tutorial'),
        objectExpression([
          ...Object.entries(rest).map(([key, value]) =>
            objectProperty(identifier(key), stringLiteral(value)),
          ),
          objectProperty(
            identifier('tags'),
            arrayExpression(tags.map((value) => stringLiteral(value))),
          ),
        ]),
      ]);

      const { code } = generator(ast);
      const formattedCode = prettier.format(code, {
        filepath: filePath,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'all',
      });
      fs.writeFileSync(filePath, formattedCode);
    };

    const { waitUntilExit } = render(<SetupComponent addPlugin={addPlugin} />);

    await waitUntilExit();
  }
}
