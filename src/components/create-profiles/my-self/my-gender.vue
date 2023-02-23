<template>
  <div>
    <div class="mt-10 mb-6">
      <h2 class="text-2xl text-white">Show me</h2>
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
        @click="onShowGender(1)"
      >
        Man
      </button>
      <button
        class="bt-everyone rounded-lg p-6"
        id="bt-everyone"
        value="3"
        @click="onShowGender(2)"
      >
        Other genders
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "my-gender",
  setup() {
    return;
  },
  data() {
    return {
      genders: 3,
    };
  },
  computed: {
    ...mapState(["user_profile"]),
  },
  methods: {
    ...mapMutations(["setGender"]),

    onShowGender(val) {
      console.log(val);

      this.genders = val;
      this.setGender(this.genders);
      if (this.genders === 0) {
        document.querySelector(".bt-womans").style.border = "2px solid red";
        document.querySelector(".bt-mans").style.border = "2px solid white";
        document.querySelector(".bt-everyone").style.border = "2px solid white";
      }
      if (this.genders === 1) {
        document.querySelector(".bt-mans").style.border = "2px solid red";
        document.querySelector(".bt-womans").style.border = "2px solid white";
        document.querySelector(".bt-everyone").style.border = "2px solid white";
      }
      if (this.genders === 2) {
        document.querySelector(".bt-everyone").style.border = "2px solid red";
        document.querySelector(".bt-womans").style.border = "2px solid white";
        document.querySelector(".bt-mans").style.border = "2px solid white";
      }
      this.$emit("onStatusActive", true);
    },
  },

  mounted() {
    this.genders = this.$store.state.userModule.user_profile.gender;
    if (this.genders === 0) {
      this.$emit("onStatusActive", true);
      document.querySelector(".bt-womans").style.border = "2px solid red";
    } else if (this.genders === 1) {
      this.$emit("onStatusActive", true);
      document.querySelector(".bt-mans").style.border = "2px solid red";
    } else if (this.genders === 2) {
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
