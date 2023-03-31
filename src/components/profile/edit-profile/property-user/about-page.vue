<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-full">
      <div class="w-full flex justify-between p-3 bh-title">
        <div>ABOUT ME</div>
        <div v-show="!completeAbout">+22%</div>
      </div>
      <div>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="About me - maximise 500 words"
          v-model="valueAbout"
          @input="onInputAbout()"
          @change="onChangeSaveAbout()"
        >
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "about-page",

  data() {
    return {};
  },

  computed: {
    valueAbout: {
      // getter
      get() {
        const about =
          this.$store.state.userModule.user_profile?.profiles?.about;

        return about ? about : this.valDefaultAbout;
      },
      // setter
      set(newValue) {
        // Note: we are using destructuring assignment syntax here.
        this.valDefaultAbout = newValue;
      },
    },

    completeAbout: {},
  },

  methods: {
    ...mapMutations(["setAbout"]),

    /**
     * Check giá trị của valueAbout để show %
     */
    onInputAbout() {
      if (this.valueAbout === "") {
        this.completeAbout = false;
      } else {
        this.completeAbout = true;
      }
    },

    /**
     * Gán giá trị cuối cùng valueAbout cho user_profile
     */
    onChangeSaveAbout() {
      this.setAbout(this.valueAbout);
    },
  },
};
</script>

<style></style>
