<script setup></script>

<template>
  <div class="radio-group">
    <slot />
  </div>
</template>

<style scoped>
.radio-group {
  display: grid;
  gap: 8px;
  margin-top: 32px;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (max-width: 767px) {
  .radio-group {
    gap: 16px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .radio-group {
    gap: 24px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (min-width: 960px) {
  .radio-group {
    gap: 32px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
