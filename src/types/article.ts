export type EyeCatch = {
  url: string;
  height?: number;
  width?: number;
  type?: string;
  alt?: string;
};

export type Article = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  revisedAt: string;
  eyecatch: EyeCatch;
  summary: string;
};

export type ArticleResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Article[];
};
