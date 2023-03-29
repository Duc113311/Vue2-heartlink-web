import { http_request } from "../../configs/http-host";

const state = {
  nopeUser: {},
  backUser: {},
  likeForUser: {},
  statusMatch: false,
};

const getters = {};

const mutations = {
  /**
   * Set giá trị cho Nope user
   * @param {*} state
   * @param {*} data
   */
  setNopeUserId(state, data) {
    state.nopeUser = data;
  },

  /**
   * Set giá trị cho Come back
   * @param {*} state
   * @param {*} data
   */
  setComeBackUserId(state, data) {
    state.backUser = data;
  },

  /**
   * Set giá trị cho like user
   * @param {*} state
   * @param {*} data
   */
  setLikeUserId(state, data) {
    state.likeForUser = data;

    if (data.isShowMatch) {
      state.statusMatch = data.isShowMatch;
    }
  },

  setStatusLikeUser(state, data) {
    state.statusMatch = data;
  },
};

const actions = {
  /**
   * API Nope
   * @param {*} param
   * @param {*} data : userId của người dùng
   */
  async patchNopeUserId({ commit }, data) {
    await http_request
      .patch(`home/v1/nope/${data.userId}`, data.objectCustomer)
      .then((response) => {
        commit("setNopeUserId", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Back user
   * @param {*} param0
   * @param {*} data
   */
  async patchComeBackUserId({ commit }, data) {
    await http_request
      .patch(`home/v1/come-back/${data.userId}`)
      .then((response) => {
        commit("setComeBackUserId", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * API post like userId A to UserId B
   * @param {*} param0
   * @param {*} param1
   */
  async postLikeUserId({ commit }, data) {
    await http_request
      .post(`home/v1/likes/${data.userId}`, data.objectCustomer)
      .then((response) => {
        commit("setLikeUserId", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  state,

  getters,

  actions,

  mutations,
};
