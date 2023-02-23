<template>
  <div>
    <div class="btns">
      <img src="@/assets/image-tinder/rewind.png" @click="decide('rewind')" />
      <img src="@/assets/image-tinder/nope.png" @click="decide('nope')" />
      <img
        src="@/assets/image-tinder/super-like.png"
        @click="decide('super')"
      />
      <img src="@/assets/image-tinder/like.png" @click="decide('like')" />
      <img src="@/assets/image-tinder/help.png" @click="decide('help')" />
    </div>
  </div>
</template>

<script>
export default {
  name: "action-dating",

  data() {
    return {};
  },

  methods: {
    /**
     * Xử lý các action màn Home
     * @param {*} choice
     */
    decide(choice) {
      debugger;
      console.log(choice);
    },
  },
};
</script>
