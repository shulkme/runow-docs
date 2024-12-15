import { defineConfig } from 'vitepress';

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '一个快速创建 JavaScript 应用程序的工具',
  themeConfig: {
    nav: [
      { text: '指南', link: '/zh/guide/what-is-runow' },
      { text: 'Get Pro', link: '/zh/pro' },
      { text: '更新日志', link: '/changelog' },
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
