import { defineConfig } from 'vitepress';

export const zhConfig = defineConfig({
  lang: 'zh-Hans',
  description: '一个快速创建 JavaScript 应用程序的工具',
  themeConfig: {
    nav: [
      { text: '快速开始', link: '/zh/quick-start' },
      { text: '指南', link: '/zh/guide/what-is-runow' },
      { text: '案例', link: '/zh/showcase' },
      {
        text: '更新日志',
        link: 'https://github.com/runowjs/runow/blob/main/CHANGELOG.md',
      },
    ],

    sidebar: {
      '/zh/guide/': {
        base: '/zh/guide/',
        items: [
          {
            text: '指南',
            collapsed: false,
            items: [
              { text: '什么是Runow?', link: 'what-is-runow' },
              { text: '快速开始', link: 'getting-started' },
              { text: '命令行接口', link: 'cli' },
              { text: '开发部署', link: 'deploy' },
              { text: '故障排除', link: 'troubleshooting' },
              { text: '后端集成', link: 'backend-integration' },
            ],
          },
          {
            text: '模板',
            collapsed: false,
            items: [
              {
                text: 'React',
                items: [
                  { text: 'Vite', link: 'react/vite' },
                  { text: 'Next', link: 'react/next' },
                  { text: 'Remix', link: 'react/remix' },
                ],
              },
              {
                text: 'Vue',
                items: [
                  { text: 'Vite', link: 'vue/vite' },
                  { text: 'Nuxt', link: 'vue/nuxt' },
                ],
              },
              {
                text: 'Angular',
                items: [{ text: 'Vite', link: 'angular/vite' }],
              },
              { text: 'Solid', items: [{ text: 'Vite', link: 'solid/vite' }] },
              {
                text: 'Svelte',
                items: [{ text: 'Vite', link: 'svelte/vite' }],
              },
              {
                text: 'Astro',
                items: [{ text: 'Vite', link: 'astro/vite' }],
              },
              {
                text: 'Vanilla',
                items: [{ text: 'Vite', link: 'vanilla/vite' }],
              },
              {
                text: '跨平台',
                items: [
                  { text: 'Electron', link: 'cross/electron' },
                  { text: 'Flutter', link: 'cross/flutter' },
                  { text: 'Uni-app', link: 'cross/uni-app' },
                  { text: 'ionic', link: 'cross/ionic' },
                  { text: 'expo', link: 'cross/expo' },
                ],
              },
            ],
          },
          {
            text: '集成',
            collapsed: false,
            items: [
              { text: 'UI', link: 'ui' },
              { text: '构建', link: 'build' },
              { text: '框架', link: 'framework' },
              { text: '测试', link: 'test' },
            ],
          },
        ],
      },
    },
  },
});

export default zhConfig;
