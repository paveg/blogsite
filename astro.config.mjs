import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import remarkLinkCard from 'remark-link-card';

// https://astro.build/config
export default defineConfig({
  adapter: vercel({
    analytics: true,
  }),
  site: 'https://www.funailog.com',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page !== 'https://www.funailog.com/articles/using-mdx/',
    }),
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [remarkLinkCard],
    rehypePlugins: [
      rehypeSlug,
      [rehypeToc, { headings: ['h2', 'h3'] }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          content: {
            type: 'element',
            tagName: 'i',
            properties: { className: ['heading-anchor', 'fa', 'fa-link'] },
            children: [],
          },
        },
      ],
    ],
    remarkRehype: {
      footnoteLabel: '脚注',
      footnoteBackLabel: 'コンテンツへ戻る',
      footnoteLabelTagName: 'span',
    },
  },
});
