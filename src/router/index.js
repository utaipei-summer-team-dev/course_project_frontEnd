import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue'),
  // },
  {
    path: '/courses',
    component: () => import('../views/courses.vue'),
  },
  {
    path: '/evaluationList',
    component: () => import('../views/evaluationList.vue'),
  },
  {
    path: '/newCourse',
    component: () => import('../views/newCourse.vue'),
  },
  {
    path: '/newEvaluation',
    component: () => import('../views/newEvaluation.vue'),
  },
  {
    path: '/empty',
    component: () => import('../views/empty.vue'),
  },
  // {
  //   path: '/admin',
  //   component: () => import('../views/dashboard/dashboard.vue'),
  //   children: [
  //     {
  //       path: 'dashboard_products',
  //       component: () => import('../views/dashboard/dashboard_products.vue'),
  //     },
  //   ],
  // },
];

const router = new VueRouter({
  routes,
});

export default router;
