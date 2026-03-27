<template>
  <div class="page-shell gap-4">
    <header class="glass-panel sticky top-5 z-20 flex items-center justify-between px-4 py-4">
      <div class="flex items-center gap-3">
        <button type="button" class="icon-button" @click="router.push({ name: 'login' })">
          <span class="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft">Social Feed</p>
          <h1 class="font-headline text-2xl font-bold text-primary">Discovery</h1>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <button type="button" class="icon-button" @click="router.push({ name: 'ai' })">
          <span class="material-symbols-outlined text-[20px]">search</span>
        </button>
        <button type="button" class="icon-button" @click="router.push({ name: 'chat' })">
          <span class="material-symbols-outlined text-[20px]">chat_bubble</span>
        </button>
        <button type="button" class="overflow-hidden rounded-full ring-2 ring-white" @click="router.push({ name: 'profile' })">
          <img :src="ui.currentUser.avatar" :alt="ui.currentUser.name" class="h-10 w-10 object-cover" />
        </button>
      </div>
    </header>

    <main class="flex flex-1 flex-col gap-4 pb-2">
      <div class="flex justify-center py-2">
        <div class="h-9 w-9 rounded-full border-[3px] border-primary/20 border-t-primary animate-spin"></div>
      </div>

      <PostCard v-for="post in ui.posts" :key="post.id" :post="post" @open="router.push({ name: 'post-detail' })" />

      <button type="button" class="rounded-[22px] border border-dashed border-primary/20 bg-white/60 px-4 py-4 text-sm font-semibold text-ink-soft">
        加载更多内容
      </button>
    </main>

    <BottomTabBar :items="ui.mainTabs" active-route-name="home" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import BottomTabBar from '../components/BottomTabBar.vue';
import PostCard from '../components/PostCard.vue';
import { useUiStore } from '../stores/ui';

const ui = useUiStore();
const router = useRouter();
</script>
