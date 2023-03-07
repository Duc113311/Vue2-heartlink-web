<template>
  <div class="like-topic w-full h-full">
    <div class="title-none"></div>

    <div class="w-full title-like flex items-center">
      <div
        v-bind:class="[isActiveLike ? 'peopleLike' : 'likeForYou']"
        class="w-2/4 cursor-pointer flex h-full justify-center like99 items-center text-xl font-bold text-white"
        @click="onShowLikes(true)"
      >
        <span>99+</span>like
      </div>
      <div
        v-bind:class="[isActiveLike ? 'likeForYou' : 'peopleLike']"
        class="w-2/4 cursor-pointer flex h-full justify-center items-center text-xl font-bold text-white"
        @click="onShowForYou(false)"
      >
        For you
      </div>
    </div>
    <!-- body -->
    <div class="w-full body-likes">
      <div class="w-full h-full" v-if="isShowComponent">
        <PeopleLikes></PeopleLikes>
      </div>
      <div class="w-full h-full" v-if="!isShowComponent">
        <LikeForYou></LikeForYou>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import LikeForYou from "../../components/like-topic/for-you/like-for-you";
import PeopleLikes from "../../components/like-topic/99-like/people-likes";
import Footer from "../../components/layout/footer-home/footer";
export default {
  components: {
    LikeForYou,
    PeopleLikes,
    Footer,
  },
  name: "like-topic",

  data() {
    return {
      isShowComponent: true,
      isActiveLike: true,
    };
  },

  methods: {
    onShowLikes(val) {
      this.isShowComponent = val;
      this.isActiveLike = val;
    },

    onShowForYou(val) {
      this.isShowComponent = val;
      this.isActiveLike = val;
    },
  },
};
</script>

<style lang="css">
.title-none {
  height: 4%;
}

.like-topic {
  background-color: #382e41;
}

.peopleLike {
  border-bottom: 2px solid #fb5e63;
  color: #fb5e63;
}

.body-likes {
  height: 80%;
  background-color: #382e41;
}

.title-like {
  height: 6.4%;
  border-bottom: 1px solid #393f4e;
}
</style>
