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

      <section class="glass-panel px-4 py-4">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft">Today Focus</p>
            <h2 class="mt-2 font-headline text-2xl font-bold text-ink">把社交、聊天和 AI 放在同一条时间线</h2>
            <p class="mt-3 text-sm leading-6 text-ink-soft">这个基础版本先完成页面结构和路由跳转，后续可以继续接入发帖、私信、智能对话等真实能力。</p>
          </div>
          <button type="button" class="primary-button shrink-0 px-4" @click="router.push({ name: 'publish' })">
            <span class="material-symbols-outlined text-[20px]">add</span>
            发布
          </button>
        </div>

        <div class="mt-4 grid grid-cols-2 gap-3">
          <button type="button" class="rounded-[24px] bg-white px-4 py-4 text-left shadow-card" @click="router.push({ name: 'ai' })">
            <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <span class="material-symbols-outlined">smart_toy</span>
            </div>
            <h3 class="font-headline text-lg font-bold text-ink">AI 助手</h3>
            <p class="mt-1 text-sm text-ink-soft">查看流式对话布局</p>
          </button>
          <button type="button" class="rounded-[24px] bg-white px-4 py-4 text-left shadow-card" @click="router.push({ name: 'chat' })">
            <div class="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <span class="material-symbols-outlined">forum</span>
            </div>
            <h3 class="font-headline text-lg font-bold text-ink">实时聊天</h3>
            <p class="mt-1 text-sm text-ink-soft">进入消息会话页面</p>
          </button>
        </div>
      </section>

      <PostCard v-for="post in ui.posts" :key="post.id" :post="post" @open="router.push({ name: 'post-detail' })" />

      <button type="button" class="rounded-[22px] border border-dashed border-primary/20 bg-white/60 px-4 py-4 text-sm font-semibold text-ink-soft">
        加载更多内容
      </button>
    </main>

    <button type="button" class="fixed bottom-28 left-1/2 z-20 inline-flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-brand-gradient text-white shadow-float sm:left-auto sm:right-[max(2rem,calc((100vw-430px)/2+1rem))] sm:translate-x-0" @click="router.push({ name: 'publish' })">
      <span class="material-symbols-outlined text-[28px]">add</span>
    </button>

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
