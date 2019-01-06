import Vue from "vue";
import VueRouter from "vue-router";

const PageIndex = () => import(/* webpackChunkName: "pageIndex" */ "VUE_PAGE/Index.vue");
const PageAbout = () => import(/* webpackChunkName: "pageAbout" */ "VUE_PAGE/about/Index.vue");
const PagePost = () => import(/* webpackChunkName: "pagePost" */ "VUE_PAGE/post/Index.vue");


Vue.use(VueRouter);

const routes = [
  { path: "/", component: PageIndex },
  { path: "/about", component: PageAbout },
  { path: "/post/:id", component: PagePost }
];

export const createRouter = function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: routes
  });
};
