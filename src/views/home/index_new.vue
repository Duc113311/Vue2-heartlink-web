<template>
  <div class="home-page w-full h-full">
    <div class="w-full h-full home-page overflow-hidden p-2">
      <!-- Trang chủ -->

      <Header></Header>
      <div class="w-full body-page-home relative">
        <router-view />
      </div>
      <Footer v-if="!isShowDetail"></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../components/layout/footer-home/footer";
import Header from "../../components/layout/header-home/header";
export default {
  name: "home-page",
  components: {
    Footer,
    Header,
  },
  data() {
    return {
      queue: [],
      offset: 0,
      history: [],
      isShowDetail: false,
      idImage: "",
    };
  },
};
</script>

<style lang="css">
.vue-tinder {
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  width: calc(100% - 20px);
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.nope-pointer,
.like-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  width: 64px;
  height: 64px;
}

.nope-pointer {
  right: 10px;
}

.like-pointer {
  left: 10px;
}

.super-pointer {
  position: absolute;
  z-index: 1;
  bottom: 80px;
  left: 0;
  right: 0;
  margin: auto;
  width: 112px;
  height: 78px;
}

.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
  width: 112px;
  height: 78px;
}

.pic {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.btns {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
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
  width: 53px;
}

.btns img:nth-child(2n) {
  width: 65px;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}

.home-page {
  background-color: #382e41;
}
.home-page::-webkit-scrollbar {
  display: none;
}

.body-page-home {
  background-color: aliceblue;
  height: 76%;
}

.title-logo {
  height: 15%;
}

.body-page {
  background-repeat: no-repeat;
  background-size: cover;
}
.title-boy {
  grid-template-columns: 5fr 1fr;
}

.bt-img {
  background-color: white;
  width: 70px;
}

.bt-option {
  grid-template-columns: auto auto auto auto auto;
  gap: 35px;
}

.title-page {
  background-color: #181c274f;
  background-image: linear-gradient(to top, #1e23334a, #230f1f7d);
  background-attachment: scroll;
  height: 24%;
}

.close-infor {
  position: absolute;
  top: -25px;
  right: 13px;
}
.like-count {
  position: absolute;
  top: 80px;
  right: 9px;
}

.title-body {
  border-bottom: 1px solid #373e50;
}

.bt-about {
  border: 1px solid white;
}

.grid-temlp {
  grid-template-columns: 1fr 1fr 1fr;
}

.grid-anthem {
  grid-template-columns: 3fr 1fr;
}

.tinder-card {
  width: 92% !important;
  background: none !important;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgb(4 7 7 / 92%) 9%,
    rgb(255 255 255 / 0%) 29%,
    rgb(255 255 255 / 0%) 99%
  );
}
</style>
