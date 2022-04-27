# Form

## Grammar

Use standard grammar.

Never omit utility words like "if", "then", "of", or "that". Put modifiers like "only" or "enough" next to the words they modify.

## Be Human

Good writing sounds like someone is talking to you — even if our conversations rarely make good writing in transcription. Be warm, be consistent, be on point, be human.

Treat your readers with respect. The reader is short on time, so be on point. The reader is learning, so lend a helping hand and explain thoroughly. Readers are smart, so never question their ability nor gabble with trivialities.

In particular, do not estimate something to be easy or simple: what is easy for you might not be easy for the reader.

The reader might need context to understand your article. Provide it where it is necessary and [structure](./structure.md) the text in a way where one piece would provide context for the next one.

### Humor

While subtle humor does help, avoid explicit jokes as they would distract the reader. Keep your humor obviously well-spirited and never make it at someone's expense.

## The Wiki For The World

You write for the whole world, and what is well known for you could confuse someone from abroad. If you mention a local practice or phenomenon, make sure that the world knows that custom, or provide context. Keep it general: everyone knows Oktoberfest, but not so much Wiesn, and a Christmas tree is not necessary a Christmas spruce.

Avoid local or professional slang and idioms like "automagically" or "take a rain check".

Avoid references to current pop culture, memes, and the like: most of it will fall out of fashion in a few years and your reference will lie dead.

## Clarity

As a general rule, make sure that there is only one way to read your prompt and the reader can read it easily.

### Active Voice

Active voice makes a sentence crisp. Not only does it shorten a clause, but it also makes clear what does what and encourages you to put more information into the sentence and focus on humans and their actions.

Sometimes you can shorten a sentence by a half if you put it in active voice. Sometimes active voice would let you cut your text by paragraphs.

Passive:

> Transactions are handled by nodes.
>
> Now wait while your transaction is verified. This is done by a committee of nodes that...
>
> Payment can only be performed from a wallet with enough tokens.

Active:

> Nodes handle transactions.
>
> Now wait while a committee of nodes verifies your transaction. This committee is...
>
> You can pay only if your wallet has enough tokens.

#### Passive Voice

There is still place for passive voice as you could use it to draw attention to the receiver of an action:

> Sometimes honest people are tricked by crooks.
>
> Your personal information is protected within the Tangle.

### Verbs

Choose action verbs over utility verbs, passive verbs, or nouns that mean actions. Avoid phrasal verbs: something uses something, not makes use of something. Prefer precise actions.

Bad:

> The IOTA style guide sometimes makes use of exaggeration in its examples for the sake of point clarification.

Good:

> The IOTA style guide sometimes exaggerates in its examples to convey a point clearly.

### Tense

In general, write in the present tense. Feel free to use the past or future tense anytime it would make more sense than the present tense, but try to get back to present as soon as you can:

> Technical writers will let you know when their commission is ready. Check it and either approve or request changes.

> The previous example left you without tokens, so request a replenishment from the faucet before you continue.

### Negations

Negations often make puzzling instructions, muddy explanations, weak non-statements.

Most problematic sentences involve the word "not" and other forms of negation tend to sound fine. Check a thesaurus for antonyms any time you write "does not catch", "not important", "not safe", or the like.

Bad:

> Do not share your seed with anyone.
>
> Do not connect to not healthy nodes.

Good:

> Never share your seed with anyone.
>
> Keep your seed secret.
>
> Connect only to healthy nodes.
>
> Ignore unhealthy nodes.

There are no sentences with double negations that you should not rewrite.

### Prerequisites and Conditions

Put prerequisites and conditions first, instructions second.

Bad:

> While the material is processed, pull the emergency lever if you see or smell smoke.

Good:

> If you see or smell smoke while the material is processed, pull the emergency lever.

### Choice Of Words

Prefer plain English over ornate or technical speech, but use technical or rare words any time they would make your thought clearer. Keep in mind your target audience: while engineers validate data, users check input forms for typos. Note that whatever works for users works for programmers, too.

If you can use a single word instead of a phrase, use a single word.

> A small amount of tokens.
>
> A few tokens.

If you have a long string of qualifiers, break it up into phrases instead.

> A fee-less non-blockchain decentralized ledger technology.
>
> A decentralized ledger technology that does not use blockchains and has no fees.

#### Terminology

Use consistent [terminology](/learn/glossary) within a paragraph, article, project, and the whole Wiki. Avoid synonyms for technical terms unless you have mentioned that term beforehand and the relation is clear.

If you refer to an object by its name, provide a qualifying noun: "the `sidebar.js` file", "the iota.rs library".

#### Prefabricated Phrases

> […] Modern writing at its worst does not consist in picking out words for the sake of their meaning and inventing images in order to make the meaning clearer. It consists in gumming together long strips of words which have already been set in order by someone else, and making the results presentable by sheer humbug.
>
> _George Orwell, Politics and The English Language_

In his essay, Orwell states two reasons why you would use a prefabricated phrase like "in the current state of affairs" or "put the effort in": either you have nothing to say and need to fill the void, or you have no clue how to say something. You have something to say, and you should know how to say it.

#### Red Flags

Pay attention to words that end in "-ify", "-ize", "-tion", "-ing", "-ism", and the like. While such a red flag would be a false warning in most cases, sometimes it indicates an idea that you could convey in simpler form, or a freshly invented word that has a well recognized counterpart.

### Metaphors

Each metaphor has its limits. Use them sparingly, do not stretch them too far, and never mix two metaphors.

### Pronouns

Refer to the reader in second person. Refer to IOTA Foundation and the IOTA community in third-person.

Try to avoid referring to yourself or your team, but if you have to, use the first person. By extension, avoid "us" in the sense of "the writer and the reader" and, in particular, "let us".

#### Singular Third-Person Pronouns

Avoid singular third-person pronouns in gender-neutral context altogether. Sometimes you could remove a pronoun or replace it with something else ("the", "someone's", "yours") or change the clause to plural without damaging clarity or style. Sometimes you could introduce real or fictional Alices and Bobs to eliminate gender-neutral context and give the reader someone to relate to.

## UI Elements and Navigation

Refer to UI elements by their name, type, or function, not just by how they look like or where they are, as that could vary between different screen sizes, platforms, and browsers.

Good:

> Click _Proceed_
>
> Click the _Proceed_ button. It is located on the bottom right of the screen in the PC version.

Bad:

> Click the green button on the bottom right of the screen.

Always put UI element names in [weak emphasis](./formatting.md#ui-elements).
