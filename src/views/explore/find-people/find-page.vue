<template>
  <div class="home-pages w-full h-full">
    <div
      class="photo-verified w-full bg-no-repeat bg-cover h-full"
      :style="paramImage"
    ></div>
  </div>
</template>

<script>
export default {
  name: "find-page",

  data() {
    return {
      photoVerified: {
        backgroundImage: `url(${require("@/assets/image-dating/bg_verified_photo.png")})`,
      },
    };
  },

  computed: {
    paramImage() {
      debugger;

      return {
        backgroundImage: `url(${require("@/assets/image-dating/bg_verified_photo.png")})`,
      };
    },
  },

  methods: {},

  mounted() {
    debugger;
  },
};
</script>

<style lang="css"></style>
