import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "./pages/Home.vue";
import PageAbout from "./pages/About.vue";
import PagePost from "./pages/Post.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/", component: PageHome },
  { path: "/about", component: PageAbout },
  { path: "/post/:id", component: PagePost }
];

export function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: routes
  });
};
