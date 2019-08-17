import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export const createStore = function createStore() {
  return new Vuex.Store({
    modules: {
    }
  });
};
