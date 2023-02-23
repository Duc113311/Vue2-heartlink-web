<template>
  <div class="w-full h-full user-profile absolute top-0 p-8 left-0 z-30">
    <BhBack></BhBack>
    <h2 class="mb-2 mt-10 text-xl font-bold text-white">What's your email?</h2>

    <div class="text-color">
      Don't lose access to your account, verify your email
    </div>

    <div class="mt-3">
      <input
        class="your-email w-full text-xl mb-3 p-3 rounded-lg"
        v-model="txtEmail"
        type="email"
        placeholder="Your name"
        @keyup="onChangeInput"
      />
    </div>
    <div class="mt-4">
      <BhContinue
        :isActives="isActives"
        @onChangeContinue="onChangeContinue"
      ></BhContinue>
    </div>
    <div class="flex mt-4 justify-center pt-3 pb-3 text-white text-xl">OR</div>
    <div class="flex mt-4 justify-center">
      <button
        class="btn-Sign cursor-pointer text-xl font-semibold bg-white text-black w-80 rounded-lg px-3 py-3 mb-4"
        @click="onLoginGoogle()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/google_icon.svg" class="mr-2" alt="" />
          <span class="font-sans">Log in with Google</span>
        </span>
      </button>
    </div>

    <div class="flex justify-center text-base text-color">
      Verify instantly by connecting your Google account
    </div>

    <div class="text-base flex text-white mt-4">
      <input type="radio" name="" id="" class="mr-7 w-7 bg-radio-input" />
      <span>I want to receive news, updates and offers from Heartlink</span>
    </div>
  </div>
</template>

<script>
import BhBack from "../../bh-element-ui/button/bh-back";
import BhContinue from "../../bh-element-ui/button/bh-continue";
import validate from "@/middleware/validate";
import { mapMutations } from "vuex";

export default {
  components: {
    BhBack,
    BhContinue,
  },
  name: "dialog-your-email",

  data() {
    return {
      centerDialogVisible: false,
      txtEmail: "",
      isResultValidate: false,
      btEmail: "btContinueId",
      isActives: false,
    };
  },

  methods: {
    ...mapMutations(["setEmailForUser"]),

    onChangeInput() {
      this.isResultValidate = validate.validateEmail(this.txtEmail);
      if (this.isResultValidate) {
        // Xét giá trị email
        debugger;
        this.isActives = true;
      }
    },

    onChangeContinue(value) {
      debugger;
      this.setEmailForUser(this.txtEmail);
      this.$emit("onShowWelcome", value);
    },
  },
  mounted() {},
};
</script>

<style lang="css">
.text-color {
  color: #737b91;
}
.user-profile {
  background-color: #232937;
}

.el-input__wrapper {
  background-color: #495063;
  padding: 10px;
  border: 1px solid #495063;
}

.your-email {
  color: white !important;
  background-color: #495063;
}

.your-email:focus {
  border: 1px solid white;
}
</style>
