
const state = {
  initLoadComplete: false
};

const mutations = {
  _setInitLoadComplete (state) {
    state.initLoadComplete = true;
  }
};

const actions = {
  setInitLoadComplete ({ commit }) {
    commit("_setInitLoadComplete");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
