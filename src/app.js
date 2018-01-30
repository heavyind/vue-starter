import Vue from "vue";
import App from "./App.vue";
import PageHome from "./pages/Home.vue";
import PageAbout from "./pages/About.vue";
import PagePost from "./pages/Post.vue";
import { createRouter } from "./router";
import { createStore } from "./store";
import { sync } from "vuex-router-sync";



export function createApp() {

  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App),
    components: {
      PageHome: PageHome,
      PageAbout: PageAbout,
      PagePost: PagePost
    }
  });

  return { app, router, store };
};
