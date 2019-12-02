import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "@/router";
import { createStore } from "@/store/store";
import { sync } from "vuex-router-sync";
import TransLink from "@/component/trans/Link.vue";


Vue.component("trans-link", TransLink);

export const createApp = function createApp() {

  const router = createRouter();
  const store = createStore();

  sync(store, router);

  router.beforeEach((to, from, next) => {
    if (store.state.modal.open) { store.dispatch("modal/close"); }
    store.dispatch("trans/hide");
    next();
  });

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
};
