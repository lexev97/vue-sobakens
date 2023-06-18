import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AllBreeds from "../pages/AllBreeds.vue";
import ByBreed from "../pages/ByBreed.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: AllBreeds,
  },
  {
    path: "/breeds",
    name: "breeds",
    component: ByBreed,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
