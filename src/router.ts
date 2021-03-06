import {
  createRouter,
  createWebHistory,
  RouterScrollBehavior
} from "vue-router";
import Works from "./views/Works.vue";
import About from "./views/About.vue";

const routes = [
  {
    path: "/",
    name: "works",
    component: Works,
    props: true
  },
  {
    path: "/about/",
    name: "about",
    component: About
  }
];

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { left: 0, top: 0 };
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
});
export default router;
