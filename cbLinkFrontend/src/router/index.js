import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomeView.vue";
import Category from "../views/CategoryView.vue";
import Tags from "../views/TagView.vue";
import NotFound from "../views/NotFound.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/cat/:name",
    name: "Category",
    component: Category,
  },

  {
    path: "/tag/:name",
    name: "Tags",
    component: Tags,
  },

  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
