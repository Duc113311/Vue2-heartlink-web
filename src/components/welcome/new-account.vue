<template>
  <div class="w-full h-full user-profile absolute top-0 left-0 z-40 p-8">
    <div class="text-2xl w-full h-10 flex items-center text-white">
      <i class="fas fa-times"></i>
    </div>
    <div class="p-2 mt-10">
      <div class="mb-36">
        <div class="flex justify-center">
          <img
            src="@/assets/image-dating/app_icon_512x512.png"
            width="100"
            height="100"
            alt=""
            srcset=""
          />
        </div>
        <div class="block text-center justify-center mt-3 text-white">
          <h2 class="text-2xl">Welcome to HeartLink</h2>
          <span class="text-base text-gray-400">
            Please follow our rules to have more fun and build a great community
            together
          </span>
        </div>
        <div class="mt-8 mb-6 text-white">
          <div class="flex mt-3">
            <div class="mr-4 text-xl">
              <i class="far fa-hand-point-right"></i>
            </div>
            <div>
              <h2 class="text-xl">Be Yourself</h2>
              <span class="overflow-hidden break-words text-base text-slate-500"
                >Make sure your photos, age and bio true to who you are</span
              >
            </div>
          </div>
          <div class="flex mt-3">
            <div class="mr-4 text-xl">
              <i class="far fa-hand-point-right"></i>
            </div>
            <div>
              <h2 class="text-xl">Stay Safe</h2>
              <span class="overflow-hidden break-words text-base text-slate-500"
                >Don't be too quick to give out personal information.
                <span class="decoration-solid"
                  >Date Safety guidelines</span
                ></span
              >
            </div>
          </div>
          <div class="flex mt-3">
            <div class="mr-4 text-xl">
              <i class="far fa-hand-point-right"></i>
            </div>
            <div>
              <h2 class="text-xl">Play It Cool</h2>
              <span class="overflow-hidden break-words text-base text-slate-500"
                >Respect others and treat them as you would like to be
                treated</span
              >
            </div>
          </div>
          <div class="flex mt-3">
            <div class="mr-4 text-xl">
              <i class="far fa-hand-point-right"></i>
            </div>
            <div>
              <h2 class="text-xl">Be Proactive</h2>
              <span class="overflow-hidden break-words text-base text-slate-500"
                >Alwways repory bad behaviour</span
              >
            </div>
          </div>
        </div>
      </div>
      <BhArge @onAgreeContinue="onAgreeContinue"></BhArge>
    </div>

    <QuitWelcome
      @onCancelQuit="onCancelQuit"
      :isShowQuitSing="isShowQuitSing"
    ></QuitWelcome>
  </div>
</template>

<script>
import QuitWelcome from "./quit-welcome";
import BhArge from "../bh-element-ui/button/bh-arge";
// import DialogQuitSingn from "./dialog-quit-singn";
export default {
  components: {
    QuitWelcome,
    BhArge,
    // DialogQuitSingn,
  },
  name: "new-account",

  data() {
    return {
      centerDialogVisible: false,
      isShowQuitSing: false,
    };
  },

  methods: {
    onCloseDialog() {
      debugger;
      this.isShowQuitSing = true;
    },

    onShowDialogQuit(value) {
      this.isShowQuitSing = value;
    },

    onCancelQuit() {
      this.isShowQuitSing = false;
    },

    onAgreeContinue() {
      debugger;
      this.$router.push({
        path: "create-user",
      });
    },
  },
};
</script>

<style lang="css">
.text-color {
  color: #737b91;
}
.user-profile {
  background-color: #232937;
}
</style>
