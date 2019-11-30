import Vue from "vue";
import Vuex from "vuex";

import loading from "./loading/index";

Vue.use(Vuex);


export const createStore = function createStore() {
  return new Vuex.Store({
    modules: {
      loading
    }
  });
};
