import Vue from "vue";
import router from "vue-router";
import PageHome from "./pages/Home.vue";
import PageAbout from "./pages/About.vue";


Vue.use(router);

const routes = [
  { path: "/", component: PageHome,
    path: "/about", component: PageAbout
  }
];

export function createRouter() {
  return new router({
    mode: "history",
    routes
  });
};
