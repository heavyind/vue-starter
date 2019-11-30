import Vue from "vue";
import Vuex from "vuex";

import preload from "./preload/index";
import trans from "./trans/index";

Vue.use(Vuex);


export const createStore = function createStore() {
  return new Vuex.Store({
    modules: {
      preload,
      trans
    }
  });
};
