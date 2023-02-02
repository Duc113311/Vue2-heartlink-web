import { createStore } from "vuex";
import { HTTP } from "../../configs/http-host";

// Create a new store instance.
const storeLogins = createStore({
  state() {
    return {};
  },
  mutations: {},

  actions: {
    /**
     * Tạo Token sau khi login thành công
     * @param {*} param0
     * @param {*} param1
     */
    async postTokenByUserID({ commit }, { id, providerId }) {
      await HTTP.post("login/v1/create-token/" + id)
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

    /**
     * Logout khỏi chương trình
     * @param {*} param0
     * @param {*} param1
     */
    async logoutApp({ commit }, { id }) {
      await HTTP.delete("user/v1/logout/" + id)
        .then((response) => {
          commit("setLogoutApp", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /**
     * Check số lần truy cập vào app
     * @param {*} param0
     * @param {*} param1
     */
    async checkAppAccess({ commit }, { id }) {
      await HTTP.get("login/v1/access/" + id)
        .then((response) => {
          commit("setAppAccess", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    /**
     * Check xem userId đã tồn tại hay chưa để hướng sang màn hình
     * @param {*} param0
     * @param {*} param1
     */
    async checkExistUserId({ commit }, { id }) {
      await HTTP.get(`login/v1/check-exist?userId=${id}`)
        .then((response) => {
          commit("setAppAccess", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default storeLogins;
