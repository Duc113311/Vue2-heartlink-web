<template>
  <div class="w-full h-full">
    <Tinder
      class="uis"
      ref="tinder"
      key-name="oAuth2Id"
      :queue.sync="listDataUser"
      :offset-y="10"
      @submit="onSubmit"
    >
      <template slot-scope="scope">
        <div
          v-show="isActiveImag"
          class="pic z-8"
          :style="{
            'background-image': `url(${scope.data.profiles.avatars[0]})`,
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
            v-for="(data, index) in scope.data.profiles.avatars"
            :key="data"
            :id="`avatar_${index}`"
            :class="index === 0 ? 'active-image' : 'no-active'"
            class="bt-img imageAvatar p-0.5 rounded-lg mr-0.5 no-active"
            @click="onClickNextImage(data)"
          ></button>
        </div>
        <div class="bg-background-shadow w-full h-full absolute top-0"></div>
        <div class="w-full flex items-center absolute bottom-0 h-80 p-4">
          <div class="grid w-full title-boy mb-4">
            <div class="w-70">
              <div class="flex items-center font-title">
                <div
                  :title="scope.data.fullname"
                  class="text-ellipsis w-64 whitespace-nowrap overflow-hidden"
                >
                  {{ scope.data.fullname }},
                </div>
                <div class="mr-3">{{ bindingAge(scope.data?.dob) }}</div>
                <div
                  class="flex justify-center items-center cursor-pointer"
                  @click="onClickShowDetailUser(scope.data)"
                >
                  <i class="fa-solid fa-circle-info text-xl"></i>
                </div>
              </div>
              <span class="font-describe">{{
                scope.data?.about ? scope.data?.about : "Tell me about"
              }}</span
              ><br />
              <div class="flex">
                <div class="mr-2">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <span class="font-describe">
                  {{ bindingDistance(scope.data?.location) }} km away</span
                >
              </div>
            </div>
            <div class="w-20 absolute bottom-24 right-0">
              <img
                class="cursor-pointer"
                src="@/assets/icon/bt_like_count.svg"
                width="70"
              />
              <span class="h-complete">{{ scope.data.coins }}</span>
            </div>
          </div>
        </div>
        <div class="w-full flex absolute top-0 opacity-0 h-4/6 nextBg">
          <div
            class="w-2/4 bg-slate-500"
            @click="
              nextImageLeft(scope.data.profiles.avatars, scope.data.oAuth2Id)
            "
          ></div>
          <div
            class="w-2/4 bg-orange-200"
            @click="
              nextImageRight(scope.data.profiles.avatars, scope.data.oAuth2Id)
            "
          ></div>
        </div>
      </template>

      <div class="like-pointer icon-tinder" slot="like">LIKE</div>
      <div class="nope-pointer icon-tinder" slot="nope">NOPE</div>
      <div class="super-pointers icon-tinder" slot="super">SUPER</div>
    </Tinder>

    <div
      v-show="listDataUser.length === 0"
      class="w-full h-full flex justify-center items-center"
    >
      <div class="text-center">
        <img src="@/assets/icon/art_meet_people.svg" width="150" />
        <div class="padding-describe">No one user</div>
      </div>
    </div>

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
import functionValidate from "../../../middleware/validate.js";
import { mapActions, mapMutations } from "vuex";

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
      nameTinder: "",
    };
  },

  computed: {
    listDataUser() {
      return this.$store.state.mongoModule.listDataCard
        ? this.$store.state.mongoModule.listDataCard
        : [];
    },

    isShowUrl(val) {
      return val;
    },

    idImage() {
      return this.$store.state.userModule.urlAvatarUser.urlName;
    },
  },

  created() {},
  methods: {
    ...mapMutations([
      "setUrlNameAvatarUser",
      "setLeftRightAvatar",
      "setDetailUserProfile",
    ]),

    ...mapActions(["patchNopeUserId", "patchComeBackUserId", "postLikeUserId"]),

    bindingAge(val) {
      const dataAge = functionValidate.calculatAge(val);
      return dataAge;
    },

    bindingDistance(val) {
      const latAdmin = localStorage.latitude;
      const longAdmin = localStorage.longitude;
      const latUser = val.lat;

      const longUser = val.long;

      const dataDistance = functionValidate.convertDistance(
        latAdmin,
        longAdmin,
        latUser,
        longUser,
        "K"
      );
      if (parseInt(dataDistance.toFixed(0)) === 0) {
        return 1;
      } else {
        return parseInt(dataDistance.toFixed(0));
      }
    },

    onClickNopeDetail(value) {
      this.isShowDetail = value;
    },
    nextImageLeft(value, oAuth2Id) {
      console.log(value);

      const idImage = this.$store.state.userModule.urlAvatarUser;
      if (idImage.idUrl !== 0) {
        document
          .getElementById(`avatar_` + idImage.idUrl)
          .classList.remove("active-image");
        document
          .getElementById(`avatar_` + parseInt(idImage.idUrl - 1))
          .classList.add("active-image");
        this.isActiveImag = false;

        this.setLeftRightAvatar({
          listImages: value,
          idImage: idImage.urlName,
          statusNext: false,
          userId: oAuth2Id,
        });
      }
    },

    nextImageRight(value, oAuth2Id) {
      console.log(value);
      this.isActiveImag = false;

      const idImage = this.$store.state.userModule.urlAvatarUser;

      if (!idImage) {
        document.getElementById(`avatar_0`).classList.remove("active-image");
        document.getElementById(`avatar_1`).classList.add("active-image");
        this.setLeftRightAvatar({
          listImages: value,
          idImage: value[0],
          statusNext: true,
          userId: oAuth2Id,
        });
      } else {
        if (
          document.getElementById(`avatar_` + parseInt(idImage.idUrl + 1)) !==
          null
        ) {
          document
            .getElementById(`avatar_` + idImage.idUrl)
            .classList.remove("active-image");

          document
            .getElementById(`avatar_` + parseInt(idImage.idUrl + 1))
            .classList.add("active-image");
          this.setLeftRightAvatar({
            listImages: value,
            idImage: idImage.urlName,
            statusNext: true,
            userId: oAuth2Id,
          });
        }
      }
    },

    onNopeUser(val) {
      console.log(val);
    },

    onClickShowDetailUser(value) {
      console.log(value);
      this.setDetailUserProfile(value);
      this.$emit("onShowDetailUser", true);
    },
    async onSubmit({ item }) {
      this.setUrlNameAvatarUser("");
      this.isActiveImag = true;
      debugger;
      if (this.nameTinder.toString() === "nope") {
        console.log("Nope");
        const data = {
          userId: localStorage.userId,
          objectCustomer: {
            userIdCustomer: item.userId,
          },
        };
        await this.patchNopeUserId(data);
      }
      if (this.nameTinder.toString() === "super") {
        console.log("Supper");
      }
      if (this.nameTinder.toString() === "like") {
        console.log("like");
        const data = {
          userId: localStorage.userId,
          objectCustomer: {
            userIdCustomer: item.userId,
          },
        };
        await this.postLikeUserId(data);
      }
      this.history.push(item);
    },
    async decide(choice) {
      console.log(choice);
      if (choice === "rewind") {
        if (this.history.length) {
          this.$refs.tinder.rewind([this.history.pop()]);
        }
      } else if (choice === "help") {
        console.log("tính năng đang phát triển");
      } else {
        this.nameTinder = choice;

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
.icon-tinder {
  font-size: 50px;
  font-weight: 600;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  padding-left: 16px;
  padding-right: 16px;
}

.like-pointer {
  top: 6rem;
  right: 19rem;
  color: #f6a800;
  border: 7px solid #f6a800;
  transform: rotate(-45deg);
}

.nope-pointer {
  top: 76px;
  left: 15rem;
  transform: rotate(45deg);
  color: #39685a;
  border: 7px solid #39685a;
}

.super-pointers {
  bottom: 80px;
  left: 7rem;
  right: 7rem;
  color: #00ba83;
  border: 7px solid #00ba83;
}

.rewind-pointer {
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 10px;
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
  background-color: #382e41 !important ;
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
  max-width: 355px;
  z-index: 9;
}

.btns img {
  margin-right: 0px;
  box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.btns img:nth-last-child(1) {
  margin-right: 0;
}

.active-image {
  background-color: white !important;
}

.no-active {
  background-color: #ffffff8f;
}

.h-complete {
  position: absolute;
  bottom: 0px;
  padding: 21px;
  font-size: 26px;
}
</style>
