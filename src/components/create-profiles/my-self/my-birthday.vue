<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white">My birthday is</h2>
    </div>
    <div class="mt-6">
      <el-input
        class="birthdate mb-3 text-white"
        v-model="birthday"
        type="date"
        placeholder="dd/mm/yyyy"
        min="1977-01-01"
        max="2030-01-01"
        @blur="onChangeInput"
      />
      <span class="text-slate-500 mt-3">Your age will be public</span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "my-birthday",
  setup() {
    return;
  },
  data() {
    return {
      birthday: "",
    };
  },
  computed: {
    ...mapState(["user_profile"]),
  },
  methods: {
    ...mapMutations(["setFirstName"]),
    onChangeInput() {
      if (this.birthday !== "") {
        this.setFirstName(this.birthday);
        this.$emit("onStatusActive", true);
      } else {
        this.$emit("onStatusActive", false);
      }
    },
  },

  mounted() {
    this.birthday = this.$store.state.userModule.user_profile.birthday;
    if (this.birthday !== "") {
      this.$emit("onStatusActive", true);
    } else {
      this.$emit("onStatusActive", false);
    }
  },
};
</script>

<style lang="css">
.birthdate .el-input__inner {
  background-color: #696a7d;
  --el-input-inner-height: 45px !important;
  font-size: larger !important;
  padding: 10px;
  color: white;
}
</style>
