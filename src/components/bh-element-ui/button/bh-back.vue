<template>
  <div
    class="text-xl w-full h-10 flex items-center text-white"
    @click="onClickBack()"
  >
    <i class="fas fa-chevron-left"></i>
  </div>
</template>

<script>
export default {
  name: "bt-back",

  props: [],
  data() {
    return {};
  },

  methods: {
    /**
     * Quay lại trang trước
     */
    onClickBack() {
      debugger;
      this.$emit("onBackComponent", true);
    },
  },
};
</script>

<style></style>
