import { defineStore } from 'pinia';

import type { AiMessage, ChatMessage, CommentItem, NavItem, Post, ProfileCard, ProfileMetric } from '../types/app';

const makeAvatar = (label: string, bg = '#0f87d8', fg = '#ffffff') => {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">' +
    '<rect width="120" height="120" rx="36" fill="' + bg + '" />' +
    '<text x="60" y="68" text-anchor="middle" font-size="38" font-family="Arial, sans-serif" font-weight="700" fill="' + fg + '">' + label + '</text>' +
    '</svg>';

  return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
};

const feedTabs: NavItem[] = [
  { label: '首页', icon: 'home', routeName: 'home' },
  { label: '发现', icon: 'explore', routeName: 'post-detail' },
  { label: '消息', icon: 'chat_bubble', routeName: 'chat' },
  { label: '我的', icon: 'person', routeName: 'profile' },
];

const mainTabs: NavItem[] = [
  { label: '首页', icon: 'home', routeName: 'home' },
  { label: '发布', icon: 'add_circle', routeName: 'publish' },
  { label: '消息', icon: 'chat_bubble', routeName: 'chat' },
  { label: 'AI', icon: 'smart_toy', routeName: 'ai' },
  { label: '我的', icon: 'person', routeName: 'profile' },
];

const posts: Post[] = [
  {
    id: 'post-1',
    author: '林小雨 Rainie',
    handle: '@rainie_studio',
    time: '2 小时前',
    avatar: makeAvatar('R', '#ffb347'),
    content: '今天在城市中心发现了一个很舒服的展览咖啡馆，阳光、植物和木质感搭配得刚刚好。',
    images: ['/mock/home-screen.png'],
    stats: { likes: '128', comments: '24', shares: '分享' },
    tags: ['#城市探店', '#生活方式'],
  },
  {
    id: 'post-2',
    author: '陈默 Alex',
    handle: '@alex_motion',
    time: '5 小时前',
    avatar: makeAvatar('A', '#17263f'),
    content: '最近在研究极简风摄影，用自然光影和少量对象构成画面节奏。',
    images: ['/mock/post-detail-screen.png', '/mock/publish-screen.png'],
    stats: { likes: '342', comments: '56', shares: '分享' },
  },
];

const detailPost: Post = {
  id: 'detail-1',
  author: '陈默 Alex',
  handle: '@alex_motion',
  time: '5 小时前',
  avatar: makeAvatar('A', '#17263f'),
  content: '极简主义设计不只是视觉风格，更是一种生活态度。在复杂的信息环境中，让内容回到焦点，让留白成为情绪的入口。',
  images: ['/mock/post-detail-screen.png', '/mock/home-screen.png', '/mock/profile-screen.png'],
  stats: { likes: '1.2k', comments: '85', shares: '243' },
  tags: ['#摄影美学', '#极简主义'],
};

const comments: CommentItem[] = [
  {
    id: 'comment-1',
    author: '苏苏 Sarah',
    role: '作者',
    time: '3 小时前',
    content: '那张建筑侧墙的光影很有气质，极简的力量就在于让空间自己说话。',
    likes: '12',
    avatar: makeAvatar('S', '#7c4dff'),
  },
  {
    id: 'comment-2',
    author: '设计顽童',
    time: '4 小时前',
    content: '我也在研究极简主义，感觉最难的是在简单形式中保留功能性。',
    likes: '8',
    avatar: makeAvatar('D', '#4a5568'),
  },
];

const chatMessages: ChatMessage[] = [
  {
    id: 'chat-1',
    side: 'left',
    type: 'text',
    content: '嗨，你看了今天的新设计提案吗？这次的能量蓝还挺抓眼的。',
    time: '14:20',
    avatar: makeAvatar('A', '#17263f'),
  },
  {
    id: 'chat-2',
    side: 'right',
    type: 'text',
    content: '看到了，而且我很喜欢这种冷静的空间感。',
    time: '14:22',
    status: '已读',
  },
  {
    id: 'chat-3',
    side: 'left',
    type: 'text',
    content: '是，这种布局更像一本社论风电子杂志，而不是一块冰冷的数据板。',
    time: '14:25',
    avatar: makeAvatar('A', '#17263f'),
  },
  {
    id: 'chat-4',
    side: 'right',
    type: 'image',
    content: '/mock/ai-screen.png',
    time: '14:26',
    status: '已送达',
  },
  {
    id: 'chat-5',
    side: 'right',
    type: 'text',
    content: '这是我刚刚画的一张概念图，你觉得这种阴影处理方式怎么样？',
    time: '14:27',
    status: '已读',
  },
];

const aiMessages: AiMessage[] = [
  {
    id: 'ai-1',
    role: 'user',
    text: '你好，帮我写一段 Vue3 的 Hello World 代码。',
    time: '14:02',
  },
  {
    id: 'ai-2',
    role: 'assistant',
    text: '当然，这是 Vue3 的简单示例：',
    time: '14:03',
    codeLanguage: 'javascript',
    codeBlock: "import { createApp } from 'vue'\n\ncreateApp({\n  data() {\n    return { message: 'Hello World!' }\n  }\n}).mount('#app')",
    bullets: ['支持 Markdown 粗体强调', '支持内联代码片段', '支持带语言标记的代码块'],
  },
];

const profileMetrics: ProfileMetric[] = [
  { label: 'Followers', value: '12.8k' },
  { label: 'Following', value: '842' },
  { label: 'Posts', value: '156' },
];

const profileCards: ProfileCard[] = [
  { title: '我的动态', subtitle: '管理内容', icon: 'grid_view', routeName: 'post-detail' },
  { title: '我的收藏', subtitle: '已保存内容', icon: 'bookmarks', routeName: 'home' },
  { title: '账号设置', subtitle: '个人资料', icon: 'manage_accounts', routeName: 'register' },
  { title: '隐私安全', subtitle: '数据与权限', icon: 'security', routeName: 'ai' },
];

export const useUiStore = defineStore('ui', {
  state: () => ({
    brandName: 'Kinetic',
    currentUser: {
      name: 'Chen Wei',
      handle: '@wei_creative_studio',
      avatar: makeAvatar('CW', '#0f87d8'),
      bio: 'Digital Curator & Visual Storyteller. Exploring the intersection of kinetic design and urban aesthetics.',
    },
    feedTabs,
    mainTabs,
    posts,
    detailPost,
    comments,
    chatMessages,
    aiMessages,
    profileMetrics,
    profileCards,
  }),
});
