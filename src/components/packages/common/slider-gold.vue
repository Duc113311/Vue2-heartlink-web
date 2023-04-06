<template>
  <div class="w-full gold-package overflow-scroll mt-3">
    <div class="border-package">
      <carousel
        :per-page="1"
        :mouse-drag="true"
        :autoplay="true"
        :paginationActiveColor="isColorActive"
        :paginationColor="isColor"
      >
        <slide
          data-index="0"
          data-name="MySlideName"
          @slideclick="handleSlideClick"
        >
          <div
            class="w-full flex justify-center text-center mb-2 dash-packages"
          >
            <div
              class="item-package platinum-bg"
              @click="onClickShowPackages('platinum')"
            >
              <div class="flex justify-center" @click="onChangeShowPackage()">
                <img
                  src="@/assets/icon/package/ic_platium_package.svg"
                  alt=""
                />
              </div>
              <div class="mt-2 text-xl">Platinum package</div>
              <div class="mt-2 text-sm">
                Level up everyone action you take on HeartLink
              </div>
            </div>
          </div>
        </slide>
        <slide
          ><div
            class="w-full flex justify-center text-center mb-2 dash-packages"
          >
            <div
              class="item-package gold-bg"
              @click="onClickShowPackages('gold')"
            >
              <div class="flex justify-center">
                <img src="@/assets/icon/package/ic_gold_package.svg" alt="" />
              </div>
              <div class="mt-2 text-xl">Gold package</div>
              <div class="mt-2 text-sm">
                Level up everyone action you take on HeartLink
              </div>
            </div>
          </div></slide
        >

        <slide>
          <div
            class="w-full flex justify-center text-center mb-2 dash-packages"
          >
            <div
              class="item-package silver-bg"
              @click="onClickShowPackages('silver')"
            >
              <div class="flex justify-center">
                <img src="@/assets/icon/package/ic_silver_package.svg" alt="" />
              </div>
              <div class="mt-2 text-xl">Silver package</div>
              <div class="mt-2 text-sm">
                Level up everyone action you take on HeartLink
              </div>
            </div>
          </div></slide
        >
        <slide>
          <div
            class="w-full flex justify-center text-center mb-2 dash-packages"
          >
            <div
              class="item-package supper-like-bg"
              @click="onClickShowPackages('supperLike')"
            >
              <div class="flex justify-center">
                <img src="@/assets/icon/package/ic_super_like.svg" alt="" />
              </div>
              <div class="mt-2 text-xl">Get Supper Like</div>
              <div class="mt-2 text-sm">
                Level up everyone action you take on HeartLink
              </div>
            </div>
          </div></slide
        >
        <slide
          ><div
            class="w-full flex justify-center text-center mb-2 dash-packages"
          >
            <div
              class="item-package boost-bg"
              @click="onClickShowPackages('boost')"
            >
              <div class="flex justify-center">
                <img src="@/assets/icon/package/ic_boost.svg" alt="" />
              </div>
              <div class="mt-2 text-xl">Get Boost Profile</div>
              <div class="mt-2 text-sm">
                Level up everyone action you take on HeartLink
              </div>
            </div>
          </div></slide
        >
        <slide
          ><div
            class="w-full flex justify-center text-center mb-2 dash-packages"
          >
            <div
              class="item-package read-receipts-bg"
              @click="onClickShowPackages('readReceipt')"
            >
              <div class="flex justify-center">
                <img src="@/assets/icon/package/ic_read_receipts.svg" alt="" />
              </div>
              <div class="mt-2 text-xl">Get Read Receipts</div>
              <div class="mt-2 text-sm">
                Level up everyone action you take on HeartLink
              </div>
            </div>
          </div></slide
        >
      </carousel>
    </div>

    <PopupGold
      v-if="isShowPackage"
      :nameGoldPackage="nameGoldPackage"
      @onClickHidePackage="onHidePackage"
    ></PopupGold>
  </div>
</template>

<script>
import PopupGold from "../default/popup-gold";
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "slider-gold",

  components: {
    PopupGold,
    Carousel,
    Slide,
  },
  data() {
    return {
      nameGoldPackage: "",
      isShowPackage: false,
    };
  },

  methods: {
    onClickShowPackages(val) {
      console.log(val);
      this.isShowPackage = true;
      this.nameGoldPackage = val;
      debugger;
    },

    onHidePackage(val) {
      debugger;
      this.isShowPackage = val;
    },
  },
};
</script>

<style lang="css">
.gold-package {
  border-radius: 10px;
  height: 27%;
}

.gold-package {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.gold-package::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.border-package {
  width: 100%;
  height: 200px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.VueCarousel-dot {
  padding: 5px !important;
  width: 8px !important;
  height: 8px !important;
}

.item-package {
  padding: 10px;
  width: 100%;
  color: white;
  height: 100%;
}

.dash-packages {
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

/**/
.platinum-bg {
  background: linear-gradient(
    321deg,
    rgba(20, 20, 20, 1) 10%,
    rgba(108, 108, 108, 1) 50%,
    rgba(20, 20, 20, 1) 90%
  );
}
.supper-like-bg {
  background: linear-gradient(
    319deg,
    rgba(0, 181, 126, 1) 20%,
    rgba(0, 255, 174, 1) 50%,
    rgba(0, 181, 126, 1) 80%
  );
}
.silver-bg {
  background: linear-gradient(
    321deg,
    rgba(161, 161, 170, 1) 30%,
    rgba(208, 208, 208, 1) 50%,
    rgba(161, 161, 170, 1) 70%
  );
}
.gold-bg {
  background: linear-gradient(
    321deg,
    rgba(252, 211, 77, 1) 30%,
    rgba(255, 237, 176, 1) 50%,
    rgba(252, 211, 77, 1) 70%
  );
}
.boost-bg {
  background: linear-gradient(
    321deg,
    rgba(168, 85, 247, 1) 19%,
    rgba(185, 143, 226, 1) 50%,
    rgba(168, 85, 247, 1) 79%
  );
}
.read-receipts-bg {
  background: linear-gradient(
    321deg,
    rgba(96, 165, 250, 1) 19%,
    rgba(177, 212, 255, 1) 50%,
    rgba(96, 165, 250, 1) 79%
  );
}
</style>
