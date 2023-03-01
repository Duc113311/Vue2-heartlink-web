<template>
  <div class="home-page w-full h-full relative p-2">
    <div class="w-full h-full">
      <Header></Header>
      <div class="body-page-home-new w-full">
        <!-- Home -->
        <div class="w-full h-full">
          <div class="body-home w-full relative">
            <!-- Body home -->

            <ViewSwipe></ViewSwipe>

            <ActionDating></ActionDating>
          </div>

          <div class="w-full absolute bottom-0 left-0 h-full">
            <Footer></Footer>
          </div>
        </div>

        <!-- Detail user -->
        <div v-show="isDetail" class="w-full body-detail h-full">
          <DetailProfile></DetailProfile>
        </div>
      </div>
    </div>

    <!-- Hiển thị form chat khi cả 2 user match -->
    <div v-show="isMatch" class="w-full h-full match-like">
      <FormLikeToo></FormLikeToo>
    </div>

    <div v-show="isMatch" class="w-full h-full send-supper-like">
      <FormSendSupperLike></FormSendSupperLike>
    </div>
  </div>
</template>

<script>
import FormSendSupperLike from "../../components/home/send-supper-like/form-send-supper-like";
import FormLikeToo from "../../components/home/match-like/form-like-too";
import DetailProfile from "../../components/home/view/detail-profile";
import ActionDating from "../../components/home/btn-function/action-dating";
import ViewSwipe from "../../components/home/swipe-tinder/view-swipe";
import Footer from "../../components/layout/footer-home/footer";
import Header from "../../components/layout/header-home/header";
import source from "@/bing";

import { mapActions } from "vuex";
export default {
  components: {
    FormSendSupperLike,
    FormLikeToo,
    DetailProfile,
    ActionDating,
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
      isMatch: false,
    };
  },

  async created() {
    const paramUser = {
      userId: "CoSfrEMLItUG2lvJWWfZGqPm3VU2",
      latitude: 21.0058814,
      longitude: 105.7948012,
      page: 6,
      pageNumber: 20,
      startAge: 18,
      endAge: 55,
      showMeGender: 2,
      location: 80,
    };
    debugger;
    await this.getAllListUserProfile(paramUser);
  },
  methods: {
    ...mapActions(["getAllListUserProfile"]),

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
    async decide(choice) {
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

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgb(4 7 7 / 92%) 9%,
    rgb(255 255 255 / 0%) 29%,
    rgb(255 255 255 / 0%) 99%
  );
}
</style>
