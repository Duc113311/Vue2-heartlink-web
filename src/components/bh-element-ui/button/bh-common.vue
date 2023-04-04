<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <button
      type="danger"
      :loading="isShowLoading"
      @click="onClickCommon()"
      class="btContinueCode cursor-pointer w-full padding-button active-button"
    >
      {{ nameButton }}
    </button>
  </div>
</template>

<script>
export default {
  name: "bh-common",
  props: ["isLoading", "nameTitle"],
  data() {
    return {
      isNumber: 0,
    };
  },

  computed: {
    isShowLoading() {
      return this.isLoading;
    },

    nameButton() {
      return this.nameTitle;
    },
  },

  methods: {
    /**
     * Sự kiện click để tiếp tục
     */
    onClickCommon() {
      this.$emit("onChangeCommon", false);
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

.active-button {
  background-color: #fd5d65;
}
</style>
