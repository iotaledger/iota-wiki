import React from "react";
import CodeBlock from "@theme/CodeBlock";
import { type Props } from "@theme/CodeSnippetBlock";
import { clsx } from "clsx";

export default function CodeSnippetBlock({
  language,
  code,
  startString,
  endString,
  className,
  ...props
}: Props) {
  let snippet = code;
  const indexStart = code.indexOf(startString);
  snippet = snippet.substring(indexStart);
  const indexEnd = snippet.indexOf(endString);
  snippet = snippet.substring(0, indexEnd);
  return (
    <CodeBlock
      className={clsx(className, "language-" + language)}
      {...props}>
        {snippet}
    </CodeBlock>
  );
}
