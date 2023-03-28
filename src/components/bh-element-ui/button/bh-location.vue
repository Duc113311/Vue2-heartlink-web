<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center">
    <button
      @click="onClickLocations"
      class="btContinueCode active-button cursor-pointer w-full padding-button"
    >
      Allow Location
    </button>
  </div>
</template>

<script>
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

  computed: {
    isDefaultTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return "light-theme-button";
      } else {
        return "dark-theme-button ";
      }
    },
  },

  methods: {
    ...mapMutations(["setLocation"]),
    ...mapActions(["postInforUserProfile"]),

    async onHideWellcome(val) {
      this.isShowAvoid = val;
      this.$router.push({ path: "/home" });
    },

    async showPosition(position) {
      if (position.coords) {
        debugger;
        this.setLocation(position.coords);
      }

      debugger;

      this.$emit("onShowAvoid", true);
    },
    /**
     * Sự kiện click để tiếp tục
     */
    onClickLocations() {
      if (navigator.geolocation) {
        debugger;
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

.active-button {
  background-color: #fd5d65;
}
</style>
