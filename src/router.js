import Vue from "vue";
import VueRouter from "vue-router";
import { pageMeta } from "@/settings";

const PageIndex = () => import(/* webpackChunkName: "pageIndex" */ "@/page/Index.vue");
const PageAbout = () => import(/* webpackChunkName: "pageAbout" */ "@/page/about/Index.vue");
const Page404 = () => import(/* webpackChunkName: "page404" */ "@/page/status/4xx/404.vue");


Vue.use(VueRouter);

const createRoute = (path, component) => {
  return {
    path,
    component,
    meta: pageMeta[path]
  };
};

const routeIndex = createRoute("/", PageIndex);
const routeAbout = createRoute("/about", PageAbout);
const route404 = createRoute("*", Page404);

const routes = [
  routeIndex,
  routeAbout,
  route404
];

export const createRouter = function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: routes
  });
};
