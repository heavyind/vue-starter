import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "SRC/router";
import { createStore } from "SRC/store/store";
import { sync } from "vuex-router-sync";



export const createApp = function createApp() {

  const router = createRouter();
  const store = createStore();

  sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
};
