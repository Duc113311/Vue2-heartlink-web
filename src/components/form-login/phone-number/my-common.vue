<template>
  <div class="w-full h-full user-profile grid p-8 top-0 absolute z-20">
    <div>
      <MyNumber
        v-if="screenNumber === 0"
        @validateRequirePhone="validateRequire"
      ></MyNumber>
      <div v-else>
        <BhBack></BhBack>
        <MyCode
          :sentCodeId="sentCodeId"
          :txtErrorCode="txtErrorCode"
          :valueText="valueText"
          @onUpdateLoading="onUpdateLoading"
          @onRenderCodeOTP="onRenderCodeOTP"
          @validateRequireCode="validateRequire"
          :txtPhoneNumber="txtPhoneNumber"
        ></MyCode>
      </div>
    </div>
    <!--  -->
    <BhContinue
      :isStatusRequire="isStatusRequire"
      @onNextScreen="onNextScreen"
    ></BhContinue>
  </div>
</template>

<script>
import MyCode from "./my-code";
import BhBack from "../../bh-element-ui/button/bh-back";
import BhContinue from "../../bh-element-ui/button/bh-continue";
import intlTelInput from "intl-tel-input";

import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import MyNumber from "./my-number";
export default {
  name: "my-common",
  components: {
    MyCode,
    BhBack,
    BhContinue,
    MyNumber,
  },
  setup() {},

  data() {
    return {
      isValue: false,
      screenNumber: 0,
      isStatusRequire: false,
      isLoading: false,
      txtPhoneNumber: "",
      sentCodeId: "",
      codeOTP: "",
      txtErrorCode: false,
      valueText: [],
      isShowEmail: false,
    };
  },

  methods: {
    validateRequire(value) {
      const statusActive = value.statusActive;
      this.codeOTP = value.codeOTP;
      this.isStatusRequire = statusActive;
      document.querySelector(".btContinueCode").disabled = statusActive;
      if (!statusActive) {
        document.querySelector(".btContinueCode").style.backgroundColor =
          "rgb(220 20 30)";
      } else {
        document.querySelector(".btContinueCode").style.backgroundColor =
          "#382e41";
      }
    },

    setuprecaptcha() {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: function () {
            console.log("recature resolved");
            this.onClickContinueCode();
          },
        },
        this.auth
      );
    },

    async onRenderCodeOTP(value) {
      if (value) {
        // const recaptchaContainer = document.getElementById("recaptcha-container");
        const appVerifier = window.recaptchaVerifier;
        await signInWithPhoneNumber(this.auth, value, appVerifier)
          .then((confirmationResult) => {
            this.sentCodeId = confirmationResult.verificationId;
            console.log(this.sentCodeId);
          })
          .catch((error) => {
            this.sendCodeError = "You select bad domain";
            console.log(error);
            // ...
          });
      }
    },
    /**
     * Next sang scream
     * @param {*} val
     */
    async onNextScreen(value) {
      this.screenNumber = this.screenNumber + value;

      if (this.screenNumber === 1) {
        const mobile = document.getElementById("phone").value;

        console.log(mobile);
        const result = true;
        const phoneNumber = this.valCodeQR.getNumber();
        this.txtPhoneNumber = phoneNumber;

        if (result) {
          if (phoneNumber) {
            await this.setuprecaptcha();
            // const recaptchaContainer = document.getElementById("recaptcha-container");
            const appVerifier = window.recaptchaVerifier;
            await signInWithPhoneNumber(this.auth, phoneNumber, appVerifier)
              .then((confirmationResult) => {
                this.sentCodeId = confirmationResult.verificationId;
                console.log(this.sentCodeId);
              })
              .catch((error) => {
                this.sendCodeError = "You select bad domain";
                console.log(error);
                // ...
              });
          }
        }
      } else {
        if (this.sentCodeId !== "") {
          await this.singWithPhone(this.sentCodeId);
        } else {
          this.txtErrorCode = true;
        }
      }
    },

    singWithPhone(sentCodeId) {
      const credential = PhoneAuthProvider.credential(sentCodeId, this.codeOTP);
      signInWithCredential(this.auth, credential)
        .then(async (result) => {
          const userID = result.user.uid;
          const providerId = result.providerId;
          console.log(providerId);
          debugger;
          this.isShowEmail = true;
          this.txtErrorCode = false;

          // Check lần show wellcome
          console.log(userID);
        })
        .catch(() => {
          this.txtErrorCode = true;
          document.querySelector(".btContinueCode").disabled = true;
          document.querySelector(".btContinueCode").style.backgroundColor =
            "#382e41";
          this.valueText = [];
        });
    },
  },

  mounted() {
    debugger;
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
  grid-template-rows: 25fr 4fr;
}
</style>
