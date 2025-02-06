<script setup>
import { Content } from 'vitepress';
</script>

<template>
  <div class="frame-layout">
    <Content />
  </div>
</template>

<style>
.frame-layout {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - var(--vp-nav-height));
  align-items: stretch;
  max-width: 1280px;
  padding: 24px;
  margin: 0 auto;
}

.frame-layout h1 {
  font-size: 24px;
  line-height: 1.5;
  font-weight: bold;
}

@media (min-width: 640px) {
  .frame-layout {
    padding: 48px;
  }

  .frame-layout h1 {
    font-size: 28px;
  }
}
@media (min-width: 960px) {
  .frame-layout {
    padding: 64px;
  }
  .frame-layout h1 {
    font-size: 32px;
  }
}
</style>
