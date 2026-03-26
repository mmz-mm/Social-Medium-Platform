<template>
  <div class="page-shell justify-center">
    <section class="glass-panel overflow-hidden px-6 py-10 sm:px-8">
      <div class="absolute inset-x-0 top-0 h-32 bg-brand-gradient opacity-10 blur-3xl"></div>
      <div class="relative">
        <div class="mb-10 flex flex-col items-center text-center">
          <div class="mb-5 flex h-20 w-20 items-center justify-center rounded-[28px] bg-white shadow-card">
            <span class="material-symbols-outlined text-[42px] text-primary">bubble_chart</span>
          </div>
          <h1 class="font-headline text-5xl font-extrabold italic tracking-[-0.06em] text-ink">{{ ui.brandName }}</h1>
        </div>

        <div class="section-card px-6 py-8">
          <div class="mb-8 space-y-2">
            <h2 class="font-headline text-3xl font-bold text-ink">欢迎回来</h2>
            <p class="text-sm leading-6 text-ink-soft">请输入您的凭据以访问账户。</p>
          </div>

          <form class="space-y-5" @submit.prevent="router.push({ name: 'home' })">
            <label class="block">
              <span class="mb-2 block text-sm font-semibold text-ink-soft">手机号或邮箱</span>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft">alternate_email</span>
                <input class="soft-input pl-12" type="text" placeholder="hello@kinetic.app" />
              </div>
            </label>

            <label class="block">
              <div class="mb-2 flex items-center justify-between">
                <span class="text-sm font-semibold text-ink-soft">密码</span>
                <button type="button" class="text-sm font-semibold text-primary">忘记密码？</button>
              </div>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft">lock</span>
                <input class="soft-input pl-12" type="password" placeholder="请输入密码" />
              </div>
            </label>

            <button type="submit" class="primary-button w-full text-base">登录 <span class="material-symbols-outlined text-[20px]">arrow_forward</span></button>
          </form>

          <div class="my-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft/70">
            <span class="h-px flex-1 bg-slate-200"></span>
            <span>其他方式</span>
            <span class="h-px flex-1 bg-slate-200"></span>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <button type="button" class="secondary-button w-full justify-center">Google</button>
            <button type="button" class="secondary-button w-full justify-center">GitHub</button>
          </div>

          <div class="mt-8 text-center text-sm text-ink-soft">
            还没有账号？
            <RouterLink class="font-semibold text-primary" :to="{ name: 'register' }">立即注册</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';

import { useUiStore } from '../stores/ui';

const ui = useUiStore();
const router = useRouter();
</script>
