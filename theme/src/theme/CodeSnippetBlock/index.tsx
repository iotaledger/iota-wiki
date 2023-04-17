import React from 'react';
import CodeBlock from '@theme/CodeBlock';
import { type Props } from '@theme/CodeSnippetBlock';
import { clsx } from 'clsx';

export default function CodeSnippetBlock({
  language,
  code,
  startString,
  endString,
  className,
  ...props
}: Props) {
  let startIndex = -1;
  let endIndex = -1;

  // Try to find the start string and, if found,
  // start the snippet at the end of the match.
  if (startString) {
    startIndex = code.indexOf(startString);
    if (startIndex >= 0) startIndex += startString.length;
  }

  // Try to find the end string and, if found,
  // end the snippet at the start of the match.
  if (endString) {
    endIndex = code.indexOf(endString, startIndex);
  }

  // Only include the lines between the matched lines,
  // excluding any whitespace.
  const snippet = code
    .slice(
      startIndex >= 0 ? startIndex : undefined,
      endIndex >= 0 ? endIndex : undefined,
    )
    .split(/\r\n|\r|\n/)
    .slice(startIndex >= 0 ? 1 : undefined, endIndex >= 0 ? -1 : undefined)
    .join('\n')
    .trim();

  return (
    <CodeBlock className={clsx(className, 'language-' + language)} {...props}>
      {snippet}
    </CodeBlock>
  );
}
