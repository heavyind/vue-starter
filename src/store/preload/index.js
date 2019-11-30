
const state = {
  done: false
};

const mutations = {
  _setPreloadDone (state) {
    state.done = true;
  }
};

const actions = {
  setPreloadDone ({ commit }) {
    commit("_setPreloadDone");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
