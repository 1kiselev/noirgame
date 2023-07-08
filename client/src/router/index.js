import { createRouter, createWebHistory } from "vue-router";
import StartPage from "@/views/StartPage";

const routes = [
  {
    path: "/",
    name: "start",
    component: StartPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
