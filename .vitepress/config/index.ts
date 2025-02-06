import { defineConfig } from 'vitepress';
import enConfig from './en';
import sharedConfig from './shared';
import viteConfig from './vite';
import zhConfig from './zh';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ...viteConfig,
  ...sharedConfig,
  locales: {
    root: {
      label: 'English',
      ...enConfig,
    },
    zh: {
      label: '简体中文',
      ...zhConfig,
    },
  },
});
