import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/hyak",
    redirect: "/",
  },
  {
    path: "/board",
    name: "board",
    component: () => import("../views/Board.vue"),
  },
  {
    path: "/meeting_notes",
    name: "meeting notes",
    component: () => import("../views/MeetingNotes.vue"),
  },
  {
    path: "/links",
    name: "links",
    component: () => import("../views/Links.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/division_maps",
    name: "division maps",
    component: () => import("../views/DivisionMaps.vue"),
  },
  {
    path: "/policies",
    name: "policies",
    component: () => import("../views/Policies.vue"),
  },
  {
    path: "/404",
    name: "not found",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.length == 0) {
    router.push(`/404?from=${to.fullPath}`);
  } else {
    next();
  }
});

export default router;
