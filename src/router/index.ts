import { createRouter, createWebHistory } from 'vue-router';

import AiPage from '../pages/AiPage.vue';
import ChatPage from '../pages/ChatPage.vue';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import PostDetailPage from '../pages/PostDetailPage.vue';
import ProfilePage from '../pages/ProfilePage.vue';
import PublishPage from '../pages/PublishPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';

const routes = [
  { path: '/', redirect: { name: 'login' } },
  { path: '/login', name: 'login', component: LoginPage, meta: { title: 'Kinetic | 登录' } },
  { path: '/register', name: 'register', component: RegisterPage, meta: { title: 'Kinetic | 注册' } },
  { path: '/home', name: 'home', component: HomePage, meta: { title: 'Kinetic | 首页' } },
  { path: '/post-detail', name: 'post-detail', component: PostDetailPage, meta: { title: 'Kinetic | 动态详情' } },
  { path: '/publish', name: 'publish', component: PublishPage, meta: { title: 'Kinetic | 发布动态' } },
  { path: '/chat', name: 'chat', component: ChatPage, meta: { title: 'Kinetic | 私信' } },
  { path: '/ai', name: 'ai', component: AiPage, meta: { title: 'Kinetic | AI 助手' } },
  { path: '/profile', name: 'profile', component: ProfilePage, meta: { title: 'Kinetic | 我的资料' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title;
  }
});

export default router;
