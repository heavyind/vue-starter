import Vue from "vue";
import Vuex from "vuex";
import preload from "./preload/index"; /* Preload files */


Vue.use(Vuex);

export const createStore = function createStore() {
  return new Vuex.Store({
    modules: {
      preload
    }
  });
};
