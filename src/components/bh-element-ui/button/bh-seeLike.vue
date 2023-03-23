<template>
  <div class="flex justify-center w-full pl-10 pr-10 items-center">
    <button
      class="text-base text-white w-80 rounded-lg p-5 color-button"
      @click="onClickSeeLikes()"
    >
      SEE WHO LIKES YOU
    </button>
  </div>
</template>

<script>
export default {
  name: "bt-continue",
  data() {
    return {
      isNumber: 0,
    };
  },

  computed: {},

  methods: {
    /**
     * Sự kiện click để tiếp tục
     */
    onClickSeeLikes() {
      this.$emit("onChangeSeeLikes", true);
    },
  },
};
</script>

<style lang="css">
.color-button:hover {
  background-color: #30e6af !important;
}
.color-button {
  height: 60px;
  font-size: 22px !important;
  background-color: #f6a800 !important;
  color: #ffffff !important;
  border: none !important;
  border-radius: 12px;
}
</style>
