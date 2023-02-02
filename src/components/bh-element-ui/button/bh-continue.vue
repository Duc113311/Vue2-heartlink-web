<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <el-button
      type="danger"
      :loading="isShowLoading"
      @click="onClickContinues"
      v-bind:class="[isActiveContinue ? 'activeButton' : 'defaultButton']"
      class="btContinueCode cursor-pointer text-white w-full color-button"
      >Continue</el-button
    >
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
      this.$emit("onChangeContinue", true);
    },
  },
};
</script>

<style lang="css">
.color-button {
  border: 1px solid #2e465c !important;
  border-radius: 10px !important;
  padding: 14px 20px !important;
  cursor: pointer;
}

.defaultButton {
  background-color: rgba(0, 0, 0, 0) !important;
}
.activeButton {
  background-color: rgb(220 20 30) !important;
}

.el-button.is-loading:before {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
