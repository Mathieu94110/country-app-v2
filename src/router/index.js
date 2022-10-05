import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home";
import Details from "@/views/details";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:name",
    name: "Details",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory("/country-app-v2/"),
  routes,
});

export default router;
