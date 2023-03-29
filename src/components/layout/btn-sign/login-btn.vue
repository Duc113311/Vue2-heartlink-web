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
  </div>
</template>

<script>
import {
  signInWithPopup,
  GoogleAuthProvider,
  auth,
  provider,
} from "../../../configs/firebase";

import { mapActions, mapMutations } from "vuex";

export default {
  components: {},
  name: "login-btn",

  data() {
    return {
      isShowPhoneNumber: false,
      isShowEmail: false,
      isShowWellcome: false,
    };
  },

  methods: {
    ...mapMutations(["setOAuth2Id"]),
    ...mapActions(["postTokenByUserID", "loginAppByAuthId"]),
    onShowDialogQuit(val) {
      this.isShowWellcome = val;
    },
    /**
     * Login by phone number
     * CreateBy: nvDuc
     */

    onClickPhoneNumber() {
      this.$router.push({ path: "/login" });
    },

    async onLoginGoogle() {
      await signInWithPopup(auth, provider)
        .then(async (result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          console.log(token);
          // The signed-in user info.
          const userID = result.user.uid;
          await this.setOAuth2Id(userID);

          await this.loginAppByAuthId({
            oAuth2Id: userID,
          });
          const tokenIdParam = this.$store.state.mongoModule.tokenId;

          // Tồn tại account
          if (tokenIdParam) {
            this.$router.push({ path: "/home" });
          } else {
            // Không tồn tại account
            this.$emit("onShowWelcome", true);
          }
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);

          console.log(errorCode);
          console.log(errorMessage);
          console.log(email);
          console.log(credential);

          // ...
        });
    },

    onShowEmailUser(value) {
      this.isShowEmail = value;
    },

    onShowWelcome(value) {
      this.isShowWellcome = value;
    },

    onLoginFacebook() {
      // this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="css"></style>
