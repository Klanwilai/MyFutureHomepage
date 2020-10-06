import {
  createApp
} from 'vue';
import {
  createRouter,
  createWebHistory
} from 'vue-router';

import App from './App.vue';
import Home from './pages/Home.vue';
import Blog from './pages/Blog.vue';
import Doodles from './pages/Doodles.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/blog',
    component: Blog
  }, {
    path: '/doodles',
    component: Doodles
  }]
});

createApp(App).use(router).mount('#app');