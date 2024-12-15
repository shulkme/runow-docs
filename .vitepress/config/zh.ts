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
            text: '指南',
            collapsed: false,
            items: [
              { text: '什么是Runow?', link: 'what-is-runow' },
              { text: '快速开始', link: 'getting-started' },
              { text: '命令行接口', link: 'cli' },
              { text: '开发部署', link: 'deploy' },
              { text: '故障排除', link: 'philosophy' },
              { text: '后端集成', link: 'backend-integration' },
            ],
          },
          {
            text: '前端',
            collapsed: false,
            items: [
              { text: 'React', link: 'react' },
              { text: 'Vue', link: 'vue' },
              { text: 'Angular', link: 'angular' },
              { text: 'Solid', link: 'solid' },
              { text: 'Svelte', link: 'svelte' },
            ],
          },
          {
            text: '后端',
            collapsed: false,
            items: [
              { text: 'Koa', link: 'koa' },
              { text: 'Express', link: 'express' },
              { text: 'Nest', link: 'nest' },
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
          {
            text: '跨平台',
            collapsed: false,
            items: [
              { text: '原生', link: 'native' },
              { text: '小程序', link: 'mini-program' },
              { text: '快应用', link: 'quick-app' },
            ],
          },
          {
            text: '学习',
            collapsed: false,
            items: [
              { text: '微前端', link: 'micro-app' },
              { text: '服务端渲染', link: 'ssr' },
              { text: '边缘计算', link: 'edge-computing' },
              { text: '无服务器', link: 'serverless' },
              { text: '性能优化', link: 'performance' },
              { text: '权限控制', link: 'auth' },
            ],
          },
        ],
      },
    },
  },
});
