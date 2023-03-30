import { http_mongo } from "../../configs/http-mongo";

const state = {
  profileUserRegister_Mongo: {},
  userProfile: {}, // Thông tin chi tiết user khi login success
  tokenId: "", // token default của user
  detailProfile: {}, // Thông tin user khi gọi API lấy chi tiết
  listDataCard: [], // Danh sách màn quet
  listLifeStyle: {}, // Thông tin chung gồm: sexual, gender, showMeGender, interest
  statusUpdateUser: "",
};
const getters = {};

const mutations = {
  /**
   * Xét giá trị cho user khi đăng ký
   * @param {*} state
   * @param {*} data
   */
  setProfileUserRegister_Mongo(state, data) {
    state.profileUser_Mongo = data;
  },

  /**
   * Xét giá trị cho user khi login
   * @param {*} state
   * @param {*} data
   */
  setProfileUserLogin_Mongo(state, data) {
    state.tokenId = data?.token;
    localStorage.setItem("tokenId", state.tokenId);
  },

  /**
   * Xét giá trị
   * @param {*} state
   * @param {*} data
   */
  setUpdateLocation_Mongo(state, data) {
    state.statusUpdateLocation = data;
  },

  /**
   * Xét giá trị cho list data của user
   * @param {*} state
   * @param {*} data
   */
  setListDataCards_Mongo(state, data) {
    state.listDataCard = data;
  },

  setUpdateProfile_Mongo(state, data) {
    debugger;
    state.statusUpdateUser = data;
  },
};

const actions = {
  /**
   * API Đăng ký thông tin user
   * @param {*} param0
   * @param {*} data
   */
  async registerUserByAuthId({ commit }, data) {
    await http_mongo
      .post(`api/v1/register`, data)
      .then((response) => {
        commit("setProfileUserRegister_Mongo", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * API Login app bằng authId sau khi đăng ký
   * @param {*} param0
   * @param {*} data
   */
  async loginAppByAuthId({ commit }, data) {
    await http_mongo
      .post(`api/v1/login`, data)
      .then((response) => {
        commit("setProfileUserLogin_Mongo", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * APi update location user
   * @param {*} param0
   * @param {*} data
   */
  async updateLocationByAuthorization({ commit }, data) {
    await http_mongo
      .post(`api/v1/updateGPS`, data)
      .then((response) => {
        commit("setUpdateLocation_Mongo", response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * API lấy danh sách user quẹt
   * @param {*} param0
   * @param {*} data
   */
  async getListCardForUser({ commit }) {
    await http_mongo
      .get(`api/v1/cards`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("tokenId")}` },
      })
      .then((response) => {
        commit("setListDataCards_Mongo", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Update thông tin user-profile
   * @param {*} param0
   * @param {*} data
   */
  async updateProfileUser({ commit }, data) {
    await http_mongo
      .post(`api/v1/profile`, data)
      .then((response) => {
        commit("setUpdateProfile_Mongo", response);
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
