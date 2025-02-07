import { defineConfig } from 'vitepress';

export const enConfig = defineConfig({
  lang: 'en-US',
  description: 'A quick tool to craft JavaScript apps',
  themeConfig: {
    nav: [
      { text: 'Quick Start', link: '/quick-start' },
      { text: 'Guide', link: '/guide/what-is-runow' },
      { text: 'Showcase', link: '/showcase' },
      {
        text: 'Changelog',
        link: 'https://github.com/runowjs/runow/blob/main/CHANGELOG.md',
      },
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
                text: 'Cross',
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
            text: 'Integration',
            collapsed: false,
            items: [
              { text: 'UI', link: 'ui' },
              { text: 'Build', link: 'build' },
              { text: 'Framework', link: 'framework' },
              { text: 'Test', link: 'test' },
            ],
          },
        ],
      },
    },
  },
});

export default enConfig;
