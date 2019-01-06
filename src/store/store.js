import Vue from "vue";
import Vuex from "vuex";
import post from "./post/module";

Vue.use(Vuex);


export const createStore = function createStore() {
  return new Vuex.Store({
    modules: {
      post
    }
  });
};
