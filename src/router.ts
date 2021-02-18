import { createRouter, createWebHistory } from "vue-router";
import Works from "./views/Works.vue";
import About from "./views/About.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "works",
      component: Works
    },
    {
      path: "/about/",
      name: "about",
      component: About
    }
  ]
});

export default router;
