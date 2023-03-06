<template>
  <div>
    <div class="btns">
      <img src="@/assets/icon/bt_back.svg" @click="decide('rewind')" />
      <img src="@/assets/icon/bt_nope.svg" @click="decide('nope')" />
      <img src="@/assets/icon/bt_super_like.svg" @click="decide('super')" />
      <img src="@/assets/icon/bt_like.svg" @click="decide('like')" />
      <img src="@/assets/icon/bt_boost.svg" @click="decide('help')" />
    </div>
  </div>
</template>

<script>
export default {
  name: "action-dating",

  data() {
    return {};
  },

  methods: {
    /**
     * Xử lý các action màn Home
     * @param {*} choice
     */
    decide(choice) {
      debugger;
      console.log(choice);
      // this.$emit("onClickDecide", choice);
    },
  },
};
</script>

<style lang="css">
.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 425px !important;
  max-width: 355px;
  z-index: 9;
}

.btns img {
  margin-right: 12px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-child(2n + 1) {
  width: 70px !important;
}

.btns img:nth-child(2n) {
  width: 80px !important;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}
</style>
