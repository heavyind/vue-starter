import Vue from "vue";
import VueRouter from "vue-router";
import { pageMeta } from "@/settings";

const PageIndex = () => import(/* webpackChunkName: "pageIndex" */ "VUE_PAGE/Index.vue");
const PageAbout = () => import(/* webpackChunkName: "pageAbout" */ "VUE_PAGE/about/Index.vue");


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

const routes = [
  routeIndex,
  routeAbout
];

export const createRouter = function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: routes
  });
};
