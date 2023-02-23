<template>
  <div>
    <div class="mt-10 mb-6">
      <h2 class="text-2xl text-white">Show me gender</h2>
    </div>
    <div class="grid w-full text-white">
      <button
        class="bt-womans rounded-lg p-6 mb-4"
        id="bt-womans"
        value="1"
        @click="onShowGender(0)"
      >
        Woman
      </button>
      <button
        class="bt-mans rounded-lg p-6 mb-4"
        id="bt-mans"
        value="2"
        @click="onShowMeGender(1)"
      >
        Man
      </button>
      <button
        class="bt-everyone rounded-lg p-6"
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

      this.showMeGender = val;
      this.setShowGender(this.showMeGender);
      if (this.showMeGender === 0) {
        document.querySelector(".bt-womans").style.border = "2px solid red";
        document.querySelector(".bt-mans").style.border = "2px solid white";
        document.querySelector(".bt-everyone").style.border = "2px solid white";
      }
      if (this.showMeGender === 1) {
        document.querySelector(".bt-mans").style.border = "2px solid red";
        document.querySelector(".bt-womans").style.border = "2px solid white";
        document.querySelector(".bt-everyone").style.border = "2px solid white";
      }
      if (this.showMeGender === 2) {
        document.querySelector(".bt-everyone").style.border = "2px solid red";
        document.querySelector(".bt-womans").style.border = "2px solid white";
        document.querySelector(".bt-mans").style.border = "2px solid white";
      }
      this.$emit("onStatusActive", true);
    },
  },

  mounted() {
    this.showMeGender = this.$store.state.userModule.user_profile.showMeGender;
    if (this.showMeGender === 0) {
      this.$emit("onStatusActive", true);
      document.querySelector(".bt-womans").style.border = "2px solid red";
    } else if (this.showMeGender === 1) {
      this.$emit("onStatusActive", true);
      document.querySelector(".bt-mans").style.border = "2px solid red";
    } else if (this.showMeGender === 2) {
      this.$emit("onStatusActive", true);
      document.querySelector(".bt-everyone").style.border = "2px solid red";
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
