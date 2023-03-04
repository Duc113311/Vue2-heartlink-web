<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <button
      :loading="isShowLoading"
      @click="onClickContinues"
      v-bind:class="[isActiveContinue ? 'active-button' : isDefaultTheme]"
      class="btContinueCode cursor-pointer w-full padding-button"
      :disabled="!isActiveContinue"
      ref="continue"
    >
      Continue
    </button>
  </div>
</template>

<script>
export default {
  name: "bt-continue",
  props: ["isLoading", "isActives"],
  data() {
    return {
      isNumber: 0,
    };
  },

  computed: {
    isDefaultTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return "light-theme-button";
      } else {
        return "dark-theme-button ";
      }
    },

    isShowLoading() {
      debugger;
      return this.isLoading;
    },
    isActiveContinue() {
      debugger;

      return this.isActives;
    },
  },

  methods: {
    /**
     * Sự kiện click để tiếp tục
     */
    onClickContinues() {
      debugger;
      this.$emit("onChangeContinue", true);
    },
  },
};
</script>

<style lang="css">
.color-button {
  border-radius: 10px !important;
  padding: 14px 20px !important;
  cursor: pointer;
}

.active-button {
  background-color: #fd5d65;
}

.el-button.is-loading:before {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
