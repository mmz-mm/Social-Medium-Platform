<template>
  <article class="section-card overflow-hidden p-3">
    <div class="flex items-start justify-between gap-3 px-2 py-1">
      <div class="flex items-start gap-3">
        <img :src="post.avatar" :alt="post.author" class="h-11 w-11 rounded-full object-cover" />
        <div>
          <div class="flex items-center gap-2">
            <h3 class="font-headline text-sm font-bold text-ink">{{ post.author }}</h3>
            <span class="text-xs text-ink-soft">{{ post.time }}</span>
          </div>
          <p class="mt-2 text-sm leading-6 text-ink/90">{{ post.content }}</p>
          <div v-if="post.tags?.length" class="mt-3 flex flex-wrap gap-2">
            <span v-for="tag in post.tags" :key="tag" class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
      <button type="button" class="text-ink-soft">
        <span class="material-symbols-outlined text-[20px]">more_horiz</span>
      </button>
    </div>

    <button type="button" class="mt-3 block w-full text-left" @click="$emit('open')">
      <div :class="gridClass">
        <img
          v-for="image in post.images"
          :key="image"
          :src="image"
          :alt="post.author"
          class="h-64 w-full rounded-[22px] object-cover"
          :class="post.images.length > 1 ? 'h-40' : 'h-72'"
        />
      </div>
    </button>

    <div class="flex items-center justify-between px-2 pb-2 pt-4 text-xs font-semibold text-ink-soft">
      <div class="flex items-center gap-5">
        <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-[18px] text-primary">favorite</span>{{ post.stats.likes }}</span>
        <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-[18px]">chat_bubble</span>{{ post.stats.comments }}</span>
      </div>
      <span class="inline-flex items-center gap-1.5"><span class="material-symbols-outlined text-[18px]">share</span>{{ post.stats.shares }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { Post } from '../types/app';

const props = defineProps<{
  post: Post;
}>();

defineEmits<{
  (event: 'open'): void;
}>();

const gridClass = computed(() => {
  if (props.post.images.length > 1) {
    return 'grid grid-cols-2 gap-3';
  }

  return 'grid grid-cols-1';
});
</script>
