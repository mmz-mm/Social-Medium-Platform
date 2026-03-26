<template>
  <div class="page-shell gap-4 pb-28">
    <header class="glass-panel sticky top-5 z-20 flex items-center justify-between px-4 py-4">
      <div class="flex items-center gap-3">
        <button type="button" class="icon-button" @click="router.push({ name: 'home' })">
          <span class="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <img :src="avatar" alt="Alex Rivers" class="h-12 w-12 rounded-full object-cover ring-2 ring-white" />
        <div>
          <h1 class="font-headline text-xl font-bold text-primary">Alex Rivers</h1>
          <p class="text-sm font-semibold text-emerald-500">在线</p>
        </div>
      </div>
      <button type="button" class="icon-button" @click="router.push({ name: 'ai' })">
        <span class="material-symbols-outlined text-[20px]">more_vert</span>
      </button>
    </header>

    <main class="glass-panel flex flex-1 flex-col gap-4 px-4 py-5">
      <div class="self-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-soft shadow-card">今天下午</div>

      <article v-for="message in ui.chatMessages" :key="message.id" class="flex gap-3" :class="message.side === 'right' ? 'justify-end' : 'justify-start'">
        <img v-if="message.side === 'left'" :src="message.avatar" alt="avatar" class="mt-auto h-9 w-9 rounded-full object-cover" />

        <div class="max-w-[82%]">
          <div v-if="message.type === 'text'" class="rounded-[24px] px-4 py-3 text-sm leading-7 shadow-card" :class="message.side === 'right' ? 'bg-brand-gradient text-white' : 'bg-white text-ink'">
            {{ message.content }}
          </div>
          <div v-else class="overflow-hidden rounded-[24px] bg-white shadow-card">
            <img :src="message.content" alt="concept" class="w-full object-cover" />
          </div>
          <p class="mt-2 text-right text-xs text-ink-soft">{{ message.time }}<span v-if="message.status" class="ml-2 text-primary">{{ message.status }}</span></p>
        </div>
      </article>

      <div class="rounded-[24px] bg-primary/10 px-4 py-3 text-sm leading-6 text-ink-soft">
        这个界面已经保留好聊天对话布局，后续直接接 Socket.IO 就可以变成真实的实时消息页。
      </div>
    </main>

    <div class="fixed bottom-5 left-1/2 z-20 flex w-[calc(100%-2rem)] max-w-[398px] -translate-x-1/2 items-center gap-3 rounded-[28px] border border-white/70 bg-white/90 px-4 py-3 shadow-card backdrop-blur-xl">
      <button type="button" class="icon-button h-11 w-11" @click="router.push({ name: 'publish' })">
        <span class="material-symbols-outlined text-[20px]">add_circle</span>
      </button>
      <button type="button" class="icon-button h-11 w-11" @click="router.push({ name: 'profile' })">
        <span class="material-symbols-outlined text-[20px]">mood</span>
      </button>
      <input class="min-w-0 flex-1 border-none bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft" type="text" placeholder="输入消息..." />
      <button type="button" class="primary-button h-11 w-11 rounded-full px-0" @click="router.push({ name: 'ai' })">
        <span class="material-symbols-outlined text-[20px]">send</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import { useUiStore } from '../stores/ui';

const ui = useUiStore();
const router = useRouter();
const avatar = computed(() => ui.chatMessages.find((message) => message.avatar)?.avatar ?? ui.currentUser.avatar);
</script>
