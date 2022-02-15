import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/home";
import Details from "@/views/cardDetails";

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
    path: "/details",
    name: "Details",
    component: Details,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;