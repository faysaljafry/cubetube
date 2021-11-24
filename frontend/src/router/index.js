import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Subscription from '../views/Subscription.vue';
import LikedVideos from '../views/LikedVideo.vue';
import Trending from '../views/Trending.vue';
import SignIn from '../views/Auth/SignIn.vue';
import SignUp from '../views/Auth/SignUp.vue';
import NavBar from '../components/NavBar.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      NavBar,
      Home,
    },
  },
  {
    path: '/subscriptions',
    name: 'Subscription',
    component: Subscription,
  },
  {
    path: '/liked-videos',
    name: 'LikedVideos',
    component: LikedVideos,
  },
  {
    path: '/trending',
    name: 'Trending',
    component: Trending,
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active text-info',
  linkExactActiveClass: 'active',
});

export default router;
