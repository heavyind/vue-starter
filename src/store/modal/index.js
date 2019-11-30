const state = {
  open: false,
  settings: null
};

const mutations = {

  open (state) {
    state.open = true;
  },

  close (state) {
    state.open = false;
  },

  toggle (state) {
    state.open = !state.open;
  },

  setSettings (state, s) {
    state.settings = s;
  },

  setComponentProps (state, p) {
    state.settings.props = p;
  }
};

const actions = {

  close ({ commit, state }) {
    commit("close");
  },

  open ({ commit, state }) {
    commit("open");
  },

  openWith({ commit, state }, settings) {
    commit("setSettings", settings);
    commit("open");
  },

  setComponentProps({ commit, state }, p) {
    commit("setComponentProps", p);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
