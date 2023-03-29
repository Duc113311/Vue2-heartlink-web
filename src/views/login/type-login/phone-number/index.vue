<template>
  <div class="w-full h-full user-profile z-20 grid">
    <div>
      <BhBack @onBackComponent="onBackComponent"></BhBack>
      <!-- Số điện thoại -->
      <MyNumber
        v-if="screenNumber === 0"
        @validateRequirePhone="validateRequire"
      ></MyNumber>
      <!-- Nhập mã OTP -->
      <div v-else>
        <MyCode
          :txtPhoneNumber="txtPhoneNumber"
          :sentCodeId="sentCodeId"
          :txtErrorCode="txtErrorCode"
          :valueText="valueText"
          @validateRequireCode="validateRequire"
          @onRenderCodeOTP="onRenderCodeOTP"
        >
        </MyCode>
      </div>
    </div>
    <!--  -->
    <BhContinue
      :isActives="isStatusRequire"
      @onChangeContinue="onChangeContinue"
      :isLoading="isLoadings"
    ></BhContinue>
  </div>
</template>

<script>
import MyCode from "@/components/form-login/phone-number/my-code.vue";
import BhBack from "@/components/bh-element-ui/button/bh-back.vue";
import BhContinue from "@/components/bh-element-ui/button/bh-continue.vue";
import intlTelInput from "intl-tel-input";
import MyNumber from "@/components/form-login/phone-number/my-number";
import { mapActions, mapMutations } from "vuex";

import {
  auth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  PhoneAuthProvider,
  signInWithCredential,
} from "../../../../configs/firebase.js";
export default {
  name: "phone-number",
  components: {
    MyCode,
    BhBack,
    BhContinue,
    MyNumber,
  },

  data() {
    return {
      screenNumber: 0,
      isStatusRequire: false,
      isLoadings: false,
      isScream: false,
      txtErrorCode: false,
      valueText: [],
      codeOTP: "",
      isHide: false,
      sentCodeId: "", // Mã sendCodeId firebase gửi về
    };
  },

  methods: {
    ...mapActions([
      "postTokenByUserID",
      "checkExistUserId",
      "loginAppByAuthId",
    ]),

    ...mapMutations(["setOAuth2Id"]),

    ...mapMutations(["setTokenAccount"]),
    validateRequire(value) {
      this.isStatusRequire = value.statusActive;
      this.codeOTP = value.codeOTP;
    },

    setuprecaptcha() {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: function () {
            console.log("recature resolved");
          },
        },
        auth
      );
    },

    onBackComponent(value) {
      if (value) {
        if (this.screenNumber === 0) {
          this.$router.push({ path: "/" });
        } else {
          this.screenNumber = this.screenNumber - 1;
        }
      }
    },

    async onRenderCodeOTP() {
      this.txtErrorCode = false;
      this.valueText = [];
      document.getElementById("1").focus();
      const phoneNumber = this.valCodeQR.getNumber();
      const appVerifier = window.recaptchaVerifier;
      await this.setuprecaptcha();
      await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          this.sentCodeId = confirmationResult.verificationId;

          console.log(this.sentCodeId);
        })
        .catch((error) => {
          this.sendCodeError = "You select bad domain";
          console.log(error, this.sendCodeError);
          // ...
        });
    },

    /**
     *
     */
    async onChangeContinue(value) {
      console.log(value);

      this.isLoadings = true;
      this.isStatusRequire = true;
      this.isHide = true;
      if (this.screenNumber === 0) {
        const mobile = document.getElementById("phone").value;
        console.log(mobile);
        const result = true;
        const phoneNumber = this.valCodeQR.getNumber();
        this.txtPhoneNumber = phoneNumber;
        console.log(this.txtPhoneNumber);
        if (result) {
          if (phoneNumber) {
            await this.setuprecaptcha();
            // const recaptchaContainer = document.getElementById("recaptcha-container");
            const appVerifier = window.recaptchaVerifier;
            await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
              .then((confirmationResult) => {
                this.sentCodeId = confirmationResult.verificationId;

                console.log(this.sentCodeId);
              })
              .catch((error) => {
                this.sendCodeError = "You select bad domain";
                console.log(error, this.sendCodeError);
                // ...
              });
          }
        }
      } else if (this.screenNumber === 1) {
        if (this.sentCodeId !== "") {
          // this.$emit("onShowEmailUser", true);

          await this.singWithPhone(this.sentCodeId);
        } else {
          this.txtErrorCode = true;
        }
      }

      setTimeout(() => {
        this.isStatusRequire = false;
        this.isLoadings = false;
        this.screenNumber = this.screenNumber + 1;
      }, 2000);
    },

    /**
     * Xác thực mã codeId & OTP
     * @param {*} sentCodeId
     */
    singWithPhone(sentCodeId) {
      const credential = PhoneAuthProvider.credential(sentCodeId, this.codeOTP);
      signInWithCredential(auth, credential)
        .then(async (result) => {
          const userID = result.user.uid;

          // Xét giá trị cho OAuth
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
            this.$router.push({ path: "/email" });
          }
        })
        .catch((error) => {
          console.log(error);
          this.txtErrorCode = true;

          document.getElementById("1").focus();
        });
    },
  },

  mounted() {
    var input = document.querySelector("#phone");
    this.valCodeQR = intlTelInput(input, {
      initialCountry: "auto",
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
    });
  },
};
</script>
<style lang="css">
.text-color {
  color: #737b91;
}
.user-profile {
  background-color: #232937;
  grid-template-rows: 8fr 1fr;
}

.show-form {
  display: none;
}
</style>
