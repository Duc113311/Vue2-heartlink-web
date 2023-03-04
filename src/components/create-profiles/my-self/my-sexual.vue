<template>
  <div>
    <div class="mt-10">
      <h2 class="padding-title">My Sexual oritenation is</h2>
      <span
        class="padding-describe"
        v-bind:class="[
          isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
        ]"
        >Select up to 3</span
      >
    </div>
    <div class="w-full overflow-scroll height-item pb-8">
      <div class="grid select-sexual mt-6 gap-4">
        <div
          v-for="(el, index) in listDataSexuals"
          :key="el + index"
          class="padding-input-option dark-theme-check"
          :class="isBorderActive ? 'border-active' : 'not-border'"
        >
          <div class="flex content-center items-center">
            <div class="flex justify-center items-center">
              <div
                :class="isChecked ? 'checkeds' : 'not-check'"
                :id="'check' + index"
                @click="onClickChosse(true, index)"
              >
                <div class="bg-white flex justify-center bg-checked">
                  <i class="fa-solid fa-circle-check w-8 h-8"></i>
                </div>
              </div>
              <div
                :class="isNotChecked ? 'not-check' : 'checkeds'"
                :id="'check' + index"
                @click="onClickChosse(false, index)"
              >
                <div class="flex justify-center">
                  <i class="fa-regular fa-circle w-8 h-8"></i>
                </div>
              </div>
            </div>
            <!-- <input
              class="w-6 h-6 mr-5 sexual"
              type="checkbox"
              :id="index"
              value="Straight"
              @click="checkFluency(index)"
            /> -->
            <label class="text-base ml-3" for="html">{{ el }}</label>
          </div>
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
      isChecked: false,
      isNotChecked: false,
      isBorderActive: false,
    };
  },

  computed: {
    ...mapState(["user_profile"]),
    listDataSexuals() {
      return this.$store.state.userModule.listSexuals;
    },

    isDarkTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return false;
      } else {
        return true;
      }
    },
  },

  methods: {
    ...mapMutations(["setSexuals"]),
    ...mapActions(["getListDataSexuals"]),

    onClickChosse(val, indexValue) {
      debugger;
      const listDarks = document.getElementsByClassName("dark-theme-check");
      const chekcList = document.getElementsByClassName("checkeds");
      console.log(chekcList);
      if (val) {
        this.isChecked = false;
        this.isNotChecked = false;
        this.isBorderActive = false;
        for (let index = 0; index < listDarks.length; index++) {
          if (indexValue === index) {
            const element = listDarks[indexValue];
            element.classList.add(this.isChecked);
          } else {
            const element = listDarks[index];
            element.classList.add(this.isNotChecked);
          }
        }
      } else {
        this.isChecked = true;
        this.isNotChecked = true;
        this.isBorderActive = true;
        for (let index = 0; index < listDarks.length; index++) {
          if (indexValue === index) {
            const element = listDarks[indexValue];
            element.classList.add(this.isNotChecked);
          } else {
            const element = listDarks[index];
            element.classList.add(this.isChecked);
          }
        }
      }
    },
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
      } else {
        this.$emit("onStatusActive", false);
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

.height-item {
  height: 527px;
}

.height-item {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
}

.height-item::-webkit-scrollbar {
  display: none;
}

.not-check {
  display: none;
}

.checkeds {
  display: block;
}

.fa-circle-check {
  color: #fd5d65;
}

.bg-checked {
  background-color: white;
  border-radius: 20px;
}

.fa-circle {
  color: #b8bbca;
}

.border-active {
  border: 1.5px solid #fd5d65;
}

.not-border {
  border: none;
}
</style>
