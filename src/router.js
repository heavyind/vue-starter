import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "VUE_PAGE/Home.vue";
import PageAbout from "VUE_PAGE/About.vue";
import PagePost from "VUE_PAGE/Post.vue";


Vue.use(VueRouter);

const routes = [
  { path: "/", component: PageHome },
  { path: "/about", component: PageAbout },
  { path: "/post/:id", component: PagePost }
];

export const createRouter = function createRouter() {
  return new VueRouter({
    mode: "history",
    routes: routes
  });
};
