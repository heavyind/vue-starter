import Vue from "vue";
import { fetchPost } from "../../api.js";


const state = {
  posts: {}
};

const actions = {
  fetchPost ({ commit }, id) {
    return fetchPost(id).then(post => {
      commit("setPost", { id, post });
    });
  }
};

const mutations = {
  setPost (state, { id, post }) {
    Vue.set(state.posts, id, post);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
