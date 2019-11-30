import Vue from "vue";
import Vuex from "vuex";

import preload from "./preload/index";

Vue.use(Vuex);


export const createStore = function createStore() {
  return new Vuex.Store({
    modules: {
      preload
    }
  });
};
