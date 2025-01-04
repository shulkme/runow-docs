import { defineConfig } from 'vitepress';

export const en = defineConfig({
  lang: 'en-US',
  description: 'A quick tool to craft JavaScript apps',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/what-is-runow' },
      { text: 'Demo', link: '/demo' },
      { text: 'Changelog', link: 'https://github.com/runowjs/runow/blob/main/CHANGELOG.md' },
    ],

    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          {
            text: 'Guide',
            collapsed: false,
            items: [
              { text: 'What is Runow?', link: 'what-is-runow' },
              { text: 'Getting Started', link: 'getting-started' },
              { text: 'CLI', link: 'cli' },
              { text: 'Deploy', link: 'deploy' },
              { text: 'Troubleshooting', link: 'troubleshooting' },
              { text: 'Backend Integration', link: 'backend-integration' },
            ],
          },
          {
            text: 'Template',
            collapsed: false,
            items: [
              { text: 'React', link: 'react' },
              { text: 'Vue', link: 'vue' },
              { text: 'Angular', link: 'angular' },
              { text: 'Solid', link: 'solid' },
              { text: 'Svelte', link: 'svelte' },
              { text: 'Vanilla', link: 'vanilla' },
              { text: 'Mini Program', link: 'mini-program' },
              { text: 'Quick App', link: 'quick-app' },
              { text: 'Native', link: 'native' },
            ],
          },
          {
            text: 'Integration',
            collapsed: false,
            items: [
              { text: 'UI', link: 'ui' },
              { text: 'Build', link: 'build' },
              { text: 'Framework', link: 'framework' },
              { text: 'Test', link: 'test' },
            ],
          }
        ],
      },
    },
  },
});
