import React, { FC } from 'react';
import { Text } from 'ink';

export const Default = () => <Text>Default command</Text>;

interface StartOptions {
  config: string;
}

export const Start: FC<StartOptions> = ({ config }) => {
  return <Text>Start subcommand with config {config}</Text>;
};

export default {
  Default,
  Start,
};
