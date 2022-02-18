/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { sortBy } from '@site/src/utils/jsUtils';
import IOTAWASMClientImageUrl from '@site/static/img/iota_client.png';

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
 * - Submit first your tutorials.tsx edit PR
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
  | 'meme'
  | 'videotutorial'
  | 'livecoding'
  | 'texttutorial'
  | 'identity'
  | 'gettingstarted'
  | 'integrationservices';

export type Tutorial = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

const colors: string[] = [
  '#010067',
  '#d5ff00',
  '#ff0056',
  '#9e008e',
  '#0e4ca1',
  '#ffe502',
  '#005f39',
  '#00ff00',
  '#95003a',
  '#ff937e',
  '#a42400',
  '#001544',
  '#91d0cb',
  '#620e00',
  '#6b6882',
  '#0000ff',
  '#007db5',
  '#6a826c',
  '#00ae7e',
  '#c28c9f',
  '#be9970',
  '#008f9c',
  '#5fad4e',
  '#ff0000',
  '#ff00f6',
  '#ff029d',
  '#683d3b',
  '#ff74a3',
  '#968ae8',
  '#98ff52',
  '#a75740',
  '#01fffe',
  '#ffeee8',
  '#fe8900',
  '#bdc6ff',
  '#01d0ff',
  '#bb8800',
  '#7544b1',
  '#a5ffd2',
  '#ffa6fe',
  '#774d00',
  '#7a4782',
  '#263400',
  '#004754',
  '#43002c',
  '#b500ff',
  '#ffb167',
  '#ffdb66',
  '#90fb92',
  '#7e2dd2',
  '#bdd393',
  '#e56ffe',
  '#deff74',
  '#00ff78',
  '#009bff',
  '#006401',
  '#0076ff',
  '#85a900',
  '#00b917',
  '#788231',
  '#00ffc6',
  '#ff6e41',
  '#e85ebe',
];

// LIST OF AVAILABLE TAGS
// Available tags to assign to your tutorial
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
// Colors for the tags are used from the 64 colors set here: http://godsnotwheregodsnot.blogspot.com/2012/09/color-distribution-methodology.html
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose tutorials to add to favorites
  favorite: {
    label: 'Favorite',
    description:
      'Our favorite IOTA tutorials that you must absolutely check-out!',
    color: colors[0],
  },

  gettingstarted: {
    label: 'Getting Started',
    description: 'Easy Tutorials for getting started',
    color: colors[1],
  },

  videotutorial: {
    label: 'Video Tutorial',
    description: 'Tutorial in video format',
    color: colors[2],
  },

  texttutorial: {
    label: 'Text Tutorial',
    description: 'Tutorial in written format',
    color: colors[3],
  },

  livecoding: {
    label: 'Live Coding Session',
    description: 'Recorded live coding session',
    color: colors[4],
  },

  integrationservices: {
    label: 'IOTA Integration Services',
    description: 'Integrate IOTA seamlessly',
    color: colors[5],
  },

  identity: {
    label: 'IOTA Identity',
    description: 'This Tutorial is using the IOTA Identity framework',
    color: colors[6],
  },

  scam: {
    label: 'Scam',
    description: 'This seems fishy',
    color: colors[7],
  },

  catlover: {
    label: 'Cat-Lover',
    description: 'We love Cats(not the movie)!',
    color: colors[8],
  },

  silkysmoth: {
    label: 'Silky Smoth',
    description: 'Only one person can make hair silky smoth',
    color: colors[9],
  },

  meme: {
    label: 'Meme',
    description: "That's what we are here for, right?",
    color: colors[10],
  },
};

// Add your tutorial to this list
// prettier-ignore
const Tutorials: Tutorial[] = [
    {
        title: 'Digitally Validate a Degree',
        description:
            'In this tutorial, you will use the WASM binding of the IOTA Identity framework to digitally prove the existence and validity of a degree.',
        preview: require('./tutorials/validate-a-degree.png'),
        website: 'identity.rs/tutorials/validate_university_degree',
        source: 'https://github.com/adrian-grassl/iota-identity-tutorial/',
        tags: ['favorite', 'identity', 'texttutorial'],
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
        title: 'Hair like Jeroen',
        description:
            'Ever wanted to know how to get fabulous hair? Search no longer. In this tutorial we will show you how to style your hair perfectly',
        preview: require('./tutorials/the-weekend.png'),
        website: 'https://www.youtube.com/watch?v=E1TB4USszBk',
        source: null,
        tags: ['favorite', 'silkysmoth'],
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
    {
      title: "IOTA Client WASM Tutorial",
      description:
        'This tutorial shows you how to use the WASM IOTA client',
      preview: IOTAWASMClientImageUrl,
      source: null,
      website: 'iota-client-wasm-tutorial/tutorial',
      tags: ['texttutorial', 'gettingstarted']
    },
    {
        title: 'ISCP Tutorials by Kumar Anirudha',
        description:
            'Youtube playlist with Smart Contract tutorials',
        preview: require('./tutorials/iscp-tutorials.png'),
        source: null,
        website: 'https://www.youtube.com/playlist?list=PLMbc46iGTB_SCQ-Ut_c8__ssMDFUusVBJ',
        tags: ['videotutorial'],
    },
    {
        title: 'Rust Live Coding Sessions with the Bee Team',
        description:
            '25 Live coding sessions where you can follow some of the developments in the L1 Bee node',
        preview: require('./tutorials/rust-live-coding-bee.png'),
        website: 'https://www.youtube.com/playlist?list=PLMbc46iGTB_SBwcE5WfUIV5HthmH34U2R',
        source: null,
        tags: ['livecoding'],
    },
    {
        title: 'Streams and Identity',
        description:
            'The IOTA Integration Services implement a high-level API for common interactions with Decentralized Identities and Data Streams based on the IOTA Identity and IOTA Streams libraries, facilitating the integration of IOTA into existing digital infrastructure.',
        preview: require('./tutorials/integration-streams-identity.png'),
        website: 'integration-services/welcome',
        source: 'https://github.com/iotaledger/integration-services',
        tags: ['integrationservices', 'texttutorial'],
    },
    {
        title: 'Open SSH Key Generation Linux and MacOS',
        description:
            'Learn hot to secure your server access with SSH keys',
        preview: require('./tutorials/openssh-generation.png'),
        website: 'https://www.youtube.com/watch?v=Cbuch9_NeYo&list=PLMbc46iGTB_RUu-Kd2EIUAc8lQShfaCD6',
        source: null,
        tags: ['videotutorial'],
    },
    {
        title: 'Zebra Tutorial',
        description:
          'Use Zebra with IOTA DID',
        preview: require('./tutorials/zebra.png'),
        website: 'zebra-iota-edge-sdk/tutorials/zebra-iota-edge-sdk/zebra-iota-edge-sdk-101-tutorial',
        source: 'https://github.com/zebradevs/zebra-iota-edge-sdk',
        tags: ['integrationservices', 'texttutorial'],
    },
    /*
    Pro Tip: add your tutorial in alphabetical order.
    Appending your tutorial here (at the end) is more likely to produce Git conflicts.
     */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortTutorials() {
  let result = Tutorials;
  // Sort by tutorial name
  result = sortBy(result, (tutorial) => tutorial.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (tutorial) => !tutorial.tags.includes('favorite'));
  return result;
}

export const sortedTutorials = sortTutorials();
