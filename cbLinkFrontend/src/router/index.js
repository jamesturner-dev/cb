import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomeView.vue";
import Category from "../views/CategoryView.vue";

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

  // {
  //   path: "/create/:formType/:formName/:projectName",
  //   name: "Create",
  //   component: Create
  // },
  // {
  //   path: "/user/:name",
  //   name: "User",
  //   component: User,
  //   props: true // passing name as a prop into component, sweet
  // },
  // {
  //   path: "/project/:name",
  //   name: "Project",
  //   component: Project
  // },
  // {
  //   path: "/:catchAll(.*)",
  //   component: NotFound,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
