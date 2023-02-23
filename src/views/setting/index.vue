<template>
  <div class="w-full h-full relative setting-pages">
    <div class="height-setting p-3">
      <!--  -->
      <div class="w-full gold-package overflow-scroll">
        <div class="w-full flex justify-center text-center mb-2">
          <div class="item-package bg-slate-700">
            <div class="flex justify-center">
              <img src="@/assets/icon/package/ic_platium_package.svg" alt="" />
            </div>
            <div class="mt-2">Platinum package</div>
            <div class="mt-2">
              Level up everyone action you take on HeartLink
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center text-center mb-2">
          <div class="item-package bg-amber-300">
            <div class="flex justify-center">
              <img src="@/assets/icon/package/ic_gold_package.svg" alt="" />
            </div>
            <div class="mt-2">Gold package</div>
            <div class="mt-2">
              Level up everyone action you take on HeartLink
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center text-center mb-2">
          <div class="item-package bg-zinc-400">
            <div class="flex justify-center">
              <img src="@/assets/icon/package/ic_silver_package.svg" alt="" />
            </div>
            <div class="mt-2">Silver package</div>
            <div class="mt-2">
              Level up everyone action you take on HeartLink
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center text-center mb-2">
          <div class="item-package">
            <div class="flex justify-center">
              <img src="@/assets/icon/package/ic_super_like.svg" alt="" />
            </div>
            <div class="mt-2">Get Supper Like</div>
            <div class="mt-2">
              Level up everyone action you take on HeartLink
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center text-center mb-2">
          <div class="item-package">
            <div class="flex justify-center">
              <img src="@/assets/icon/package/ic_boost.svg" alt="" />
            </div>
            <div class="mt-2">Get Boost Profile</div>
            <div class="mt-2">
              Level up everyone action you take on HeartLink
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center text-center mb-2">
          <div class="item-package">
            <div class="flex justify-center">
              <img src="@/assets/icon/package/ic_read_receipts.svg" alt="" />
            </div>
            <div class="mt-2">Get Read Receipts</div>
            <div class="mt-2">
              Level up everyone action you take on HeartLink
            </div>
          </div>
        </div>
      </div>
      <div class="w-full image-profiles">
        <div class="relative flex justify-center text-center">
          <div class="border-avatar">
            <div class="image-avatar"></div>
          </div>
          <div class="absolute bottom-0 complete">100% complete</div>
        </div>
      </div>
      <div class="flex justify-center text-2xl text-white">
        Alex Ng, 25
        <img src="@/assets/icon/ic_verified_enable.svg" width="30" alt="" />
      </div>
      <div class="w-full option-setting flex items-center text-white">
        <div class="item-setting">
          <div class="flex justify-center">
            <img src="@/assets/icon/bt_settings.svg" alt="" />
          </div>
          <div class="mt-2 text-base">SETTINGS</div>
        </div>
        <div class="item-setting">
          <div class="flex justify-center">
            <img src="@/assets/icon/bt_edit_profile.svg" alt="" />
          </div>
          <div class="mt-2 text-base">EDIT PROFILE</div>
        </div>
        <div class="item-setting">
          <div class="flex justify-center">
            <img src="@/assets/icon/bt_safety.svg" alt="" />
          </div>
          <div class="mt-2 text-base">SAFETY</div>
        </div>
      </div>
    </div>

    <div class="w-full">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../components/layout/footer-home/footer";
export default {
  components: { Footer },
  name: "setting-page",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css">
.setting-pages {
  background-color: #382e41;
}

.height-setting {
  height: 90%;
}

.gold-package {
  border-radius: 10px;
  height: 43%;
}
.image-profiles {
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.border-avatar {
  width: 260px;
  height: 260px;
  overflow: hidden;
  padding: 10px;
  border: 5px solid #fa5c60;
  display: flex;
  justify-content: center;
  border-radius: 144px;
}

.option-setting {
  height: calc(100% - 80%);
  justify-content: center;
  gap: 60px;
  align-items: center;
  text-align: center;
}

.image-avatar {
  background-image: url("@/assets/image-dating/0659_photo-1-163186806531842640671.jpg");
  background-position: center;
  background-size: cover;
  width: 240px;
  height: 231px;
  border-radius: 140px;
}

.complete {
  width: 70%;
  text-align: center;
  padding: 10px;
  background-color: #fa5c60;
  border-radius: 10px;
  color: #ffffff;
}

.item-package {
  padding: 20px;
  width: 404px;
  border-radius: 10px;
  color: white;
  height: 170px;
}

.gold-package {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.gold-package::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
</style>
