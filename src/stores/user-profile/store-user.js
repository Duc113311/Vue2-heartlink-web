import { http_request } from "../../configs/http-host";

const state = {
  user_profile: {
    firstName: "",
    birthday: "",
    sexuals: [],
    interests: [],
    avatars: [],
    showMeGender: 3,
    gender: 3,
  },
  isCheckBox: false,
  listSexuals: [],
  listInterests: [],
  isActiveId: false,
};

const getters = {};

const actions = {
  /**
   * API thêm thông tin của user
   * @param {*} param
   * @param {*} data
   */
  async postInforUserProfile({ commit }, data) {
    debugger;
    await http_request
      .post(`user/v1/create-one/${data.userId}`, data)
      .then((response) => {
        commit("setUserProfiles", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Lấy danh sách sexuals trong Database
   * @param {*} param0
   * @param {*} param1
   */
  async getListDataSexuals({ commit }, { entityName, entityId }) {
    debugger;
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${token}`,
      },
    };
    await http_request
      .get(
        `base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`,
        config
      )
      .then((response) => {
        commit("setListDataSexuals", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  /**
   * Lấy danh sách interests trong Database
   * @param {*} param0
   * @param {*} param1
   */
  async getListDataInterests({ commit }, { entityName, entityId }) {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Basic ${token}`,
      },
    };
    await http_request
      .get(
        `base/v1/get-detail?entityName=${entityName}&entityId=${entityId}`,
        config
      )
      .then((response) => {
        commit("setListDataInterests", response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  /**
   * Xét giá trị firstName
   * @param {*} state
   * @param {*} firstName
   */
  setFirstName(state, firstName) {
    debugger;
    state.user_profile.firstName = firstName;
  },

  /**
   * Xét giá trị birthday
   * @param {*} state
   * @param {*} birthday
   */
  setBirthday(state, birthday) {
    state.user_profile.birthday = birthday;
  },

  /**
   * Xét giá trị gender
   * @param {*} state
   * @param {*} gender
   */
  setGender(state, gender) {
    state.user_profile.gender = gender;
  },

  /**
   * Xét giá trị show gender hiển thị đối tượng
   * @param {*} state
   * @param {*} gender
   */
  setShowGender(state, showGender) {
    state.user_profile.showMeGender = showGender;
  },

  /**
   * Xét giá trị sexuals
   * @param {*} state
   * @param {*} sexual
   */
  setSexuals(state, sexuals) {
    debugger;
    const index = state.user_profile.sexuals.indexOf(sexuals);
    if (index > -1) {
      // only splice array when item is found
      state.user_profile.sexuals.splice(index, 1);
      state.isCheckBox = false;
      // 2nd parameter means remove one item only
    } else {
      if (state.user_profile.sexuals.length < 3) {
        state.user_profile.sexuals.push(sexuals);
      } else {
        state.isCheckBox = true;
      }
    }
  },

  /**
   * Xét giá trị ảnh của user
   * @param {*} state
   * @param {*} interest
   */
  setInterest(state, interests) {
    const index = state.user_profile.interests.indexOf(interests);
    if (index > -1) {
      // only splice array when item is found
      state.user_profile.interests.splice(index, 1); // 2nd parameter means remove one item only
      state.isActiveId = false;
    } else {
      if (state.user_profile.interests.length < 5) {
        state.user_profile.interests.push(interests);
        state.isActiveId = true;
      } else {
        state.isActiveId = false;
      }
    }
  },

  /**
   * Xét giá trị ảnh của user
   * @param {*} state
   * @param {*} photos
   */
  setPhotos(state, photos) {
    const idUrl = photos.id;
    debugger;
    const index = state.user_profile.avatars.findIndex((x) => x.id === idUrl);
    if (index !== -1) {
      // only splice array when item is found
      state.user_profile.avatars.splice(index, 1); // 2nd parameter means remove one item only
    } else {
      state.user_profile.avatars.push(photos);
    }
  },

  /**
   * Xét giá trị location cho user
   * @param {*} state
   * @param {*} location
   */
  setLocation(state, location) {
    state.user_profile.latitude = location.latitude;
    state.user_profile.longitude = location.longitude;

    localStorage.setItem("latitude", location.latitude);
    localStorage.setItem("longitude", location.longitude);
  },

  /**
   * Xét giá trị cho list sexuals
   * @param {*} state
   * @param {*} data
   */
  setListDataSexuals(state, data) {
    state.listSexuals = data;
  },

  /**
   * Xét giá trị cho list interest
   * @param {*} state
   * @param {*} data
   */
  setListDataInterests(state, data) {
    state.listInterests = data;
  },
};

export default {
  state,

  getters,

  actions,

  mutations,
};
