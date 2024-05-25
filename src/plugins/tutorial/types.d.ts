export interface Options {
  title: string;
  description: string;
  tags: string[];
  source?: string;
  preview?: string;
}

export interface DefaultOptions {
  id: string;
  route: string;
}

export type UserOptions = Options & Partial<DefaultOptions>;
export type NormalizedOptions = Options & DefaultOptions;
