<template>
  <div class="flex justify-center w-full pl-10 pr-10 items-center">
    <button
      @click="onClickContinues"
      class="btContinueCode cursor-pointer w-full padding-button active-button overflow-hidden"
      ref="joinNow"
    >
      Join now
    </button>
  </div>
</template>

<script>
export default {
  name: "join-now",
  data() {
    return {};
  },

  methods: {
    onClickJoinNow() {},
  },
};
</script>

<style lang="css">
.color-bt {
  background-color: #fd5d65;
  height: 60px;
  border-radius: 12px !important;
  font-size: 22px !important;
}
</style>
