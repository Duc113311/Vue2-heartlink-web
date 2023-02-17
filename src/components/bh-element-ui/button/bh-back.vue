<template>
  <div class="text-xl w-full h-10 flex items-center text-white">
    <i class="fas fa-chevron-left" @click="onClickBack()"></i>
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
      this.$emit("onBackComponent", true);
    },
  },
};
</script>

<style></style>
