<template>
  <div class="home-page w-full h-full relative p-2">
    <div class="w-full h-full z-10">
      <Header></Header>

      <div class="w-full body-page-home relative">
        <FriendMatch></FriendMatch>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import FriendMatch from "../../../components/message/friend-match";
import Footer from "../../../components/layout/footer-home/footer";
import Header from "../../../components/layout/header-home/header";
export default {
  components: {
    FriendMatch,
    Footer,
    Header,
  },
  name: "dashboard-chat",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css">
.body-page-home {
  height: 78%;
}
</style>
