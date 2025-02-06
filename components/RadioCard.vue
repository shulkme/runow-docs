<script setup>
const props = defineProps({
  icon: String,
  label: String,
  href: String,
  disabled: Boolean | undefined,
});
</script>

<template>
  <a :href="props.href" class="radio-card" :data-disabled="props.disabled">
    <div class="radio-card_hd">
      <img
        :src="props.icon"
        :alt="props.label"
        class="radio-card_hd__icon"
        width="64"
        height="64"
      />
    </div>
    <div class="radio-card_bd">
      <h3 class="radio-card_bd__title">{{ props.label }}</h3>
    </div>
  </a>
</template>

<style scoped>
.radio-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 32px;
  gap: 8px;
  border: 4px solid var(--vp-c-bg-soft);
  cursor: pointer;
  transition: all 0.3s;
}

.radio-card[data-disabled] {
  filter: grayscale(100%);
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.radio-card:hover {
  border-color: var(--vp-c-brand-3);
}

.radio-card_hd__icon {
  width: 64px;
  height: 64px;
}

.radio-card_bd__title {
  font-size: 14px;
  margin: 0;
}
</style>
