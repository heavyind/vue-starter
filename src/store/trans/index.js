
const DEFAULT_TRANS = {
  name: "default",
  duration: { enter: 0, leave: 0 }
};


const state = {
  show: false,
  initFlag: false,
  current: DEFAULT_TRANS,
  default: DEFAULT_TRANS
};


const mutations = {

  _show (state) {
    state.show = true;
  },

  _hide (state) {
    state.show = false;
  },

  _triggerInitFlag (state) {
    state.initFlag = true;
  },

  setTransCurrent (state, trans) {
    state.current = trans;
  },

  setTransDefault (state, trans) {
    state.default = trans;
  }
};


const actions = {

  show ({ commit }) {
    commit("_show");
  },

  hide ({ commit }) {
    commit("_hide");
  },

  setTransCurrent ({ commit }, trans) {
    commit("setTransCurrent", trans);
  },

  setTransDefault ({ commit }, trans) {
    commit("setTransDefault", trans);
  },

  initialize ({ commit }, settings) {

    if (settings && settings.current) {
      commit("setTransCurrent", settings.current);
    }

    if (settings && settings.default) {
      commit("setTransDefault", settings.default);
    }

    commit("_show");
    commit("_triggerInitFlag");
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions
};
