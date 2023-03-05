<template>
  <div class="flex justify-center w-full pl-10 pr-10 items-center">
    <el-button
      :loading="isShowLoading"
      v-bind:class="[isActiveContinue ? 'active-button' : isDefaultTheme]"
      class="btContinueCode cursor-pointer w-full padding-button"
      @click="onClickIAgree()"
      >I agree</el-button
    >
  </div>
</template>

<script>
export default {
  name: "bt-agree",

  props: ["isLoading"],
  data() {
    return {};
  },

  computed: {
    isShowLoading() {
      return this.isLoading;
    },

    isDefaultTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return "light-theme-button";
      } else {
        return "dark-theme-button ";
      }
    },
  },

  methods: {
    /**
     * Click show dialog
     */
    onClickIAgree() {
      this.$emit("onAgreeContinue", true);
    },
  },
};
</script>

<style lang="css">
.color-bt:hover {
  background-color: #fd5d65 !important;
}
.color-bt {
  background-color: #3a3f52 !important;
  color: #ffffff !important;
  border: none !important;
}
</style>
