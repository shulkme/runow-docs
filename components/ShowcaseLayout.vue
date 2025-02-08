<script setup>
import { Content } from 'vitepress';
</script>

<template>
  <div class="showcase-layout">
    <Content />
  </div>
</template>

<style>
.showcase-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--vp-nav-height));
  align-items: stretch;
  max-width: 1280px;
  padding: 24px;
  margin: 0 auto;
}

.showcase-layout h1 {
  font-size: 24px;
  line-height: 1.5;
  font-weight: bold;
}

@media (min-width: 640px) {
  .showcase-layout {
    padding: 48px;
  }

  .showcase-layout h1 {
    font-size: 28px;
  }
}
@media (min-width: 960px) {
  .showcase-layout {
    padding: 64px;
  }
  .showcase-layout h1 {
    font-size: 32px;
  }
}
</style>
