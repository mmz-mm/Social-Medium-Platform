<template>
  <div class="page-shell gap-4 pb-28">
    <header class="glass-panel sticky top-5 z-20 flex items-center justify-between px-4 py-4">
      <button type="button" class="icon-button" @click="router.push({ name: 'home' })">
        <span class="material-symbols-outlined text-[20px]">arrow_back</span>
      </button>
      <h1 class="font-headline text-xl font-bold text-ink">Post</h1>
      <button type="button" class="icon-button" @click="router.push({ name: 'publish' })">
        <span class="material-symbols-outlined text-[20px]">share</span>
      </button>
    </header>

    <article class="section-card overflow-hidden p-4">
      <div class="flex items-start justify-between gap-3">
        <div class="flex items-start gap-3">
          <img :src="ui.detailPost.avatar" :alt="ui.detailPost.author" class="h-12 w-12 rounded-full object-cover" />
          <div>
            <div class="flex items-center gap-2">
              <h2 class="font-headline text-base font-bold text-ink">{{ ui.detailPost.author }}</h2>
              <span class="text-xs text-ink-soft">{{ ui.detailPost.time }}</span>
            </div>
            <p class="text-xs text-primary">{{ ui.detailPost.handle }}</p>
          </div>
        </div>
        <button type="button" class="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">关注</button>
      </div>

      <p class="mt-4 text-sm leading-7 text-ink/90">{{ ui.detailPost.content }}</p>

      <div class="mt-4 flex flex-wrap gap-2">
        <span v-for="tag in ui.detailPost.tags" :key="tag" class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{{ tag }}</span>
      </div>

      <div class="mt-4 grid grid-cols-2 gap-3">
        <img :src="ui.detailPost.images[0]" :alt="ui.detailPost.author" class="col-span-2 h-72 w-full rounded-[24px] object-cover" />
        <img :src="ui.detailPost.images[1]" :alt="ui.detailPost.author" class="h-40 w-full rounded-[22px] object-cover" />
        <img :src="ui.detailPost.images[2]" :alt="ui.detailPost.author" class="h-40 w-full rounded-[22px] object-cover" />
      </div>

      <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-ink-soft">
        <span class="inline-flex items-center gap-2"><span class="material-symbols-outlined text-[18px] text-primary">favorite</span>{{ ui.detailPost.stats.likes }}</span>
        <span class="inline-flex items-center gap-2"><span class="material-symbols-outlined text-[18px]">chat_bubble</span>{{ ui.detailPost.stats.comments }}</span>
        <span class="inline-flex items-center gap-2"><span class="material-symbols-outlined text-[18px]">ios_share</span>{{ ui.detailPost.stats.shares }}</span>
      </div>
    </article>

    <section class="glass-panel px-4 py-5">
      <div class="mb-4 flex items-center justify-between">
        <h3 class="font-headline text-lg font-bold text-ink">全部评论 ({{ ui.detailPost.stats.comments }})</h3>
        <button type="button" class="inline-flex items-center gap-1 text-sm font-semibold text-ink-soft">最热 <span class="material-symbols-outlined text-[18px]">unfold_more</span></button>
      </div>

      <div class="space-y-3">
        <article v-for="comment in ui.comments" :key="comment.id" class="rounded-[22px] bg-white px-4 py-4 shadow-card">
          <div class="flex items-start justify-between gap-3">
            <div class="flex items-start gap-3">
              <img :src="comment.avatar" :alt="comment.author" class="h-10 w-10 rounded-full object-cover" />
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="font-headline text-sm font-bold text-ink">{{ comment.author }}</h4>
                  <span v-if="comment.role" class="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">{{ comment.role }}</span>
                </div>
                <p class="mt-1 text-xs text-ink-soft">{{ comment.time }}</p>
                <p class="mt-2 text-sm leading-6 text-ink/90">{{ comment.content }}</p>
              </div>
            </div>
            <span class="inline-flex items-center gap-1 text-xs font-semibold text-ink-soft"><span class="material-symbols-outlined text-[16px]">favorite</span>{{ comment.likes }}</span>
          </div>
        </article>
      </div>
    </section>

    <div class="fixed bottom-5 left-1/2 z-20 flex w-[calc(100%-2rem)] max-w-[398px] -translate-x-1/2 items-center gap-3 rounded-[28px] border border-white/70 bg-white/90 px-4 py-3 shadow-card backdrop-blur-xl">
      <span class="material-symbols-outlined text-ink-soft">edit_note</span>
      <input class="min-w-0 flex-1 border-none bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft" type="text" placeholder="发表你的评论..." />
      <button type="button" class="primary-button h-11 w-11 rounded-full px-0" @click="router.push({ name: 'chat' })">
        <span class="material-symbols-outlined text-[20px]">send</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import { useUiStore } from '../stores/ui';

const ui = useUiStore();
const router = useRouter();
</script>
