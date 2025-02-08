<script setup>
const props = defineProps({
  cover: String,
  title: String,
  description: String,
  author: String,
  framework: String,
  link: String,
});
</script>

<template>
  <a :href="props.link" class="showcase-card" target="_blank">
    <div class="showcase-card_hd">
      <div class="showcase-card_hd__image">
        <img :src="props.cover" :alt="props.title" />
      </div>
    </div>
    <div class="showcase-card_bd">
      <h3 class="showcase-card_bd__title">
        {{ props.title }}
      </h3>
      <p class="showcase-card_bd__description">
        {{ props.description }}
      </p>
    </div>
    <div class="showcase-card_ft">
      <span class="showcase-card_ft__author">by {{ props.author }}</span>
      <span class="showcase-card_ft__framework">
        <img
          :src="`https://simpleicons.org/icons/${props.framework}.svg`"
          height="16"
          :alt="props.framework"
        />
      </span>
    </div>
  </a>
</template>

<style scoped>
.showcase-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-elv);
  box-shadow: var(--vp-shadow-1);
}
.showcase-card_hd {
  padding: 12px 12px 0;
}
.showcase-card_hd__image {
  display: block;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}
.showcase-card_hd__image > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.showcase-card_bd {
  padding: 12px 12px 8px;
}
.showcase-card_bd__title {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  height: 24px;
}
.showcase-card_bd__description {
  height: 34px;
  font-size: 14px;
  margin: 0;
  line-height: 1.2;
  color: var(--vp-c-text-2);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.showcase-card_ft {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
}

.showcase-card_ft__author {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.showcase-card_ft__framework > img {
  height: 16px;
}
</style>
