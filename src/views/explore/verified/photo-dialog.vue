<template>
  <div class="home-pages w-full h-full">
    <!-- Verified -->
    <div
      class="photo-verified w-full bg-no-repeat bg-cover h-full"
      :style="photoVerified"
    >
      <div class="flex w-full p-3 pt-10 items-center">
        <div class="">
          <img
            @click="onClickBack"
            src="@/assets/icon/font-icon/arrow-88-64.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="w-full flex title-detail-explore justify-center text">
          Photo verified
        </div>
      </div>
      <div class="border-image">
        <div class="imgs"></div>
      </div>

      <div>
        <BhJoin></BhJoin>
        <div class="p-1"></div>
        <BhNothank></BhNothank>
      </div>
    </div>
  </div>
</template>

<script>
import BhNothank from "../../../components/bh-element-ui/button/bh-nothank";
import BhJoin from "../../../components/bh-element-ui/button/bh-join";
export default {
  components: {
    BhNothank,
    BhJoin,
  },
  name: "photo-dialog",
  data() {
    return {
      photoVerified: {
        backgroundImage: `url(${require("@/assets/image-dating/bg_verified_photo.png")})`,
      },
    };
  },

  methods: {
    onClickBack() {
      this.$router.push({ path: "/explore" });
    },
  },
};
</script>

<style lang="css">
.home-pages {
  background-color: #382e41;
}

.border-image {
  width: 100%;
  height: 66%;
  display: flex;
  justify-content: center;
  padding: 22px;
  position: relative;
}

.imgs {
  width: 75%;
  height: 74%;
  border: 5px solid white;
  border-radius: 10px;
  position: absolute;
  top: 9px;
}
</style>
