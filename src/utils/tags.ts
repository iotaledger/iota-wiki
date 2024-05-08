//TODO tutorial.json should propably be a key-value dictionary
import config from '../../config/tags.json';

export interface Tag {
  label: string;
  value: string;
  description: string;
  color: string;
}

export const TagCategories = new Map(Object.entries<Array<Tag>>(config));
export const Tags = Array.from(TagCategories.values()).flat();
export const TagValues = Tags.map((tag) => tag.value);
