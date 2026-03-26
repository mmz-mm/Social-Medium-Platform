<template>
  <div class="page-shell gap-4 pb-28">
    <header class="glass-panel sticky top-5 z-20 flex items-center justify-between px-4 py-4">
      <div class="flex items-center gap-3">
        <button type="button" class="icon-button" @click="router.push({ name: 'home' })">
          <span class="material-symbols-outlined text-[20px]">arrow_back</span>
        </button>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.24em] text-ink-soft">Assistant</p>
          <h1 class="font-headline text-2xl font-bold text-primary">AI Assistant</h1>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button type="button" class="icon-button" @click="router.push({ name: 'chat' })">
          <span class="material-symbols-outlined text-[20px]">history</span>
        </button>
        <button type="button" class="icon-button" @click="router.push({ name: 'profile' })">
          <span class="material-symbols-outlined text-[20px]">more_vert</span>
        </button>
      </div>
    </header>

    <main class="glass-panel flex flex-1 flex-col gap-4 px-4 py-5">
      <article v-for="message in ui.aiMessages" :key="message.id" class="space-y-3">
        <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft" :class="message.role === 'user' ? 'justify-end' : 'justify-start'">
          <span>{{ message.role === 'user' ? 'You' : 'AI 助手' }}</span>
          <span class="flex h-8 w-8 items-center justify-center rounded-full" :class="message.role === 'user' ? 'bg-slate-100 text-ink-soft' : 'bg-primary/10 text-primary'">
            <span class="material-symbols-outlined text-[18px]">{{ message.role === 'user' ? 'person' : 'smart_toy' }}</span>
          </span>
        </div>

        <div :class="message.role === 'user' ? 'ml-12 rounded-[24px] bg-brand-gradient px-4 py-4 text-white shadow-float' : 'mr-6 rounded-[28px] bg-white px-4 py-4 text-ink shadow-card'">
          <p class="text-sm leading-7">{{ message.text }}</p>

          <template v-if="message.codeBlock">
            <div class="mt-4 overflow-hidden rounded-[24px] bg-slate-900 text-slate-100">
              <div class="flex items-center justify-between border-b border-slate-800 px-4 py-3 text-xs uppercase tracking-[0.24em] text-slate-400">
                <span>{{ message.codeLanguage }}</span>
                <span class="material-symbols-outlined text-[18px]">content_copy</span>
              </div>
              <pre class="overflow-x-auto px-4 py-4 text-sm leading-7"><code>{{ message.codeBlock }}</code></pre>
            </div>

            <ul class="mt-4 space-y-2 text-sm text-ink-soft">
              <li v-for="bullet in message.bullets" :key="bullet" class="flex items-start gap-2">
                <span class="mt-1 h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </template>
        </div>

        <p class="text-xs text-ink-soft" :class="message.role === 'user' ? 'text-right' : 'text-left'">{{ message.time }}</p>
      </article>

      <div class="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-soft shadow-card">
        <span class="material-symbols-outlined text-[18px]">hourglass_empty</span>
        AI 正在思考...
      </div>
    </main>

    <div class="fixed bottom-5 left-1/2 z-20 flex w-[calc(100%-2rem)] max-w-[398px] -translate-x-1/2 items-center gap-3 rounded-[28px] border border-white/70 bg-white/90 px-4 py-3 shadow-card backdrop-blur-xl">
      <button type="button" class="icon-button h-11 w-11" @click="router.push({ name: 'publish' })">
        <span class="material-symbols-outlined text-[20px]">add_circle</span>
      </button>
      <input class="min-w-0 flex-1 border-none bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft" type="text" placeholder="输入消息..." />
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
