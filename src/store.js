import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { fetchPost } from "./api";


export const actions = {
  fetchPost ({ commit }, id) {
    return fetchPost(id).then(post => {
      commit("setPost", { id, post });
    });
  }
};

export const mutations = {
  setPost (state, { id, post }) {
    Vue.set(state.posts, id, post);
  }
};

export const createStore = function createStore() {
  return new Vuex.Store({
    state: {
      posts: {}
    },
    actions,
    mutations
  });
};
