# Formatting

Markdown only [specifies](https://daringfireball.net/projects/markdown/syntax) what text elements are, but not how they look like. The final rendering could be affected by a rendering engine that could come from Docusaurus, IDE, or GitHub, a browser extension that changes CSS, or someone could read a raw .md file or copy parts of your article as a plain text via messenger. Some users do not _see_ text at all and rely on screen readers.

Never rely on rendering in your work and make sure that everyone can read your article with no formatting at all. For example, use _weak_ and **strong** emphasis, but never expect it to always be in italics and bold, respectively.

Do not try to fix a shoddy writing with formatting: it will not work. Make sure that your prompt sounds great as a plain text, and apply minimal formatting to support it.

## Headings

Always provide a title to a page with the top-level heading (`#`). Never skip heading levels: a sub-subsection (`####`) cannot lie directly within a section (`##`). Either convert it into a subsection (`###`), or introduce a parent subsection.

Make sure that the reader could navigate the article just by glancing over its headings. Try to use unique titles for at least first three levels, so writers could link sections of your article directly.

Capitalize headings from the first to the third level as described in the [Chicago Manual of Style](https://en.wikipedia.org/wiki/Title_case#Chicago_Manual_of_Style). When in doubt, use the [Capitalize My Title](https://capitalizemytitle.com/style/Chicago/) tool.

Put lower-level headings in the sentence case.

## Inline Formatting

### UI Elements

Always use [weak emphasis](#emphasis) for [UI elements](./form.md#ui-elements).

### Links

In general, introduce a link only on the first occurrence of a subject. If your article is part of series of articles, consider if you really need to link it or the connection between articles is obvious for the reader.

Build links into your text:

Good:

> [Hornet](/hornet/welcome) is made by our community.

Bad:

> Hornet([link](/hornet/welcome)) is made by our community.

Always leave determiners out of the link. When using structures like "the Mind Map tool" or "the Hornet node", only wrap the name of the object: "the [Mind Map](../for_devs/toolbox/mind_map.md) tool" and "the [Hornet](/hornet/welcome) node."

Call links in the way the reader could safely assume the link's destination without looking at the URL. When linking to a file download, mention that and the file's extension.

You should present the links within the text, but you could use constructions like "You could learn more about…" or "For more information, see…" if that helps with pacing or presentation.

Never apply additional formatting to links.

### Emphasis

In general, use emphasis notation sparingly. In most cases, you can emphasize anything by using right words and rearranging your sentences even in plain text. _Weak emphasis_ is rare, **strong emphasis** is exceptional, and there is no good place for **_super strong emphasis_** ever.

Never use emphasis notation for italics or bold: it only denotes emphasis, and the rendering might differ between engines.

Always use _weak emphasis_ for UI element names.

### Inline Code

Use the `inline code` notation for function and type names, variables and arguments, and input and output values.

Use inline code for file paths.

## Freestanding Elements

Unlike inline elements, freestanding elements reside between paragraphs. You could use them to break wall of texts, support your point, or provide a momentary relief from reading. They can also disrupt the reading flow and disperse your article into loosely connected bits, so use them within reason.

When you add a freestanding element, announce it in the preceding paragraph: describe it, provide context to it, or make a statement that this structure supports.

Aside from lists and sometimes admonitions, freestanding elements should never replace the text, but only support it.

Always introduce a freestanding element in the preceding paragraph, and never put additional paragraphs or other freestanding elements in between. Fully explain the subject in plain text, so the reader could understand it without looking at the supporting element.

### Attributions

When using [someone else's work](./third-party_works.md), always attribute the author. In case of freestanding elements, put the attribution on a separate paragraph immediately below and put that whole paragraph in _weak emphasis_.

```rust
fn main(){
  println!("Hello World!")
}
```

_[Hello-World](https://github.com/blackbird71SR/Hello-World) in all possible languages by blackbird71SR, MIT License._

### Paragraph Quotes

Put long quotes in a paragraph-style quote (`>`). Attribute the author on a separate paragraph within the quotation block. Put the attribution in _weak emphasis_.

> […] the act of writing will make you a better student, a better worker, a better friend, a better citizen, a better parent, a better teacher, a better person.
>
> _From Writing Tools by Roy Peter Clark_

### Lists

If your paragraph feels encumbered with enumerations, try to turn it into a list — oftentimes it will break the long enumeration into comprehensible bits. If your text looks too choppy because of a list, try to rewrite it as a plain text paragraph — oftentimes it will turn into a smooth and clear prompt.

Use numbered lists for instructions and whenever it would make sense to refer to an element by its number (rule #1, rule #2). Use bullets for everything else.

Always put proper numbering in lists manually even though Markdown can do that for you: some readers might read your article in raw `.md`.

If you have a list of named elements that need a description, consider using headings and separate subsections instead of lists. As the final resort, use bullet lists with element names in **strong emphasis**:

- **Roses** are red.
- **Violets** are blue.

### Admonitions

When you really want the user to read a paragraph, use [remark-admonitions](https://docusaurus.io/docs/markdown-features/admonitions) syntax. Reserve it for truly important messages, as if the text has a warning after every paragraph, it has none. If the user has to read the whole article carefully because it describes a sensitive topic, consider telling that in a single admonition at the beginning.

Example:

:::caution

Make sure that you have connected to a testing network, not the main network.

:::

### Code Blocks

Use paragraph code blocks for examples by wrapping the code in triple backticks (\`\`\`).

Wiki supports [syntax highlighting](https://docusaurus.io/docs/markdown-features/code-blocks#syntax-highlighting) and [code blocks in multiple languages](https://docusaurus.io/docs/markdown-features/code-blocks#multi-language-support-code-blocks).

Use `inline code blocks` for parameter names in text.

### Math Formulas

Use [Remark Math](https://docs.theochu.com/docusaurus/latex/) for math formulas.

### Images

If the image only contains text, use the actual text like code blocks, tables, or math formulas instead. Only use `.svg` images or `.png` images in high resolution. Always provide the alt text with short but descriptive summary of the image's content. Always make images clickable:

```
![YOUR_ALT_TEXT](LINK_TO_YOUR_IMAGE "Click to see the full-size image.")
```

Try to not repeat images. Either change the structure of your text, or link the relevant section.

Use images for graphs and diagrams.

### Videos, Audio Recordings, and Animations

Never include media that could [provoke seizures](https://www.epilepsy.com/learn/triggers-seizures/photosensitivity-and-seizures). This includes flickering lights, flashing animations, or certain patterns like stripes.

Prefer videos with captions, and provide the captions yourself if you can.

For GIFs, also see [Images](#images).

### Tables

Use Markdown tables. Always provide headings and make sure it looks nice in the raw `.md` file.

Raw `.md`:

```markdown
| Input           | Output                              |
| --------------- | ----------------------------------- |
| "White Russian" | Throws `CocktailNotServedException` |
```

Rendered result:

| Input           | Output                              |
| --------------- | ----------------------------------- |
| "White Russian" | Throws `CocktailNotServedException` |
