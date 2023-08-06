import type { MicroCMSQueries } from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';
import type { Article, ArticleResponse } from '../types/article';

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const fetchArticleList = async (queries?: MicroCMSQueries) => {
  return await client.get<ArticleResponse>({ endpoint: 'articles', queries });
};

export const fetchArticle = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Article>({
    endpoint: 'articles',
    contentId,
    queries,
  });
};
