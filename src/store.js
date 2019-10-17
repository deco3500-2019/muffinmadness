import Vue from "vue";
import Vuex from "vuex";

import db from "./DB/test.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: db.id,
    topline: null
  },
  mutations: {
    'SET_TOPLINE_STATE' (state, payload) {
      state.topline = payload;
      console.log(payload);
    }
  },
  actions: {
    setToplineState: ({ commit }, payload) => {
      commit('SET_TOPLINE_STATE', payload);
    }
  },
  getters: {
    getData: state => {
      return state.data;
    },
    getToplineState: state => {
      return state.topline;
    }
  }
});
