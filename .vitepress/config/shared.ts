import { defineConfig } from 'vitepress';

export const sharedConfig = defineConfig({
  title: 'Runow',
  description: 'A quick tool to create JavaScript apps',
  rewrites: {
    'en/:rest*': ':rest*',
  },
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/runowjs/runow' }],
  },
});

export default sharedConfig;
