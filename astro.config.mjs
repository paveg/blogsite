import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.funailog.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
  markdown: {
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
