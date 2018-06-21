import Vue from "vue";
import VueRouter from "vue-router";
import PageIndex from "VUE_PAGE/Index.vue";
import PageAbout from "VUE_PAGE/About.vue";
import PagePost from "VUE_PAGE/Post.vue";


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
