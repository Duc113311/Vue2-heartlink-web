<template>
  <div>
    <div class="mt-10">
      <h2 class="padding-title">Show me gender</h2>
    </div>
    <div class="grid w-full">
      <button
        class="padding-input-option dark-theme-option p-6 mb-4"
        id="bt-womans"
        value="1"
        @click="onShowMeGender(0)"
      >
        Woman
      </button>
      <button
        class="padding-input-option dark-theme-option p-6 mb-4"
        id="bt-mans"
        value="2"
        @click="onShowMeGender(1)"
      >
        Man
      </button>
      <button
        class="padding-input-option dark-theme-option p-6"
        id="bt-everyone"
        value="3"
        @click="onShowMeGender(2)"
      >
        Everyone
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "my-show-gender",
  setup() {
    return;
  },
  data() {
    return {
      showMeGender: 3,
    };
  },
  computed: {
    ...mapState(["user_profile"]),
  },
  methods: {
    ...mapMutations(["setShowGender"]),

    onShowMeGender(val) {
      console.log(val);
      debugger;
      this.showMeGender = val;
      this.setShowGender(this.showMeGender);
      if (this.showMeGender === 0) {
        document.getElementById("bt-womans").style.border = "2px solid #ee646a";
        document.getElementById("bt-mans").style.border = "2px solid white";
        document.getElementById("bt-everyone").style.border = "2px solid white";
      }
      if (this.showMeGender === 1) {
        document.getElementById("bt-mans").style.border = "2px solid #ee646a";
        document.getElementById("bt-womans").style.border = "2px solid white";
        document.getElementById("bt-everyone").style.border = "2px solid white";
      }
      if (this.showMeGender === 2) {
        document.getElementById("bt-everyone").style.border =
          "2px solid #ee646a";
        document.getElementById("bt-womans").style.border = "2px solid white";
        document.getElementById("bt-mans").style.border = "2px solid white";
      }
      this.$emit("onStatusActive", true);
    },
  },

  mounted() {
    this.showMeGender = this.$store.state.userModule.user_profile.showMeGender;
    if (this.showMeGender === 0) {
      this.$emit("onStatusActive", true);
      document.getElementById("bt-womans").style.border = "2px solid #ee646a";
    } else if (this.showMeGender === 1) {
      this.$emit("onStatusActive", true);
      document.getElementById("bt-mans").style.border = "2px solid #ee646a";
    } else if (this.showMeGender === 2) {
      this.$emit("onStatusActive", true);
      document.getElementById("bt-everyone").style.border = "2px solid #ee646a";
    } else {
      this.$emit("onStatusActive", false);
    }
  },
};
</script>

<style lang="css">
.el-button + .el-button {
  margin-left: 0px !important;
}
.rounded-lg {
  border: 2px solid white;
}
</style>
