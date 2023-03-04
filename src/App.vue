<template>
  <div id="app">
    <div
      class="tracking-wide layout-web w-full h-full absolute flex justify-center items-center"
    >
      <div
        class="layout-detail overflow-hidden relative"
        v-bind:class="[isDarkTheme ? 'dark-theme-bg' : 'light-theme-bg']"
      >
        <div
          v-show="isShowIconApp"
          class="absolute z-20 img-app flex w-full h-full justify-center"
        >
          <img width="100" src="./assets/icon/ic_icon_app (1).svg" />
        </div>
        <router-view />
      </div>
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

  computed: {
    isDarkTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return false;
      } else {
        return true;
      }
    },
  },

  methods: {},

  created() {
    setTimeout(() => {
      this.isShowIconApp = false;
    }, 1000);

    debugger;
  },

  mounted() {},
};
</script>
<style lang="css">
@import "@/assets/css/common.css";
@import "@/assets/css/txt-common.css";
@import "@/assets/css/color-text.css";
@import "@/assets/css/color-bg.css";

@import "@/assets/css/dark-them.css";
@import "@/assets/css/light-theme.css";

.img-app {
  background: #884971;
  opacity: 1;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.layout-detail {
  width: 500px;
  height: 932px;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .layout-web {
    background: #b5e3ae;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .layout-web {
    background: #1b0838;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .layout-web {
    background: #9fd2e3;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .layout-web {
    background: #f7c49c;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .example {
    background: pink;
  }
}
</style>
