<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <el-button
      type="danger"
      :loading="isShowLoading"
      @click="onClickComfirm"
      class="btContinueCode cursor-pointer activeButton text-white w-full color-button"
      >Comfirm</el-button
    >
  </div>
</template>

<script>
export default {
  name: "bh-comfirm",
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
  },

  methods: {
    /**
     * Sự kiện click để tiếp tục
     */
    onClickComfirm() {
      this.$emit("onChangeComfirm", true);
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
  background-color: #fd5d65 !important;
}

.el-button.is-loading:before {
  background-color: rgba(0, 0, 0, 0) !important;
}
</style>
