# Style Guide

Our goal is to let our readers fully understand IOTA, be it IOTA Foundation, community, theory and practice behind the IOTA technology, or tools that support it. We only provide accurate information. We convey it in a clear form with no room for misunderstanding. Our writing welcomes and encourages learning and reading. With this in mind, we form our style guide.

The first version of this page is based on the [Google's style guide](https://developers.google.com/style). Our guide is still under construction and does not follow its own recommendations on many occasions.

## Quick Reference Guide

### Tone and Content

- [Be conversational and friendly](https://developers.google.com/style/tone) without being frivolous.
- [Don't pre-announce anything](https://developers.google.com/style/future) in documentation.
- [Use descriptive link text](https://developers.google.com/style/link-text).
- [Write for a global audience](https://developers.google.com/style/translation).

### Language and Grammar

- [Refer to the reader in second person](https://developers.google.com/style/person).
- Refer to IOTA Foundation in third person.
- Refer to IOTA community in third person.
- Avoid referring to yourself, but use first person if you have to.
- [Use active voice](https://developers.google.com/style/voice): make clear who's performing the action.
- Prefer action verbs over utility verbs (open the door, not use the door; debug console displays errors, not contains errors).
- [Use standard American spelling](https://developers.google.com/style/spelling) and punctuation.
- [Put conditional clauses before instructions](https://developers.google.com/style/clause-order), not after.
- Use a common glossary across all documentation. Be consistent. Avoid synonyms for technical terms unless you have mentioned that term beforehand and the relation is clear.
- For general terms, see the [Google's word list](https://developers.google.com/style/wordlist).
- Only use words you know, both by their meaning and spelling. If you do not know a word, the chances are that the reader does not know it either.

### Formatting, Punctuation, and Organization

- Capitalize headings from the first to the third level using the [Chicago style](https://en.wikipedia.org/wiki/Title_case#Chicago_Manual_of_Style).
- For lower-level headings, use sentence case.
- [Use numbered lists](https://developers.google.com/style/lists) for sequences.
- [Use bulleted lists](https://developers.google.com/style/lists) for most other lists.
- [Use description lists](https://developers.google.com/style/lists) for pairs of related pieces of data.
- [Use serial commas](https://developers.google.com/style/commas-serial).
- [Put code-related text in code font](https://developers.google.com/style/code-in-text).
- Put names of UI elements in weak emphasis.
- Use the DD/MM/YYYY formatting for dates and the 24h formatting for time.

## Comprehensive Guide

### Quotes and Names

Never modify quotes or names. Fix typos in a quote only if we are the first to publish it.

Do not contract short quotes. Put `[...]` in place of an omitted part. Never omit parts that change the meaning of the quote, its emotion, or anything else that could lead to misinterpreting it.

#### IOTA products

Refer to IOTA libraries by their filenames: iota.rs, wallet.rs, etc. Always use the lower-case notation. Note that words in the lower case make your text harder to read. To avoid it and avoid possible repetition, you could use the following clause: "The iota.rs library".

Other IOTA products have an actual name. Always capitalize it: "A Hornet node, a Bee software. Hornet and Bee."

Note that there are no determiners (the) when you refer to something by its name: "the iota.rs library" as in "the library named iota.rs", but simply "iota.rs".

Good:

> The iota.rs library connects to a node. A node could be a Bee node or a Hornet node, but iota.rs handles both the same way. Bee is written in Rust, and Hornet is written in Go.

### Logograms, Emojis, and Contractions

As logograms, emojis, and contractions are popular in informal writing, they look like a good tool to make a text more friendly. However, they also require extra effort to decipher the text. Contractions are sometimes ambiguous (would, could, should, had). Bright, colorful emojis distract from the plain text and break the reading flow. Avoid any of it, and if your prompt sounds too formal or aggressive, rewrite it altogether.

#### Logograms

Avoid replacing words partially or completely with logograms or other symbols:

Good:

> Lock, stock, and barrel.

Bad:

> Lock, stock & barrel.

Good:

> Good night, sweet prince.

Bad: 

> Good n8, sweet prince.

#### Emojis

Never use Emojis:

Good:

> Go to the designated evacuation point.

Bad: 

> Go :runner: :fire: to the designated evacuation point.

#### Contractions

Never use contractions:

Good: 

> I would rather use contractions.

Bad: 

> I'd rather use contractions.

### Text Structure

#### Paragraphs

Each paragraph should convey only one thought. If a paragraph has multiple ideas, split it. If multiple paragraphs convey the exact same thought, try to remove duplicates or merge them.

The reader should understand what a paragraph is about from its first sentence.

#### Chapters, sections, and subsections

Group paragraphs with chapters, sections, and subsections by their common topic or theme.

Always use headings. Make sure that a reader can navigate the article by just looking at its headings. Prefer unique headings over duplications.

#### Other structures

If you enumerate something in a sentence, consider if you could use a multi-line list instead.

Use parallel writing structures for similar things. For example, start each list in the same format.

### Reading Ease

Define acronyms and abbreviations on first usage and if they're used infrequently.

Use clear and direct language. Avoid the use of double negatives and exceptions for exceptions.

Good:

> You can continue without a path.

Bad:

> A missing path won't prevent you from continuing.

### Links

- Use [meaningful link text](https://developers.google.com/style/link-text). Links should make sense when read out of context.
- Don't use *click here* or *read this document*, use “For further reference” or “For further reading” or something along those lines.
- If a link downloads a file, the link text needs to indicate this action as well as the file type.
- Leave determiners out of the [link](#Links).
- Never apply additional formatting for links.

### Images

- For every image, provide [alt text](https://developers.google.com/style/images#alt-text) that adequately summarizes the intent of each image.
- Don't present new information in images; always provide an equivalent text explanation with the image.
- Don't repeat images unless absolutely necessary.
- Don't use images of text, code samples, or terminal output. Use actual text.
- Use SVG instead of PNG if available. SVGs stay sharp when you zoom in on the image.

### Videos, Recordings, and GIFs

- Ensure that captions can be translated into major languages.
- Don't use flickering or flashing elements. They can cause anything from motion sickness to a seizure.

### Tables

- Introduce tables in the text preceding the table.
- Use table headings for the first column and the first row only. Use the [th element](https://www.w3.org/TR/html4/struct/tables.html#edef-TH).
- Avoid when possible tables in the middle of a numbered procedure.
- Don't merge cells. Don't use colspan or rowspan attributes.
- Don't use tables unless it's the best method to present your information. 

### Referencing UI Elements

Never use color, size, location, or other visual cues as the primary way of describing UI elements, as they could differ between platforms and browsers.

- Refer to buttons and other elements by their label (or [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute), if they're visual elements)—for example:
- **Recommended:** Click **Save**.
- **Not recommended:** Click the round button.
- Don't use directional language to orient the reader, such as "above", "below", or "right-hand side". This type of language doesn't work well for accessibility or for localization reasons. If a [UI element](https://developers.google.com/style/ui-elements) is hard to find, [provide a screenshot](https://developers.google.com/style/images).
- **Recommended:** Click menu **Menu**.
- **Not recommended:** In the left-side panel, click the button with three lines.
- Use *weak emphasis* in UI element names.

### Document Rendering and Formatting

Markdown only [specifies](https://daringfireball.net/projects/markdown/syntax) what text elements are, but not how they look like. The final rendering could be affected by a rendering engine that could come from Docusaurus, IDE, or GitHub, a browser extension that changes CSS, or they could read a raw .md file or copy parts of your article as a plain text via messenger. Some users do not *see* text at all and rely on screen readers.

Never rely on rendering in your work and make sure that everyone can read your article with no formatting at all. For example, use *weak* and **strong** emphasis, but never expect it to always be in italics and bold, respectively.

#### Emphasis

In general, use emphasis notation sparingly. In most cases, you can emphasize anything by using right words and rearranging your sentences even in plain text.

Always use *weak emphasis* for UI element names.

#### Drawing attention

When you really want the user to read a paragraph, use [remark-admonitions](https://docusaurus.io/docs/markdown-features/admonitions) syntax. Reserve it for truly important messages, as if the text has a warning after every paragraph, it has none. If the user has to read the article carefully because it describes a sensitive topic, consider telling that in a single admonition at the beginning.

Example:

:::caution

Make sure that you have connected to IOTA testing network, not main network.

:::

#### Code blocks

Use paragraph code blocks (\`\`\`) for code examples.

Use `inline code blocks` for parameter names in text.

#### Math formulas

As an exception to the general rule, use [Remark Math](https://docs.theochu.com/docusaurus/latex/) for math formulas.

#### Sentence case and capitalization

Capitalize headings from the first to the third level using the [Chicago style](https://en.wikipedia.org/wiki/Title_case#Chicago_Manual_of_Style).

For lower-level headings, use sentence case.

#### Quotation marks

In general, use American English style when [punctuating quotations](https://developers.google.com/style/quotation-marks).

For titles of shorter works — such as articles or episodes in a web series — put titles in quotation marks, unless they're part of a link.

Put long quotes in a paragraph-style quote (`>`).

## Writing for a global audience

**Key Point:** Write in US English, but write with translation and a global audience in mind.

### General Dos and Don'ts

- Use [present tense](https://developers.google.com/style/tense).
- Write [dates and times](https://developers.google.com/style/dates-times) in the global way (DD/MM/YYYY and 00:00)
- Use qualifying nouns for technical keywords. For example, when referring to a file called example.yaml, call it the *example.yaml* *file* and not *example.yaml* by itself. 
- Provide context. Don't assume that the reader already knows what you're talking about.
- Use negative constructions on a case by case basis, like when explaining what a feature does and what does and doesn’t work with it. 

### Write Short, Clear, and Precise Sentences

- Use active voice.
- Address the reader directly. Use *you*, instead of *the user* or *they*.
- Use a simple word. For example, don't use words like *commence* when you mean *start* or *begin*. Don't use *consequently* when you mean *so*. Don't use words like *utilize* or *leverage* when you mean *use*. However, do not avoid complex words where they do belong.
- Use a single word when it conveys the same idea as a phrase. For example, don't use a phrase like *a number of* when you can use *some* or *many*.
- Avoid phrasal verbs when possible. A phrasal verb combines multiple words to form a single verb phrase. These verbs are also known as compound verbs. Try to substitute a simpler verb first. There might not be a better verb; for example, a few exceptions to this rule include *set up*, *log in*, and *sign in*.
- **Recommended:** This document uses the following terms:
- **Not recommended:** This document makes use of the following terms:
- Define abbreviations. Abbreviations can be confusing out of context, and they don't translate well. Spell things out whenever possible, at least the first time that you use a given term.
- Don't use too many modifiers. In particular, don't use more than two nouns as modifiers of another noun.
- **Recommended:** A cloud-native DevSecOps pipeline in a hybrid environment
- **Not recommended:** A hybrid cloud-native DevSecOps pipeline
- Don't misplace modifiers. For example, place a word like *only* immediately before the noun or verb that it relates to.
- **Recommended:** Developers need to apply for only one token.
- **Not recommended:** Developers only need to apply for one token.
- Don't omit relative pronouns. To provide clarity and to avoid ambiguity, use relative pronouns such as *that* and *who*.
- **Recommended:** Running in a hybrid environment means that some of your processing happens on Google Cloud and other processing remains on-premises.
- **Not recommended:** Running in a hybrid environment means some of your processing happens on Google Cloud and other processing remains on-premises.
- Clarify antecedents. Using pronouns can get tricky when translators are working with small, unconnected strings of text. Help them out by making things as clear as possible. For example, if a pronoun is ambiguous, then replace it with the appropriate noun.
- **Recommended:** If you use the term *green beer* in an ad, then make sure that the ad is targeted.
- **Not recommended:** If you use the term *green beer* in an ad, then make sure that it's targeted.
- Use helper words. Helper words, such as *if*, *then*, and *of*, are frequently left out of conversational English. Use these words to avoid ambiguity.

### Be Consistent

- If you use a particular term for a particular concept in one place, then use that exact same term elsewhere, including the same capitalization.
- Don't use the same word to mean different things. In particular, avoid using the same word as both a noun and a verb in close proximity. Use standardized phrases for frequently used sentences, introductory phrases, and other common tasks.
- Use standard English word order. Sentences follow the *subject + verb + object* order.
- Try to keep the main subject and verb as close to the beginning of the sentence as possible.
- Use the conditional clause first. If you want to tell the audience to do something in a particular circumstance, mention the circumstance before you provide the instruction. 
- Make list items consistent. Make list items parallel in structure.
- Be consistent in your capitalization and punctuation.
- Use consistent typographic formats.
- Use bold and italics consistently. Don't switch from using italics for emphasis to underlining.
- Use consistent capitalization.

### Be Inclusive

You are writing to people of many cultures. Keep that in mind.

- Don't be too culturally specific. In particular, don't refer to specific holidays, cultural practices, or sports unless you're certain they're known worldwide.
- Avoid colloquialisms, idioms, or slang. Phrases like *ballpark figure*, *back burner*, or *hang in there* can be confusing and difficult to translate.

### Using Third-party Sources

**Key Point:** Write using your own words. Don't lift content from third-party sources.

Don't copy content from another source because it might violate copyright. Instead, paraphrase and link to their content.

Content includes the following types: text, images, code, logos, and speech.

### Voice and Tone

**Key Point:** Be conversational without being frivolous.

In your documents, aim for a voice and tone that's conversational, friendly, and respectful without being overly colloquial or frivolous; a voice that's casual and natural and approachable, not pedantic or pushy. Try to sound like a knowledgeable friend who understands what the developer wants to do.

Don't try to write exactly the way you speak; you probably speak more colloquially and verbosely than you should write, at least for developer documentation. But aim for a conversational tone rather than a formal one.

Don't try to be super-entertaining, but also don't aim for super-dry. Be human, let your personality show, be memorable; you can even be a little funny now and then. But remember that the primary purpose of the document is to provide information to someone who's looking for it.

Remember that many readers aren't fluent English speakers, many of them come from cultures different from yours, and your document might be translated into other languages.

### Some Things to Avoid Where Possible

- Buzzwords or technical jargon.
- Being too cutesy.
- [Ableist language](https://developers.google.com/style/inclusive-documentation#ableist-language) or figures of speech.
- Placeholder phrases like *please note* and *at this time.*
- Choppy or long-winded sentences.
- Starting all sentences with the same phrase (such as *You can* or *To do*).
- Current pop-culture references.
- Jokes at the expense of customers, competitors, or anyone else.
- Exclamation marks, except in rare really exciting moments.
- Wackiness, zaniness, and goofiness.
- Mixing metaphors or taking a metaphor too far.
- Funny lines that aren't closely related to the topic, or that require much off-topic verbiage, or that obscure information.
- Phrasing that denigrates or insults any group of people.
- Phrasing in terms of *let's* do something.
- Using phrases like *simply*, *It's that simple*, *It's easy*, or *quickly* in a procedure.

### Some Techniques and Approaches to Consider

- If you're having trouble expressing something, step back and ask yourself, "What am I trying to say?" Often, the answer you give yourself reveals what you should be saying in the document.
- If you're uncertain about your phrasing or tone, ask a colleague to take a look.
- Try reading parts of your document out loud, or at least mouthing the words. Does it sound natural? Not every sentence has to sound natural when spoken; these are written documents. But if you come across a sentence that's awkward or confusing when spoken, consider whether you can make it more conversational.
- Use transitions between sentences. Phrases like *Though* or *This way* can make paragraphs less stilted. (Then again, sometimes transitions like *However* or *Nonetheless* can make paragraphs more stilted.)
- Even if you're having trouble hitting the right tone, make sure you're communicating useful information in a clear and direct way; that's the most important part.
