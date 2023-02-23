<template>
  <div class="w-full h-full">
    <ViewSwipe></ViewSwipe>

    <ActionDating></ActionDating>
  </div>
</template>

<script>
import ActionDating from "../../../components/home/btn-function/action-dating";
import ViewSwipe from "../../../components/home/swipe-tinder/view-swipe";
export default {
  components: {
    ActionDating,
    ViewSwipe,
  },
  name: "home-news",

  data() {
    return {};
  },
};
</script>

<style lang="css"></style>
