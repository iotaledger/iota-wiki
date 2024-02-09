---
description: How Tos give users step by step instructions on how to complete a concrete task.
image: /img/logo/iota_logo.svg
tags:
  - How Tos
  - action oriented
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

# How Tos

Also see [How To Write Banger How Tos](../../how_tos/how_to_write_how_tos.md).

How Tos are the same as [how-tos in Diataxis](https://diataxis.fr/how-to-guides/). You should use this folder to give in depth guides on how to complete concrete single tasks. For example:

- Connect to a Server
- Send a Message
- Create a Transaction
- Connect to Stronghold

## Action-Oriented

How To files should be **action-oriented**. This means that you should first think of what you want the user to achieve
with this How To, and explain only that. You may shortly introduce a concept and add
a link to the [main article](explanations.md), but make sure you leave the full explanation to the main key concept article.

### Use Tabs For Each Programming Language

Users may choose to execute the same action in a variety of languages. Ideally, you should use
[tabs](https://docusaurus.io/docs/markdown-features/tabs) to show the language specific instructions (usually code
snippets), while keeping the language agnostic instructions outside the tabs.

#### Tabs Example

<Tabs groupId="language" queryString>
  <TabItem value="java" label="Java">
    Java specific code and text goes here.
  </TabItem>
  <TabItem value="typescript-node" label="Typescript (Node.js)">
    Nodejs specific code and text goes here.
  </TabItem>
</Tabs>

## Single Responsibility Principle

Similar to the SOLID principles, you should try to adhere to the
[Single Responsibility Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle) when writing
explanations. Each article should address a single topic, and any sub-topics if relevant. If you need to touch on a
different subject while doing so, you should add a link to that subjects explanation, rather than fully explain it.

The main action should be the first header in the article, and any relevant actions to complete the main action
should follow hierarchically by using the appropriate header tag level.

## Related Articles

Your How To will probably be related to one or more [explanations](explanations.md), [Tutorials](tutorials.md), or other How Tos. Please make sure to list them in the article so the user can carry on learning in an oriented way.
