import { defineConfig } from 'vitepress';

export const en = defineConfig({
  lang: 'en-US',
  description: 'A quick tool to craft JavaScript apps',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/zh/guide/what-is-runow' },
      { text: 'Get Pro', link: '/zh/pro' },
      { text: 'Changelog', link: '/changelog' },
    ],

    sidebar: {
      '/zh/guide/': {
        base: '/zh/guide/',
        items: [
          {
            text: 'Examples',
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' },
              { text: 'Runtime API Examples', link: '/api-examples' },
            ],
          },
        ],
      },
    },
  },
});
