import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";
import PageHome from "./pages/Home.vue";
import PageAbout from "./pages/About.vue";


export function createApp() {

  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App),
    components: {
      PageHome: PageHome,
      PageAbout: PageAbout
    }
  });

  return { app, router };
};
