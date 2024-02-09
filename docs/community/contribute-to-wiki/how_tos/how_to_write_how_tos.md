---
tags:
  - how to
description: How to write good how tos for the IOTA Wiki.
image: /img/iota-wiki.png
---

# How To Write Banger How Tos

A person reads a how to guide to learn how to solve a concrete task, and different people will perform the same task under different circumstances. Even a trivial task like connecting to a node can be thwarted by an unstable internet connection, firewall settings, or the node not being healthy.

A how to guide helps readers to achieve their goal. It explains how to use a product function safely to get the desired result. A big part of it is explaining what to look at before using the product, and helping to interpret the output to see if everything went as the user have intended.

Keep how tos atomic: let each describe one particular task at a time. It is easier for the reader to compose multiple smaller guides to solve a larger issue than to extract a smaller bit out of a long and complex article. And it's easier to write multiple small articles over a long read.

## How To Template

If you do not know where to start, just take this template and replace everything in {CURLY BRACES} or rewrite whole sentences:

```markdown
# How To {DO SOMETHING}

To {DO SOMETHING}, you need to use the {FUNCTION NAME} function of the {CLASS NAME} class.

<!-- Add links to the API reference. -->

It will {DO THIS AND THAT}.

<!-- Explain in one or two sentences how does it work without going into details. -->

You could use its output for {THIS AND THAT}.

 <!-- Add links to other how to guides -->

## Prerequisites

<!-- Skip if there are no prerequisites. -->

Before you could {DO SOMETHING}, you need:

- {A PREREQUISITE}
<!-- Describe what the user needs beside the input, if relevant: a running node instance, additional libraries on the machine, initial setup, and so on. -->

- {ANOTHER PREREQUISITE}
<!-- Provide links to each, if applicable. -->

## Input

<!-- Skip if the function takes no arguments. -->

To {DO SOMETHING}, you need to provide the following values:

- {A THING}. See {HOW TO GET THAT THING GUIDE} and {HOW TO CHECK THAT THIS THING IS CORRECT}
- {ANOTHER THING}
<!-- While this list somewhat duplicates the API reference, it provides a context that helps to apply this function to the real world task. -->

## Usage

The function usage looks like this:

{CODE BLOCK}

<!-- Describe (possibly in code comments) what does the reader see: where is the initial setup, where is the actual usage, and where is the variable that stores the output. -->

## Output

<!-- Option 1 -->

This function returns no value.

<!-- Option 2 -->

This function returns a {TYPE NAME} value.

<!-- Option 3 -->

The function returns a {TYPE NAME} data structure. The important fields are:

- {A FIELD}: it contains {THIS INFORMATION}
- {ANOTHER FIELD}: it contains {THAT INFORMATION}

<!-- End of selection. If applicable, provide an example of a healthy output: -->

{CODE BLOCK}

You can check the output validity by {DOING THIS AND THAT}.

You can use the output to {DO THIS AND THAT}

<!-- You can copy and paste the sentence from the very beginning. -->

## Troubleshooting

If you get {THIS ERROR}, check {THIS}.

If you get {THAT ERROR}, check {THAT}.
```
