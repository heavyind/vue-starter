import Vue from "vue";
import Vuex from "vuex";
import modal from "./modal/index";

Vue.use(Vuex);


export const createStore = function createStore() {
  return new Vuex.Store({
    modules: {
      modal
    }
  });
};
