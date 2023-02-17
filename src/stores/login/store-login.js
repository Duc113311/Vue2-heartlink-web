import { http_request } from "../../configs/http-host";

const state = {
  user: [],
  tokenAccount: {},
};

const getters = {};

const actions = {
  async postTokenByUserID({ commit }, { id, providerId }) {
    debugger;
    await http_request
      .post("login/v1/create-token/" + id)
      .then((response) => {
        localStorage.setItem("userId", response.data.data.userId);
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        localStorage.setItem("providerId", providerId);

        commit("setTokenAccount", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  setTokenAccount(state, token) {
    debugger;
    state.tokenAccount = token;
  },
};

export default {
  state,

  getters,

  actions,

  mutations,
};
