<template>
  <div class="home-page w-full h-full relative p-2">
    <div class="w-full h-full z-10">
      <Header></Header>
      <div class="body-page-home-new w-full">
        <!-- Home -->
        <div class="w-full h-full" v-if="!isShowDetail">
          <div class="body-home w-full relative">
            <!-- Body home -->

            <ViewSwipe
              ref="myViewSwipe"
              @onShowDetailUser="onShowDetailUser"
            ></ViewSwipe>

            <!-- <ActionDating @onClickDecide="decide"></ActionDating> -->
          </div>

          <div class="w-full absolute bottom-0 left-0 h-full">
            <Footer></Footer>
          </div>
        </div>

        <!-- Detail user -->
        <div v-if="isShowDetail" class="w-full body-detail h-full">
          <DetailProfile
            @onClickNopeDetail="onClickNopeDetail"
            @onHideProfile="onHideProfile"
          ></DetailProfile>
        </div>
      </div>
    </div>

    <!-- Hiển thị form chat khi cả 2 user match -->
    <div
      v-show="isShowMatchs"
      class="w-full h-full match-like z-20 absolute top-0 left-0"
    >
      <FormLikeToo @onHideLikeYou="onHideLikeYou"></FormLikeToo>
    </div>

    <div
      v-if="isSendSuccess"
      class="w-full h-full send-supper-like absolute top-0 left-0 z-20"
    >
      <FormSendSupperLike
        @onHidePopupSendSuperLike="onHidePopupSendSuperLike"
      ></FormSendSupperLike>
    </div>
  </div>
</template>

<script>
import FormSendSupperLike from "../../components/home/send-supper-like/form-send-supper-like";
import FormLikeToo from "../../components/home/match-like/form-like-too";
import DetailProfile from "../../components/home/view/detail-profile";
// import ActionDating from "../../components/home/btn-function/action-dating";
import ViewSwipe from "../../components/home/swipe-tinder/view-swipe";
import Footer from "../../components/layout/footer-home/footer";
import Header from "../../components/layout/header-home/header";

import { mapActions, mapMutations } from "vuex";
export default {
  components: {
    FormSendSupperLike,
    FormLikeToo,
    DetailProfile,
    // ActionDating,
    ViewSwipe,
    Footer,
    Header,
  },
  name: "home-page",

  data() {
    return {
      queue: [],
      offset: 0,
      history: [],
      isShowDetail: false,
      idImage: "",
      isDetail: false,
      loading: true,
      isSendSuccess: false,
      isMatch: false,
    };
  },

  computed: {
    isShowMatchs() {
      return this.$store.state.homeModule.statusMatch;
    },
  },

  async created() {
    await this.getListCardForUser();
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  methods: {
    ...mapActions(["getListCardForUser", "getDetailInforUser"]),

    ...mapMutations(["setStatusLikeUser"]),
    onHideLikeYou(val) {
      this.setStatusLikeUser(val);
      this.isSendSuccess = true;
    },

    onHideProfile(val) {
      this.isShowDetail = val;
    },

    onClickNopeDetail() {
      this.isShowDetail = false;
      this.$refs.myViewSwipe.decide("nope");
    },

    nextImageLeft() {},

    nextImageRight() {},

    async onShowDetailUser(val) {
      console.log(val);
      // const dataValue = {
      //   userId: val,
      //   latitude: localStorage.latitude,
      //   longitude: localStorage.longitude,
      // };
      // await this.getDetailInforUser(dataValue);
      this.isShowDetail = val;
    },

    onHidePopupSendSuperLike(val) {
      this.isSendSuccess = val;
    },
  },

  beforeUpdate() {},

  beforeMount() {},

  mounted() {},
};
</script>

<style lang="css">
.body-page-home-new {
  height: calc(100% - 10%);
}

.body-home {
  height: calc(100% - 14%);
}

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

.el-loading-spinner {
  display: flex;
  justify-content: center;
}
</style>
