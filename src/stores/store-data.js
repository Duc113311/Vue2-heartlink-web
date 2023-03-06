import Vue from "vue";
import Vuex from "vuex";

import loginModule from "./login/store-login";
import userModule from "./user-profile/store-user";
import commonModule from "./common/store-common";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    loginModule,
    userModule,
    commonModule,
  },
});
