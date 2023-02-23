<template>
  <div>
    <div class="mt-10">
      <h2 class="text-2xl text-white mb-2">My Sexual oritenation is</h2>
      <span class="text-slate-500">Select up to 3</span>
    </div>
    <div class="grid select-sexual mt-6 gap-4">
      <div
        v-for="(el, index) in listDataSexuals"
        :key="el + index"
        class="w-full rounded-xl p-4 bg-sexual"
      >
        <div class="flex content-center">
          <input
            class="w-6 h-6 mr-5 sexual"
            type="checkbox"
            :id="index"
            value="Straight"
            @click="checkFluency(index)"
          />
          <label class="text-base text-white" for="html">{{ el }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "my-sexual",
  setup() {
    return;
  },

  data() {
    return {
      sexuals: [],
    };
  },

  computed: {
    ...mapState(["user_profile"]),
    listDataSexuals() {
      return this.$store.state.userModule.listSexuals;
    },
  },

  methods: {
    ...mapMutations(["setSexuals"]),
    ...mapActions(["getListDataSexuals"]),

    /**
     * Check option
     * @param {*} val
     */
    checkFluency(val) {
      this.setSexuals(val);
      debugger;
      const lengthSexual =
        this.$store.state.userModule.user_profile.sexuals.length;

      if (this.$store.state.userModule.isCheckBox) {
        document.getElementById(val).checked = false;
      }
      if (lengthSexual === 3) {
        this.$emit("onStatusActive", true);
      }
      console.log(lengthSexual);
    },
  },

  async created() {
    debugger;
    await this.getListDataSexuals({
      entityName: "sexuals",
      entityId: "en",
    });
  },
  mounted() {
    const lengthSexual =
      this.$store.state.userModule.user_profile.sexuals.length;
    const dataSexuals = this.$store.state.userModule.user_profile.sexuals;
    for (let index = 0; index < dataSexuals.length; index++) {
      const element = dataSexuals[index];
      document.getElementById(element).checked = true;
    }
    if (lengthSexual < 3) {
      this.$emit("onStatusActive", false);
    } else {
      this.$emit("onStatusActive", true);
    }
  },
};
</script>

<style lang="css">
.bg-sexual {
  background-color: #05101b47;
}
</style>
