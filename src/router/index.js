import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BlogPage from "../views/BlogPage.vue";
import BlogDetails from "../views/BlogDetails.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage
  },
  {
    path: "/blogDetail/:id",
    name: "blogdetails",
    component: BlogDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;