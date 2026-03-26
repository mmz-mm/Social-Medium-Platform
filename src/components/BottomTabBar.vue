<template>
  <nav class="bottom-dock">
    <div class="flex items-center justify-between gap-2">
      <button
        v-for="item in items"
        :key="item.routeName"
        type="button"
        class="flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-semibold"
        :class="item.routeName === activeRouteName ? 'bg-primary/10 text-primary' : 'text-ink-soft hover:bg-slate-50'"
        @click="router.push({ name: item.routeName })"
      >
        <span class="material-symbols-outlined text-[22px]">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import type { NavItem } from '../types/app';

const props = defineProps<{
  items: NavItem[];
  activeRouteName: string;
}>();

void props;

const router = useRouter();
</script>
