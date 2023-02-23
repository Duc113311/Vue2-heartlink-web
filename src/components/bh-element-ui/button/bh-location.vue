<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <el-button
      type="danger"
      :loading="isLoading"
      id="btContinueCode"
      class="text-base btContinueCode cursor-pointer text-white w-full rounded-lg p-6 color-button"
      @click="onClickContinues"
      >Allow Location</el-button
    >
  </div>
</template>

<script>
import TokenApps from "@/middleware/application-storage";
import { mapMutations, mapActions } from "vuex";

export default {
  name: "bt-location",
  data() {
    return {
      isLoading: false,
      isNumber: 0,
      latitude: "",
      longitude: "",
      isShowAvoid: false,
    };
  },

  computed: {},

  methods: {
    ...mapMutations(["setLocation"]),
    ...mapActions(["postInforUserProfile"]),

    async onHideWellcome(val) {
      this.isShowAvoid = val;
      this.$router.push({ path: "/home" });
    },

    async showPosition(position) {
      if (position.coords) {
        this.setLocation(position.coords);
      }
      debugger;

      const userId = TokenApps.getAccessToken("userId");
      const providerId = TokenApps.getProviderId("providerId");
      const dataUser = this.$store.state.userModule.user_profile;
      dataUser.providerId = providerId;
      dataUser.userId = userId;

      console.log(dataUser);
      // await this.postInforUserProfile(dataUser);
      this.$emit("onShowAvoid", true);
    },
    /**
     * Sự kiện click để tiếp tục
     */
    onClickContinues() {
      debugger;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      }
    },
  },
};
</script>

<style lang="css">
.color-button {
  background-color: #fd5d65;
  border: 1px solid #fd5d65 !important;
}

.color-button:hover,
.color-button:active,
.color-button:focus {
  background-color: #fd5d65;
}
</style>
