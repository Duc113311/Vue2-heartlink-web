const state = {
  isShowMyProfile: true,
  isNotShowProfie: true,
};

const getters = {};

const mutations = {
  /**
   * Xet giá trị hiển th
   * @param {*} state
   * @param {*} data
   */
  setShowProfileCreate(state, data) {
    debugger;
    state.isNotShowProfie = data.isNotShowProfile;
    state.isShowMyProfile = data.isShowProfile;
  },
};

const actions = {};
export default {
  state,

  getters,

  actions,

  mutations,
};
