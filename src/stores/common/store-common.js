import { http_mongo } from "../../configs/http-mongo";

const state = {
  isShowMyProfile: true,
  isNotShowProfie: true,
  listScreamShowMes: [],

  listLifeStyle: {},
};

const getters = {};

const mutations = {
  /**
   * Xet giá trị hiển th
   * @param {*} state
   * @param {*} data
   */
  setShowProfileCreate(state, data) {
    state.isNotShowProfie = data.isNotShowProfile;
    state.isShowMyProfile = data.isShowProfile;
  },

  setActionShowMe(state, data) {
    const index = state.listScreamShowMes.findIndex(
      (x) => x.scream === data.scream
    );

    if (index !== -1) {
      state.listScreamShowMes = state.listScreamShowMes.map((x) =>
        x.scream === data.scream ? data : x
      );
    } else {
      state.listScreamShowMes.push(data);
    }
  },

  /**
   * Xét giá trị cho life style khi đăng ký
   * @param {*} state
   * @param {*} data
   */
  setListLifeStyle(state, data) {
    state.listLifeStyle = data;
  },
};

const actions = {
  /**
   * Lấy danh sách life style khi đăng ký : gender-sexual-interest-showMeGender
   * @param {*} param0
   */
  async getListLifeStyleForRegister({ commit }) {
    await http_mongo
      .get(`api/v1/guest/pre_selections`)
      .then((response) => {
        debugger;
        commit("setListLifeStyle", response.data.data);
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
