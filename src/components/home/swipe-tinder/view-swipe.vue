<template>
  <div class="w-full h-full">
    <Tinder
      ref="tinder"
      key-name="userId"
      :queue.sync="listDataUser"
      :offset-y="10"
      @submit="onSubmit"
    >
      <template slot-scope="scope">
        <div
          v-show="isActiveImag"
          class="pic z-8"
          :style="{
            'background-image': `url(${scope.data.avatars[0].urlName})`,
          }"
        />
        <div
          v-show="!isActiveImag"
          class="pic z-8 ss"
          :style="{
            'background-image': `url(${idImage}
            )`,
          }"
        />
        <div
          class="flex w-full justify-center absolute top-0 content-center p-0.5 border-solid mt-3"
        >
          <button
            v-for="data in scope.data.avatars"
            :key="data.id"
            class="bt-img p-0.5 rounded-lg mr-0.5"
            @click="onClickNextImage(data)"
          ></button>
        </div>
        <div class="bg-background-shadow w-full h-full absolute top-0"></div>
        <div class="w-full flex items-center absolute bottom-0 h-80 p-4">
          <div class="grid w-full title-boy mb-4">
            <div class="w-70">
              <div class="flex items-center font-title">
                <div
                  :title="scope.data.firstName"
                  class="text-ellipsis w-52 whitespace-nowrap overflow-hidden"
                >
                  {{ scope.data.firstName }},
                </div>
                <div class="mr-3">25</div>
                <div
                  class="flex justify-center items-center"
                  @click="onDetailInfor(scope.data.userId)"
                >
                  <i class="fa-solid fa-circle-info text-xl"></i>
                </div>
              </div>
              <span class="font-describe">Tell me about yourself</span><br />
              <div class="flex">
                <div class="mr-2"><i class="fa-solid fa-location-dot"></i></div>
                <span class="font-describe"> 2 km away</span>
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
        <div class="w-full flex absolute top-0 opacity-0 h-4/6 nextBg">
          <div
            class="w-2/4 bg-slate-500"
            @click="nextImageLeft(scope.data.avatars, scope.data.userId)"
          ></div>
          <div
            class="w-2/4 bg-orange-200"
            @click="nextImageRight(scope.data.avatars, scope.data.userId)"
          ></div>
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

    <div>
      <div class="btns">
        <img src="@/assets/icon/bt_back.svg" @click="decide('rewind')" />
        <img src="@/assets/icon/bt_nope.svg" @click="decide('nope')" />
        <img src="@/assets/icon/bt_super_like.svg" @click="decide('super')" />
        <img src="@/assets/icon/bt_like.svg" @click="decide('like')" />
        <img src="@/assets/icon/bt_boost.svg" @click="decide('help')" />
      </div>
    </div>
  </div>
</template>

<script>
import Tinder from "vue-tinder";
import { mapState, mapMutations } from "vuex";

export default {
  name: "view-swipe",
  components: { Tinder },
  data() {
    return {
      queue: [],
      offset: 0,
      history: [],
      isShowDetail: false,
      isActiveImag: true,
    };
  },

  computed: {
    ...mapState("user_profile"),

    listDataUser() {
      return this.$store.state.userModule.user_profile;
    },

    isShowUrl(val) {
      return val;
    },

    idImage() {
      debugger;
      return this.$store.state.userModule.urlAvatarUser.urlName;
    },
  },

  created() {},
  methods: {
    ...mapMutations(["setUrlNameAvatarUser", "setLeftRightAvatar"]),
    onClickNopeDetail(value) {
      this.isShowDetail = value;
    },
    nextImageLeft(value, userId) {
      debugger;
      console.log(value);
      const idImage = this.$store.state.userModule.urlAvatarUser.id;

      if (idImage) {
        this.isActiveImag = false;

        this.setLeftRightAvatar({
          idImage: idImage,
          statusNext: false,
          userId: userId,
        });
      }
    },

    nextImageRight(value, userId) {
      console.log(value);
      debugger;
      this.isActiveImag = false;

      const idImage = this.$store.state.userModule.urlAvatarUser.id;

      if (!idImage) {
        this.setLeftRightAvatar({
          idImage: value[0].id,
          statusNext: true,
          userId: userId,
        });
      } else {
        this.setLeftRightAvatar({
          idImage: idImage,
          statusNext: true,
          userId: userId,
        });
      }
    },

    onDetailInfor(value) {
      console.log(value);
      this.$emit("onShowDetailUser", value);
    },
    onSubmit({ item }) {
      this.history.push(item);
    },
    async decide(choice) {
      console.log(choice);
      if (choice === "rewind") {
        if (this.history.length) {
          this.$refs.tinder.rewind([this.history.pop()]);
        }
      } else if (choice === "help") {
        window.open("https://shanlh.github.io/vue-tinder");
      } else {
        this.$refs.tinder.decide(choice);
      }
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
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 9%,
    rgba(255, 255, 255, 0) 41%
  );
}

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
