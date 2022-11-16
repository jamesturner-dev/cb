import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomeView.vue";
import Cb from "../views/CbLink.vue";
import Admin from "../views/AdminView.vue";
import Category from "../views/CategoryView.vue";
import Tags from "../views/TagView.vue";
import NotFound from "../views/NotFound.vue";
import UserView from "../views/UserView.vue";
import Page from "../views/PageView.vue";
import SearchResults from "../views/SearchResults.vue";
import SuggestLink from "../views/SuggestLink.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cb/:cb",
    name: "Cb",
    component: Cb,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/page/:name",
    name: "Page",
    component: Page,
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
    path: "/user/:name",
    name: "UserView",
    component: UserView,
  },
  {
    path: "/search/:searchTerm",
    name: "SearchResults",
    component: SearchResults,
  },
  {
    path: "/suggest",
    name: "SuggestLink",
    component: SuggestLink,
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
