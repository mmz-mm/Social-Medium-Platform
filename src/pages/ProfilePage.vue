<template>
  <div class="page-shell gap-4">
    <header class="glass-panel sticky top-5 z-20 flex items-center justify-between px-4 py-4">
      <button type="button" class="icon-button" @click="router.push({ name: 'home' })">
        <span class="material-symbols-outlined text-[20px]">arrow_back</span>
      </button>
      <h1 class="font-headline text-2xl font-bold text-ink">Profile</h1>
      <button type="button" class="icon-button" @click="router.push({ name: 'ai' })">
        <span class="material-symbols-outlined text-[20px]">settings</span>
      </button>
    </header>

    <main class="flex flex-1 flex-col gap-4">
      <section class="glass-panel px-5 py-6 text-center">
        <div class="mx-auto h-24 w-24 overflow-hidden rounded-[28px] ring-4 ring-white">
          <img :src="ui.currentUser.avatar" :alt="ui.currentUser.name" class="h-full w-full object-cover" />
        </div>
        <h2 class="mt-4 font-headline text-4xl font-bold tracking-[-0.04em] text-ink">{{ ui.currentUser.name }}</h2>
        <p class="mt-2 text-sm font-semibold text-primary">{{ ui.currentUser.handle }}</p>
        <p class="mx-auto mt-4 max-w-[280px] text-sm leading-7 text-ink-soft">{{ ui.currentUser.bio }}</p>

        <div class="mt-6 grid grid-cols-3 gap-3">
          <div v-for="metric in ui.profileMetrics" :key="metric.label" class="rounded-[22px] bg-white px-3 py-4 shadow-card">
            <p class="font-headline text-2xl font-bold text-ink">{{ metric.value }}</p>
            <p class="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">{{ metric.label }}</p>
          </div>
        </div>
      </section>

      <section class="glass-panel px-4 py-5">
        <div class="mb-4 flex items-center justify-between">
          <h3 class="font-headline text-lg font-bold text-ink">Account Activity</h3>
          <button type="button" class="text-sm font-semibold text-primary" @click="router.push({ name: 'post-detail' })">查看详情</button>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="rounded-[22px] bg-white px-4 py-5 shadow-card">
            <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <span class="material-symbols-outlined">visibility</span>
            </div>
            <p class="font-headline text-3xl font-bold text-ink">24.5k</p>
            <p class="mt-1 text-sm text-ink-soft">Profile Views</p>
          </div>
          <div class="rounded-[22px] bg-white px-4 py-5 shadow-card">
            <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <span class="material-symbols-outlined">favorite</span>
            </div>
            <p class="font-headline text-3xl font-bold text-ink">89.2k</p>
            <p class="mt-1 text-sm text-ink-soft">Total Likes</p>
          </div>
        </div>
      </section>

      <section class="grid grid-cols-2 gap-3">
        <button v-for="card in ui.profileCards" :key="card.title" type="button" class="section-card flex flex-col items-start gap-3 px-4 py-5 text-left" @click="go(card.routeName)">
          <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <span class="material-symbols-outlined">{{ card.icon }}</span>
          </div>
          <div>
            <p class="font-headline text-lg font-bold text-ink">{{ card.title }}</p>
            <p class="mt-1 text-sm text-ink-soft">{{ card.subtitle }}</p>
          </div>
        </button>
      </section>

      <button type="button" class="section-card mt-1 inline-flex items-center justify-center gap-2 px-4 py-4 text-base font-semibold text-rose-500" @click="router.push({ name: 'login' })">
        <span class="material-symbols-outlined text-[20px]">logout</span>
        Sign Out
      </button>
    </main>

    <BottomTabBar :items="ui.mainTabs" active-route-name="profile" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import BottomTabBar from '../components/BottomTabBar.vue';
import { useUiStore } from '../stores/ui';

const ui = useUiStore();
const router = useRouter();

const go = (routeName?: string) => {
  if (routeName) {
    router.push({ name: routeName });
  }
};
</script>
