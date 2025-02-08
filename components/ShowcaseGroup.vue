<script setup></script>

<template>
  <div class="showcase-group">
    <slot />
  </div>
</template>

<style scoped>
.showcase-group {
  display: grid;
  gap: 8px;
  margin-top: 32px;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 768px) {
  .showcase-group {
    gap: 24px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 960px) {
  .showcase-group {
    gap: 32px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
