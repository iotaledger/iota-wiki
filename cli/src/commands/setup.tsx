import { Command } from 'clipanion';
import { render } from 'ink';
import { Form, FormProps } from 'ink-form';
import React from 'react';

const tags = [{ value: 'tag1' }, { value: 'tag2' }];

const form: FormProps = {
  form: {
    title: 'Tutorial Setup',
    sections: [
      {
        title: '',
        fields: [
          { type: 'string', name: 'titel', label: 'Enter your tutorial title' },
          {
            type: 'string',
            name: 'description',
            label: 'Enter your tutorial description',
          },
          {
            type: 'string',
            name: 'preview',
            label: 'Enter the name of your preview image',
          },
          {
            type: 'string',
            name: 'source',
            label: 'Enter the url of your github repo',
          },
          {
            type: 'multiselect',
            name: 'tags',
            label: 'Choose some tags',
            options: tags,
          },
        ],
      },
    ],
  },
};

export class Setup extends Command {
  static paths = [[`setup`]];

  static usage = Command.Usage({
    description: `Setup tutorial repos`,
  });

  async execute() {
    // or:
    render(
      <Form
        form={form.form}
        onSubmit={(result) => {
          console.log(`Finished with value`, result);
        }}
      />,
    );
  }
}
