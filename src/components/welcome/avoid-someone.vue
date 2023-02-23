<template>
  <div class="w-full h-full user-profile absolute top-0 p-8 left-0 grid">
    <div class="p-2">
      <div class="text-2xl w-full h-10 flex items-center text-white">
        <i class="fas fa-times" @click="onCloseDialog()"></i>
      </div>
      <div class="pt-5 pb-5">
        <div class="flex justify-center">
          <img src="@/assets/icon/art_avoid.svg" width="200" height="200" />
        </div>
      </div>

      <div
        class="flex w-full text-white text-xl justify-center items-center text-center"
      >
        Want to avoid someone you know on HeartLink?
      </div>

      <div class="text-center mt-5 text-slate-500">
        <div class="mt-4">
          It is easy - share your device's contact with HeartLink when using
          this feature to pick who you want to avoid
        </div>
        <br />

        <div class="mt-4">
          We'll store your vlocked contact to stop you from seeing each other if
          your contact has an account with the same infor tou provide. You can
          stop sharing with us in your settings
        </div>
        <br />
        <div class="mt-4 underline">
          <a class="" href="#">
            Learn more here, including how HeartLink process your contacts
          </a>
        </div>
      </div>
    </div>
    <BhContinue @onChangeContinue="onChangeContinue"></BhContinue>
  </div>
</template>

<script>
import BhContinue from "../bh-element-ui/button/bh-continue";
export default {
  components: {
    BhContinue,
  },
  name: "avoid-someone",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    onCloseDialog() {
      this.$emit("onHideWellcome", false);
    },

    onShowDialogQuit(value) {
      this.isShowQuitSing = value;
    },

    onCancelQuit() {
      this.isShowQuitSing = false;
    },

    onChangeContinue(val) {
      debugger;
      console.log(val);
      this.$router.push({ path: "/home" });
    },
  },
};
</script>

<style lang="css">
.text-color {
  color: #737b91;
}
.user-profile {
  background-color: #232937;
}
</style>
