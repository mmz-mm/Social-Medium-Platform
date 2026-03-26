<template>
  <div class="page-shell justify-center">
    <section class="glass-panel overflow-hidden px-6 py-8 sm:px-8">
      <div class="mb-8 flex items-center justify-center gap-3">
        <span class="material-symbols-outlined text-[30px] text-primary">bubble_chart</span>
        <h1 class="font-headline text-4xl font-extrabold italic tracking-[-0.06em] text-primary">{{ ui.brandName }}</h1>
      </div>

      <div class="section-card px-6 py-8">
        <div class="mb-8 text-center">
          <h2 class="font-headline text-4xl font-bold tracking-[-0.04em] text-ink">创建新账号</h2>
          <p class="mt-3 text-sm leading-6 text-ink-soft">加入 Kinetic，开启你的创意之旅。</p>
        </div>

        <form class="space-y-5" @submit.prevent="router.push({ name: 'home' })">
          <label class="block">
            <span class="mb-2 block text-sm font-semibold text-ink-soft">用户名</span>
            <div class="relative">
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft">person</span>
              <input class="soft-input pl-12" type="text" placeholder="设置你的唯一标识" />
            </div>
          </label>

          <label class="block">
            <span class="mb-2 block text-sm font-semibold text-ink-soft">手机号或邮箱</span>
            <div class="relative">
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft">contact_mail</span>
              <input class="soft-input pl-12" type="text" placeholder="手机号或 example@kinetic.co" />
            </div>
          </label>

          <label class="block">
            <span class="mb-2 block text-sm font-semibold text-ink-soft">密码</span>
            <div class="relative">
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft">lock</span>
              <input class="soft-input pl-12" type="password" placeholder="至少 8 位字符" />
            </div>
          </label>

          <label class="block">
            <span class="mb-2 block text-sm font-semibold text-ink-soft">确认密码</span>
            <div class="relative">
              <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft">verified_user</span>
              <input class="soft-input pl-12" type="password" placeholder="再次输入密码" />
            </div>
          </label>

          <label class="flex items-start gap-3 text-sm leading-6 text-ink-soft">
            <input class="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
            <span>我已阅读并同意 <button type="button" class="font-semibold text-primary">用户协议</button> 和 <button type="button" class="font-semibold text-primary">隐私政策</button></span>
          </label>

          <button type="submit" class="primary-button w-full text-base">立即注册</button>
        </form>

        <div class="mt-8 text-center text-sm text-ink-soft">
          已有账号？
          <RouterLink class="font-semibold text-primary" :to="{ name: 'login' }">立即登录</RouterLink>
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
