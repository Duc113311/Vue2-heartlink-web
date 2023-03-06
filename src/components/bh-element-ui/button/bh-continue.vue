<template>
  <div class="w-full pl-10 pr-10 flex justify-center items-center pb-10 h-full">
    <div class="w-full">
      <div
        v-show="isShowProfile"
        class="flex items-center w-full justify-center p-3"
      >
        <div class="flex justify-center items-center">
          <div
            :class="isShowMy ? 'not-show' : 'showed'"
            @click="onClickChosse(true)"
          >
            <div class="bg-white flex justify-center bg-checked">
              <i class="fa-solid fa-circle-check w-8 h-8"></i>
            </div>
          </div>
          <div
            :class="isNotShowMy ? 'showed' : 'not-show'"
            @click="onClickChosse(false)"
          >
            <div class="flex justify-center">
              <i class="fa-regular fa-circle w-8 h-8"></i>
            </div>
          </div>
        </div>
        <div class="ml-3 text-lg">Show my {{ showName }} on my profile</div>
      </div>
      <button
        :loading="isShowLoading"
        @click="onClickContinues"
        v-bind:class="[isActiveContinue ? 'active-button' : isDefaultTheme]"
        class="btContinueCode cursor-pointer w-full padding-button"
        :disabled="!isActiveContinue"
        ref="continue"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "bt-continue",
  props: ["isLoading", "isActives", "statusProfile"],
  data() {
    return {
      isNumber: 0,
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

    isShowMy() {
      debugger;
      return this.$store.state.commonModule.isShowMyProfile;
    },

    isNotShowMy() {
      debugger;
      return this.$store.state.commonModule.isNotShowProfie;
    },

    isShowLoading() {
      debugger;
      return this.isLoading;
    },
    isActiveContinue() {
      debugger;
      return this.isActives;
    },

    isShowProfile() {
      debugger;
      return this.statusProfile.showCheckbox;
    },

    showName() {
      return this.statusProfile.showName;
    },
  },

  methods: {
    ...mapMutations(["setShowProfileCreate"]),
    /**
     * Sự kiện click để tiếp tục
     */
    onClickContinues() {
      debugger;
      this.$emit("onChangeContinue", true);
    },

    onClickChosse(val) {
      console.log(val);

      if (val === true) {
        debugger;

        this.setShowProfileCreate({
          isShowProfile: true,
          isNotShowProfile: true,
        });
      } else {
        debugger;

        this.setShowProfileCreate({
          isShowProfile: false,
          isNotShowProfile: false,
        });
      }
    },
  },

  mounted() {
    debugger;
  },
};
</script>

<style lang="css">
.color-button {
  border-radius: 10px !important;
  padding: 14px 20px !important;
  cursor: pointer;
}

.active-button {
  background-color: #fd5d65;
}

.el-button.is-loading:before {
  background-color: rgba(0, 0, 0, 0) !important;
}

.not-show {
  display: none;
}

.showed {
  display: block;
}
</style>
