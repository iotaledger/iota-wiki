/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { sortBy } from '@site/src/utils/jsUtils';

/*
 * ADD YOUR TUTORIAL TO THE WIKI:
 *
 * Requirements for adding your tutorial to the Wiki:
 * - TODO
 *
 * Instructions:
 * - Add your repo in the json array below
 * - Add a image preview
 * - Use relevant tags to qualify your tutorial (read the tag descriptions below)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - Open a PR and check for reported CI errors
 *
 *
 * If you edit this file through the Github interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/iota-wiki/tree/<branch>/src/data/tutorials
 * - Drag-and-drop an image here to add it to your existing PR
 *
 */

export type Tag = {
    label: string;
    description: string;
    color: string;
};

export type TagType =
    | 'favorite'
    | 'scam'
    | 'catlover'
    | 'silkysmoth'
    | 'meme';

export type User = {
    title: string;
    description: string;
    preview: string;
    website: string;
    source: string | null;
    tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your tutorial
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export const Tags: Record<TagType, Tag> = {
    // DO NOT USE THIS TAG: we choose tutorials to add to favorites
    favorite: {
        label: 'Favorite',
        description:
            'Our favorite IOTA tutorials that you must absolutely check-out!',
        color: '#e9669e',
    },

    scam: {
        label: 'Scam',
        description: 'This seems fishy',
        color: '#39ca30',
    },

    catlover: {
        label: 'Cat-Lover',
        description: 'We love Cats(not the movie)!',
        color: '#dfd545',
    },

    silkysmoth: {
        label: 'Silky Smoth',
        description:
            'Only one person can make hair silky smoth',
        color: '#a44fb7',
    },

    meme: {
        label: 'Meme',
        description:
            'That\'s what we are here for, right?',
        color: '#127f82',
    },
};

// Add your tutorial to this list
// prettier-ignore
const Users: User[] = [
    {
        title: 'Hair like Jeroen',
        description:
            'Ever wanted to know how to get fabulous hair? Search no longer. In this tutorial we will show you how to style your hair perfectly',
        preview: require('./tutorials/the-weekend.png'),
        website: 'https://www.youtube.com/watch?v=E1TB4USszBk',
        source: null,
        tags: ['favorite', 'silkysmoth'],
    },
    {
        title: 'Cats, Cats and Cats (not the movie)',
        description:
            'Learn from the GIF grandmaster himself.',
        preview: require('./tutorials/cat.png'),
        website: 'https://youtu.be/dQw4w9WgXcQ',
        source: null,
        tags: ['favorite', 'catlover', 'meme'],
    },
    {
        title: 'He is still 25 because of this little trick the beauty industry doesn\'t want you to know',
        description:
            'He went diving and came back as a 25 year old. How? Click here to learn',
        preview: require('./tutorials/firefly-scam.png'),
        website: 'https://www.youtube.com/watch?v=Mh0uMbO78OM',
        source: null,
        tags: ['favorite', 'scam'],
    },
    /*
    Pro Tip: add your tutorial in alphabetical order.
    Appending your tutorial here (at the end) is more likely to produce Git conflicts.
     */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
    let result = Users;
    // Sort by tutorial name
    result = sortBy(result, (user) => user.title.toLowerCase());
    // Sort by favorite tag, favorites first
    result = sortBy(result, (user) => !user.tags.includes('favorite'));
    return result;
}

export const sortedUsers = sortUsers();