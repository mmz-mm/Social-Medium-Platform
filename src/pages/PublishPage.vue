<template>
  <div class="page-shell gap-4">
    <header class="glass-panel sticky top-5 z-20 flex items-center justify-between px-4 py-4">
      <button type="button" class="icon-button" @click="router.push({ name: 'home' })">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>
      <h1 class="font-headline text-xl font-bold text-ink">发布动态</h1>
      <button type="button" class="primary-button px-4 py-2 text-sm" @click="router.push({ name: 'home' })">发布</button>
    </header>

    <main class="glass-panel flex flex-1 flex-col gap-5 px-4 py-5">
      <textarea class="min-h-[180px] rounded-[24px] bg-white px-4 py-4 text-base text-ink outline-none placeholder:text-ink-soft shadow-card" placeholder="分享你的新鲜事..." />

      <section>
        <div class="grid grid-cols-2 gap-3">
          <div v-for="image in previewImages" :key="image" class="relative overflow-hidden rounded-[24px] bg-white shadow-card">
            <img :src="image" alt="preview" class="h-40 w-full object-cover" />
            <button type="button" class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white">
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
          <button type="button" class="flex h-40 flex-col items-center justify-center rounded-[24px] border border-dashed border-primary/20 bg-primary/5 text-primary">
            <span class="material-symbols-outlined text-[32px]">add</span>
            <span class="mt-2 text-sm font-semibold">上传图片</span>
          </button>
        </div>
      </section>

      <button type="button" class="section-card flex items-center justify-between px-4 py-4" @click="router.push({ name: 'post-detail' })">
        <div class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <span class="material-symbols-outlined">tag</span>
          </div>
          <div class="text-left">
            <p class="font-semibold text-ink">添加话题</p>
            <p class="text-sm text-ink-soft">让更多人看到你的动态</p>
          </div>
        </div>
        <span class="material-symbols-outlined text-ink-soft">chevron_right</span>
      </button>

      <button type="button" class="section-card flex items-center justify-between px-4 py-4" @click="router.push({ name: 'profile' })">
        <div class="flex items-center gap-3">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <span class="material-symbols-outlined">location_on</span>
          </div>
          <div class="text-left">
            <p class="font-semibold text-ink">添加位置</p>
            <p class="text-sm text-ink-soft">标记你的足迹</p>
          </div>
        </div>
        <span class="material-symbols-outlined text-ink-soft">chevron_right</span>
      </button>

      <div class="rounded-[24px] bg-rose-50 px-4 py-3 text-sm text-rose-500">
        <span class="font-semibold">请注意，</span>部分词汇可能违反社区准则
      </div>

      <div class="flex justify-end text-sm font-semibold text-ink-soft">120 / 500</div>
    </main>

    <BottomTabBar :items="ui.mainTabs" active-route-name="publish" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import BottomTabBar from '../components/BottomTabBar.vue';
import { useUiStore } from '../stores/ui';

const ui = useUiStore();
const router = useRouter();
const previewImages = computed(() => ui.detailPost.images.slice(1));
</script>
