<template>
  <div class="detail-page w-full h-full relative">
    <div class="bg-image-detail h-2/4">
      <div class="avatar w-full h-2/4 absolute rounded-lg">
        <div
          class="pic z-8 rounded-lg"
          :style="{
            'background-image': `url(https://cn.bing.com//th?id=OHR.${idImage}_UHD.jpg&pid=hp&w=720&h=1280&rs=1&c=4&r=0)`,
          }"
        />
      </div>
      <div class="icon-close-infor">
        <img src="@/assets/icon/bt_close_infor.svg" alt="" srcset="" />
      </div>
    </div>
    <div class="h-2/4 w-full">
      <div class="w-full p-2">
        <div class="flex bh-margin-title">
          <h3 class="text-2xl">Ngoc Tring<span>, 25</span></h3>
          <img src="@/assets/icon/ic_infor.svg" alt="" />
        </div>
        <div class="text-xl bh-margin-description">Tell me about yourself</div>
        <div class="flex bh-margin-description">
          <img src="@/assets/icon/ic_location.svg" alt="" />
          <span>2 km away</span>
        </div>
      </div>
      <BhHorizontalLine></BhHorizontalLine>
      <!-- About me -->
      <div class="p-2">
        <div class="title title-description">About me</div>
        <div class="text-description">
          Gets hungry easily Sleeps late and replies late
        </div>

        <div class="w-full bh-margin-description">
          <div class="text-option" v-for="item in sexuals" :key="item">
            {{ item }}
          </div>
        </div>
      </div>
      <!-- Interests -->
      <BhHorizontalLine></BhHorizontalLine>

      <div class="p-2">
        <div class="title title-description">Interests</div>

        <div class="w-full bh-margin-description">
          <div class="text-option" v-for="item in interests" :key="item">
            {{ item }}
          </div>
        </div>
      </div>
      <BhHorizontalLine></BhHorizontalLine>

      <div class="w-full p-2">
        <div class="title title-description">My Anthem</div>
        <div class="flex w-full">
          <div class="w-2/3 bh-margin-description">
            All too well (Taylor's Version)
          </div>
          <div class="w-1/3"></div>
        </div>
      </div>
      <BhHorizontalLine></BhHorizontalLine>
      <div class="items-center bh-margin-title">
        <div class="flex justify-center">
          <img src="@/assets/icon/ic_uncheck.svg" alt="" />
          <div class="text-description">SHARE NGOC TRINH'S PROFILE</div>
        </div>
        <div class="flex justify-center title-description">
          SEE WHAT A FRIEND THINKS
        </div>
      </div>
      <div class="flex w-full justify-center items-center">
        <img
          src="@/assets/icon/ic_report.svg"
          class="mr-2"
          width="30"
          alt=""
          srcset=""
        />
        <div>REPORT NGOC TRINH</div>
      </div>
      <div class="w-full h-1/4 flex justify-center"></div>
    </div>
  </div>
</template>

<script>
import BhHorizontalLine from "../../bh-element-ui/input/bh-horizontal-line";
export default {
  components: { BhHorizontalLine },
  name: "detail-profile",

  data() {
    return {
      sexuals: [
        "noe-smoker",
        "aquarius",
        "pet-free",
        "gay",
        "questioning",
        "asexual",
      ],

      interests: [
        "Art Galleries",
        "Astrology",
        "Band",
        "Board Games",
        "Body Step",
        "Boxing",
      ],
    };
  },

  props: ["idImage"],
};
</script>

<style lang="css">
.detail-page {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
}

.detail-page::-webkit-scrollbar {
  display: none;
}

.mb-descript {
  border-top: 2px solid #353b4b;
}
</style>
