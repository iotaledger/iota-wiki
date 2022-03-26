import React from 'react';
import { Text } from 'ink';

export const Base = () => <Text>Base command</Text>;

interface StartOptions {
  config: string;
}

export function Start({ config }: StartOptions) {
  return <Text>Start subcommand with config {config}</Text>;
}

export default {
  Base,
  Start,
};
