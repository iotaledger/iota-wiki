# Language Mechanics

Language mechanics govern the written English. Together with [formatting](./formatting.md) guidelines, they let us present our articles in the same way across the whole wiki — meaning that the reader can focus on the matter, not the form.

## Spelling

Only use the American English spelling.

### Glossary

Whenever you use a technical term, check the [IOTA glossary](/learn/glossary) for the accepted notation.

Whenever you encounter a term that is written in different ways across documentation, please propose a unified spelling and make a designated pull request that adds a new entry to the glossary and ideally replaces all occurrences of improper spelling in the wiki. This will help both writers and readers.

### Names

Always write a personal or brand name in its owner's preferred spelling:

Good:

> Aleksei
>
> Johnson & Johnson

Bad:

> Alexey
>
> Johnson and Johnson

This case overrides other guidelines.

### IOTA Products

Refer to IOTA libraries by their filenames: iota.rs, wallet.rs, etc. Always use the lower-case notation. Note that it is harder to spot a sentence if it starts in lower case. Consider using the following clause instead: "The iota.rs library".

Other IOTA products have an actual name. Always capitalize it: "A Hornet node, a Bee software. Hornet and Bee."

Note that there are no determiners (the) when you refer to something by its name: "the iota.rs library" as in "the library named iota.rs", but simply "iota.rs".

Good:

> The iota.rs library connects to a node. A node could be a Bee node or a Hornet node, but iota.rs handles both the same way. Bee is written in Rust, and Hornet is written in Go.

This case overrides other guidelines.

## Punctuation

Use the American English punctuation.

Use serial commas:

> Lock, stock, and barrel.

Reserve exclamation marks only for special occasions.

Unwrap text out of parentheses, especially if that text is lengthy, as they branch the thought in two different directions.

> It makes no difference if you connect to a Hornet node (that are written by the community in Go) or a Bee node, as they are functionally equivalent.
>
> It makes no difference if you connect to a Hornet or a Bee node, as they are functionally equivalent. Hornet is written by community in Go…

### Typography

Type em-dash ("—") and ellipsis ("…") with the designated symbols, not as a single or double en-dash ("-", "--") or a triple dot ("..."):

> Somehow this invaluable tool is widely regarded as not quite proper — a bumpkin at the genteel dinner table of good English.
>
> _On Writing Well by William Zinsser_

## Quotes

Never modify quotes. Fix typos in a quote only if you are the first to publish it. This paragraph overrides other guidelines.

Do not contract short quotes. Put `[…]` in place of an omitted part. Never omit parts that change the meaning of the quote, its emotion, or anything else that could lead to misinterpreting it.

Use American English style notation: use double ticks (`"`) and put commas and full stops inside the quote. For long quotes, use [paragraph-style quotes](./formatting#paragraph-quotes) instead.

## Date and Time

Use DD/MM/YYYY format for dates and 24h clock for time: HH:MM or HH:MM:SS. Do not use this time format for time spans as measurement units would not be clear: instead say "2 hours, 10 minutes, 6 seconds" or "2h 10m 6s". Use plain English for approximate gauges: "This calculation takes less than ten minutes."

## Measurements

Use the [International System of Units](https://www.bipm.org/en/measurement-units) and associated symbols and prefixes (5 kg, 3.25 m, 500 TiB).

## Numbers

Use the dot for decimal values (1.25, 0.025). If you need to split a large number to make it easier to understand, use spaces instead of commas to avoid confusion: "2 824 683 000 IOTA tokens".

A spelled out integer is often easier to read: "eleven nodes", "one million ticks". This is usually the case for any round number and for any number that is less than a hundred.

## Abbreviations, Emojis, and Contractions

Everyone uses abbreviations, emojis, or contractions in informal writing or chat. They help to keep up with a live discussion, as we can type less and be less scrupulous with the choice of words, as we can always add a smiley face to make our emotion clear.

Avoid using it in the documentation, as these mechanics have their drawbacks. Abbreviations require extra effort to decipher the text, contractions are sometimes ambiguous ("would", "could", "should", "had"), and bright, colorful emojis break the reading flow as they distract the reader from the body of text. If your prompt sounds too formal or aggressive, rewrite it altogether.

### Abbreviations

Avoid contracting a word or replacing it or its parts with a numeronym or special symbol:

Good:

> Lock, stock, and barrel
>
> Good night, sweet prince
>
> Little John

Bad:

> Lock, stock & barrel
>
> Good n8, sweet prince
>
> Li'l John

Use acronyms sparingly. Always provide the full name the first time you mention something in an article:

> Distributed Ledger Technology (DLT) makes decentralized digital databases secure. Most DLTs use blockchains.

Remind the reader what does the acronym mean if you have not mentioned it in the previous few paragraphs.

### Contractions

Never use contractions:

Good:

> I would rather use contractions.

Bad:

> I'd rather use contractions.

Also see [Negations](./form.md#negations) for "don't"s.

### Emojis

Never use Emojis:

Good:

> Go to the designated evacuation point.

Bad:

> Go :runner: :fire: to the designated evacuation point.
