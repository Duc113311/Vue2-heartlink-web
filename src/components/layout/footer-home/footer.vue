<template>
  <div
    class="w-full bottom-0 right-0 footer-body flex justify-center content-center text-center cursor-pointer"
  >
    <div>
      <img
        class="w-9"
        src="@/assets/icon/ic_home_tab.svg"
        @click="onClickHome()"
      />
    </div>
    <div>
      <img
        class="w-9"
        src="@/assets/icon/ic_explore_tab.svg"
        @click="onClickExplore()"
      />
    </div>
    <div>
      <img
        class="w-9"
        src="@/assets/icon/ic_hand.svg"
        @click="onClickLikeTopic()"
      />
    </div>
    <div>
      <img
        class="w-9"
        src="@/assets/icon/ic_message_tab.svg"
        @click="onClickMessage()"
      />
    </div>
    <div>
      <img
        class="w-9"
        src="@/assets/icon/ic_profile_tab.svg"
        @click="onClickProfile()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-page",

  setup() {
    return;
  },

  data() {
    return {};
  },

  methods: {
    onClickHome() {
      this.$router.push({ path: "/dash-board" });
    },

    onClickExplore() {
      debugger;
      this.$router.push({ path: "/explore-new" });
    },

    onClickLikeTopic() {
      this.$router.push({
        path: "/like-topic-news",
      });
    },

    onClickMessage() {
      this.$router.push({ path: "/message-new" });
    },

    onClickProfile() {
      this.$router.push({ path: "/setting" });
    },
  },
};
</script>

<style lang="css">
.footer-body {
  height: calc(100% - 90%);
  justify-content: center;
  gap: 60px;
  align-items: center;
  border-top: 1px solid #373e50;
  margin-top: 10px;
  position: absolute;
  bottom: 0;
}
</style>
