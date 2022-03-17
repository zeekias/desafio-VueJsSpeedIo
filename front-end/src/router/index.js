import { createRouter, createWebHashHistory } from 'vue-router';
import Routes from './routes'

const routes = Routes;

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
