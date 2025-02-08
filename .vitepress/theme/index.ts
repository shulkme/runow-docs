// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import FrameLayout from '../../components/FrameLayout.vue';
import LogoBadge from '../../components/LogoBadge.vue';
import RadioCard from '../../components/RadioCard.vue';
import RadioGroup from '../../components/RadioGroup.vue';
import ShowcaseCard from '../../components/ShowcaseCard.vue';
import ShowcaseGroup from '../../components/ShowcaseGroup.vue';
import ShowcaseLayout from '../../components/ShowcaseLayout.vue';
import Layout from './Layout.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout);
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('LogoBadge', LogoBadge);
    app.component('RadioGroup', RadioGroup);
    app.component('RadioCard', RadioCard);
    app.component('FrameLayout', FrameLayout);
    app.component('ShowcaseLayout', ShowcaseLayout);
    app.component('ShowcaseCard', ShowcaseCard);
    app.component('ShowcaseGroup', ShowcaseGroup);
  },
} satisfies Theme;
