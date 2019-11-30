
const state = {
  done: false
};

const mutations = {
  _setDone (state) {
    state.done = true;
  }
};

const actions = {
  setDone ({ commit }) {
    commit("_setDone");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
