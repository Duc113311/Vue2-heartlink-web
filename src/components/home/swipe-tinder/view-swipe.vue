<template>
  <Tinder
    ref="tinder"
    key-name="id"
    :queue.sync="queue"
    :offset-y="10"
    @submit="onSubmit"
  >
    <template slot-scope="scope">
      <div
        class="pic z-8"
        :style="{
          'background-image': `url(https://cn.bing.com//th?id=OHR.${scope.data.id}_UHD.jpg&pid=hp&w=720&h=1280&rs=1&c=4&r=0)`,
        }"
      />
      <div class="bg-background-shadow w-full h-full absolute top-0"></div>
      <div class="w-full flex items-center absolute bottom-0 h-64 p-4">
        <div class="grid w-full title-boy mb-4">
          <div class="w-70 text-white">
            <div class="flex">
              <h3 class="text-2xl font-semibold mr-2">Ngọc Trinh</h3>
              <img
                src="@/assets/icon/ic_infor.svg"
                width="30"
                @click="onDetailInfor(scope.data.id)"
                class="cursor-pointer"
                srcset=""
              />
            </div>
            <span>ádasdasdas</span><br />
            <div class="flex">
              <img
                class="cursor-pointer"
                src="@/assets/icon/ic_location.svg"
                alt=""
                srcset=""
              />
              <span> 2km away</span>
            </div>
          </div>
          <div class="w-30">
            <img
              class="cursor-pointer"
              src="@/assets/icon/bt_like_count.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div class="w-full flex absolute top-0 opacity-0 h-2/4">
        <div class="w-2/4 bg-slate-500" @click="nextImageLeft()"></div>
        <div class="w-2/4 bg-orange-200" @click="nextImageRight()"></div>
      </div>
    </template>
    <img
      class="like-pointer"
      slot="like"
      src="@/assets/image-tinder/like-txt.png"
    />
    <img
      class="nope-pointer"
      slot="nope"
      src="@/assets/image-tinder/nope-txt.png"
    />
    <img
      class="super-pointer"
      slot="super"
      src="@/assets/image-tinder/super-txt.png"
    />
    <img
      class="rewind-pointer"
      slot="rewind"
      src="@/assets/image-tinder/rewind-txt.png"
    />
  </Tinder>
</template>

<script>
import Tinder from "vue-tinder";
import source from "@/bing";

export default {
  name: "view-swipe",
  components: { Tinder },
  data() {
    return {
      queue: [],
      offset: 0,
      history: [],
      isShowDetail: false,
      idImage: "",
    };
  },

  created() {
    this.mock();
  },
  methods: {
    onClickNopeDetail(value) {
      debugger;
      this.isShowDetail = value;
    },
    nextImageLeft() {
      debugger;
    },

    nextImageRight() {
      debugger;
    },

    onDetailInfor(value) {
      debugger;
      console.log(value);
      this.idImage = value;
      this.isShowDetail = true;
    },
    mock(count = 5, append = true) {
      const list = [];
      for (let i = 0; i < count; i++) {
        list.push({ id: source[this.offset] });
        this.offset++;
      }
      if (append) {
        this.queue = this.queue.concat(list);
      } else {
        this.queue.unshift(...list);
      }
    },
    onSubmit({ item }) {
      if (this.queue.length < 3) {
        this.mock();
      }
      this.history.push(item);
    },
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
  height: 100px;
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

.title-logo {
  height: 12%;
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
  width: 100% !important;
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
