//TODO tutorial.json should propably be a key-value dictionary
import config from '@site/tutorials.json';

export type Tutorial = {
    title: string;
    description: string;
    preview: string;
    website: string;
    source: string | null;
    tags: string[];
};

export const Tags = [ 
    ...config.typeOptions, 
    ...config.topicOptions, 
    ...config.frameworkOptions,
    ...config.languageOptions,
];

export const TagList = Tags.map(tag => tag.value);
