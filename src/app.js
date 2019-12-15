import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "@/router";
import { createStore } from "@/store/store";
import { sync } from "vuex-router-sync";
import VueTrans from "@heavyind/vue-trans";
import VueBi18n from "@heavyind/vue-bi18n";
import VueModal from "@heavyind/vue-modal";


export const createApp = function createApp() {

  const router = createRouter();
  const store = createStore();

  sync(store, router);
  Vue.use(VueTrans, { store, router });
  Vue.use(VueBi18n, { store, languages: ["en", "fr"] });
  Vue.use(VueModal, { store });

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
