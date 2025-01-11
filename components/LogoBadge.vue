<script setup lang="ts">
import { computed } from 'vue'
import logos from './logos.ts';
const props = defineProps({
  name: String
})

const src = computed(() => {
  const logo = logos.find(f => f.value === props.name)
  if (!logo) return ''
  return `https://img.shields.io/badge/${logo.label}-${logo.color}?style=flat-square&logo=${logo.icon}&logoColor=FFFFFF`
})

</script>

<template>
  <img :src="src" :alt="props.name" style="display: inline-block" />
</template>

<style scoped>

</style>