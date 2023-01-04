<template>
  <div
    class="w-full absolute bottom-0 right-0 footer-body flex justify-center content-center text-center cursor-pointer"
  >
    <div>
      <img
        class="w-10"
        src="@/assets/icon/ic_home_tab.svg"
        @click="onClickHome()"
      />
    </div>
    <div>
      <img
        class="w-10"
        src="@/assets/icon/ic_explore_tab.svg"
        @click="onClickExplore()"
      />
    </div>
    <div>
      <img
        class="w-10"
        src="@/assets/icon/ic_message_tab.svg"
        @click="onClickMessage()"
      />
    </div>
    <div>
      <img
        class="w-10"
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
      this.$router.push({ path: "/home" });
    },

    onClickExplore() {
      debugger;
      this.$router.push({ path: "/explore" });
    },

    onClickMessage() {},

    onClickProfile() {},
  },
};
</script>

<style lang="css">
.footer-body {
  height: calc(100% - 91%);
  justify-content: center;
  gap: 80px;
  align-items: center;
  border-top: 1px solid #373e50;
  margin-top: 10px;
}
</style>
