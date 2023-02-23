<template>
  <div>
    <div class="grid">
      <button
        class="btn-Sign cursor-pointer text-xl font-semibold bg-white text-black w-80 rounded-lg px-3 py-3 mb-4"
        @click="onLoginGoogle()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/google_icon.svg" class="mr-2" alt="" />
          <span class="font-sans">Log in with Google</span>
        </span>
      </button>

      <button
        type="primary"
        class="btn-Sign cursor-pointer text-xl font-semibold bg-face text-white w-80 rounded-lg px-3 py-3 mb-4"
        @click="onLoginFacebook()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/facebook_icon.svg" class="mr-2" alt="" /><span
            class="font-sans"
            >Log in with Facebook</span
          >
        </span>
      </button>
      <button
        type="danger"
        class="btn-Sign cursor-pointer text-xl font-semibold bg-phone text-white w-80 rounded-lg px-3 py-3 mb-3"
        @click="onClickPhoneNumber()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/phone_number_icon.svg" class="mr-2" alt="" />
          <span class="font-sans">Log in with Phone number</span>
        </span>
      </button>
    </div>

    <MyCommon
      v-if="isShowPhoneNumber"
      @onShowEmailUser="onShowEmailUser"
    ></MyCommon>
    <MyEmail v-if="isShowEmail" @onShowWelcome="onShowWelcome"></MyEmail>
    <NewAccount v-if="isShowWellcome"></NewAccount>
  </div>
</template>

<script>
import NewAccount from "../../welcome/new-account";
import MyEmail from "../../form-login/email/my-email";
import MyCommon from "../../form-login/phone-number/my-common";
export default {
  components: {
    NewAccount,
    MyEmail,
    MyCommon,
  },
  name: "login-btn",

  data() {
    return {
      isShowPhoneNumber: false,
      isShowEmail: false,
      isShowWellcome: false,
    };
  },

  methods: {
    /**
     * Login by phone number
     * CreateBy: nvDuc
     */

    onClickPhoneNumber() {
      this.isShowPhoneNumber = true;
    },

    onLoginGoogle() {},

    onShowEmailUser(value) {
      debugger;
      this.isShowEmail = value;
    },

    onShowWelcome(value) {
      this.isShowWellcome = value;
    },
  },
};
</script>

<style lang="css"></style>
