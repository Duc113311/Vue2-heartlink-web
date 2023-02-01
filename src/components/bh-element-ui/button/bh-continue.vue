<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <button
      :loading="isLoading"
      :id="btContinueId"
      class="text-lg btContinueCode tracking-wider first-letter: text-white w-full rounded-lg p-3 color-button"
      @click="onClickContinues"
    >
      Continue
    </button>
  </div>
</template>

<script>
// import storeTokens from "../../../stores/login/store-token.js";
export default {
  name: "bt-continue",
  props: ["isStatusRequire", "isResultValidate", "btContinueId"],
  data() {
    return {
      isLoading: false,
      isNumber: 0,
    };
  },

  computed: {
    // isLoading() {
    //   return storeTokens.state.isLoadingBtn;
    // },
  },

  methods: {
    /**
     * Sự kiện click để tiếp tục
     */
    onClickContinues() {
      if (!this.isStatusRequire) {
        this.$emit("onNextScreen", 1);
      }

      if (this.isResultValidate) {
        this.$emit("onNextWellcome", true);
      }
    },
  },
};
</script>

<style lang="css">
.color-button {
  background-color: #382e41;
  border: 1px solid #2e465c !important;
  cursor: pointer;
}

.color-button:hover,
.color-button:active,
.color-button:focus {
  background-color: #242a38;
}
</style>
