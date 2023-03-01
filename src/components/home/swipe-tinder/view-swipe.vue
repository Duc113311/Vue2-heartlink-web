<template>
  <Tinder
    ref="tinder"
    key-name="userId"
    :queue.sync="listDataUser"
    :offset-y="10"
    @submit="onSubmit"
  >
    <template slot-scope="scope">
      <div
        class="pic z-8"
        :style="{
          'background-image': `url(${scope.data.avatars[0].urlName})`,
        }"
      />
      <div></div>
      <div class="bg-background-shadow w-full h-full absolute top-0"></div>
      <div class="w-full flex items-center absolute bottom-0 h-72 p-4">
        <div class="grid w-full title-boy mb-4">
          <div class="w-70 text-white">
            <div class="flex">
              <h3 class="text-2xl font-semibold mr-2">
                {{ scope.data.firstName }}
              </h3>
              <img
                src="@/assets/icon/ic_infor.svg"
                width="30"
                @click="onDetailInfor(scope.data.userId)"
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
import { mapState } from "vuex";

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

  computed: {
    ...mapState("user_profile"),

    listDataUser() {
      debugger;
      return this.$store.state.userModule.user_profile;
    },
  },

  created() {},
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

.home-page {
  background-color: #382e41;
}
.home-page::-webkit-scrollbar {
  display: none;
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
