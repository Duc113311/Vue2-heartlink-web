<template>
  <div id="app">
    <div
      v-show="isShowIconApp"
      class="absolute z-20 img-app w-full h-full flex justify-center"
    >
      <img
        class="w-40"
        src="./assets/icon/ic_icon_app (1).svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="tracking-wide absolute z-10 w-full h-full">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app-view",

  data() {
    return {
      isShowIconApp: true,
    };
  },

  created() {
    setTimeout(() => {
      this.isShowIconApp = false;
    }, 2000);
  },
};
</script>
<style lang="css">
.img-app {
  background: #884971;
  opacity: 1;
}
</style>
