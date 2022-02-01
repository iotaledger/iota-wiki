/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { sortBy } from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations
 * (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - Use relevant tags to qualify your site (read the tag descriptions below)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the Github interface, you can:
 * - Submit first your users.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remains correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 *
 */

export type Tag = {
    label: string;
    description: string;
    color: string;
};

export type TagType =
    | 'favorite'
    | 'opensource'
    | 'product'
    | 'design'
    | 'i18n'
    | 'versioning'
    | 'large'
    | 'meta'
    | 'personal'
    | 'rtl';

export type User = {
    title: string;
    description: string;
    preview: string;
    website: string;
    source: string | null;
    tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
export const Tags: Record<TagType, Tag> = {
    // DO NOT USE THIS TAG: we choose sites to add to favorites
    favorite: {
        label: 'Favorite',
        description:
            'Our favorite Docusaurus sites that you must absolutely check-out!',
        color: '#e9669e',
    },

    // For open-source sites, a link to the source code is required
    opensource: {
        label: 'Open-Source',
        description: 'Open-Source Docusaurus sites can be useful for inspiration!',
        color: '#39ca30',
    },

    product: {
        label: 'Product',
        description: 'Docusaurus sites associated to a commercial product!',
        color: '#dfd545',
    },

    design: {
        label: 'Design',
        description:
            'Beautiful Docusaurus sites, polished and standing out from the initial template!',
        color: '#a44fb7',
    },

    i18n: {
        label: 'I18n',
        description:
            'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
        color: '#127f82',
    },

    versioning: {
        label: 'Versioning',
        description:
            'Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.',
        color: '#fe6829',
    },

    // Large sites, with a lot of content (> 200 pages, excluding versions)
    large: {
        label: 'Large',
        description:
            'Very large Docusaurus sites, including many more pages than the average!',
        color: '#8c2f00',
    },

    meta: {
        label: 'Meta',
        description: 'Docusaurus sites of Meta (formerly Facebook) projects',
        color: '#4267b2', // Facebook blue
    },

    personal: {
        label: 'Personal',
        description:
            'Personal websites, blogs and digital gardens built with Docusaurus',
        color: '#14cfc3',
    },

    rtl: {
        label: 'RTL Direction',
        description:
            'Docusaurus sites using the right-to-left reading direction support.',
        color: '#ffcfc3',
    },
};

// Add your site to this list
// prettier-ignore
const Users: User[] = [
    /*
    Pro Tip: add your site in alphabetical order.
    Appending your site here (at the end) is more likely to produce Git conflicts.
     */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
    let result = Users;
    // Sort by site name
    result = sortBy(result, (user) => user.title.toLowerCase());
    // Sort by favorite tag, favorites first
    result = sortBy(result, (user) => !user.tags.includes('favorite'));
    return result;
}

export const sortedUsers = sortUsers();