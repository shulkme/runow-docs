import { defineConfig } from 'vitepress';

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: '一个快速创建 JavaScript 应用程序的工具',
  themeConfig: {
    nav: [
      { text: '指南', link: '/zh/guide/what-is-runow' },
      { text: '预览', link: '/zh/demo' },
      { text: '更新日志', link: 'https://github.com/runowjs/runow/blob/main/CHANGELOG.md' },
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
              { text: 'React', link: 'react' },
              { text: 'Vue', link: 'vue' },
              { text: 'Angular', link: 'angular' },
              { text: 'Solid', link: 'solid' },
              { text: 'Svelte', link: 'svelte' },
              { text: 'Vanilla', link: 'vanilla' },
              { text: '小程序', link: 'mini-program' },
              { text: '快应用', link: 'quick-app' },
              { text: '原生', link: 'native' },
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
          }
        ],
      },
    },
  },
});
