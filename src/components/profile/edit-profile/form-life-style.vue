<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full"></div>
    <div
      class="w-full h-full flex justify-center items-center absolute top-0 left-0"
    >
      <div class="rounded-lg items-center w-form-life relative">
        <div
          class="w-full justify-between flex items-center pl-5 pr-5 h-title-close"
        >
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div @click="onChangeSaveLife()">
            <i class="fa-solid fa-check size-icon-default"></i>
          </div>
        </div>
        <div class="w-full flex justify-center items-center h-form-data">
          <div
            class="w-full items-center h-full height-scroll overflow-scroll pl-4 pr-4"
          >
            <!-- Title -->
            <div class="w-full">
              <div class="padding-title">Basic information</div>
              <div
                class="padding-describe"
                v-bind:class="[
                  isDarkTheme ? 'dark-theme-describe' : 'dark-theme-describe',
                ]"
              >
                Add more info so people can see your amazing pictures
              </div>
            </div>
            <!-- Cung hoàng đạo -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="padding-describe">What is your zodiac sign?</div>
              </div>
              <div class="">
                <button
                  v-for="(item, index) in listZodiacParams"
                  :key="index"
                  :id="index"
                  class="oftion-interests mr-3 mb-3 p-3 text-white zodiac"
                  @click="onChoseZodiac(index)"
                >
                  {{ item }}
                </button>
              </div>
            </div>
            <!-- Trình độ học vấn -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="padding-describe">Your education level?</div>
              </div>
              <div class="">
                <button
                  v-for="(item, index) in listEducationParams"
                  :key="index"
                  :id="index"
                  class="oftion-interests mr-3 mb-3 p-3 text-white education"
                  @click="onChoseEducation(index)"
                >
                  {{ item }}
                </button>
              </div>
            </div>
            <!-- Trạng thái hôn nhân -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="padding-describe">
                  What is your personality type?
                </div>
              </div>
              <div class="">
                <button
                  v-for="(item, index) in listPersonalityParams"
                  :key="index"
                  :id="index"
                  class="oftion-interests mr-3 mb-3 p-3 text-white personality"
                  @click="onChosePersonality(index)"
                >
                  {{ item }}
                </button>
              </div>
            </div>
            <!-- Tính cách -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="padding-describe">
                  Do you want to have children?
                </div>
              </div>
              <div class="">
                <button
                  v-for="(item, index) in listChildrenParams"
                  :key="index"
                  :id="index"
                  class="oftion-interests mr-3 mb-3 p-3 text-white children"
                  @click="onChoseChildren(index)"
                >
                  {{ item }}
                </button>
              </div>
            </div>
            <!-- Phong cách  -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="padding-describe">Do you smoke?</div>
              </div>
              <div class="">
                <button
                  v-for="(item, index) in listSmokeParams"
                  :key="index"
                  :id="index"
                  class="oftion-interests mr-3 mb-3 p-3 text-white smoke"
                  @click="onChoseSmoke(index)"
                >
                  {{ item }}
                </button>
              </div>
            </div>
            <!-- Thích điều j -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="padding-describe">What is your favorite pet?</div>
              </div>
              <div>
                <button
                  v-for="(item, index) in listFavoritePetParams"
                  :key="index"
                  :id="index"
                  class="oftion-interests mr-3 mb-3 p-3 text-white pets"
                  @click="onChoseFavoritePets(index)"
                >
                  {{ item }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "form-life-style",

  data() {
    return {
      listDatas: [
        "Virod",
        "Red",
        "Dog",
        "age",
        "Height School",
        "Height School",
        "reading",
        "Listing",
      ],
    };
  },

  computed: {
    isDarkTheme() {
      const theme = localStorage.getItem("user-theme");

      if (theme === "light-theme") {
        return false;
      } else {
        return true;
      }
    },

    listZodiacParams() {
      return this.$store.state.userModule.listZodiacs;
    },
    listEducationParams() {
      return this.$store.state.userModule.listEducations;
    },
    listPersonalityParams() {
      return this.$store.state.userModule.listPersonalitys;
    },
    listChildrenParams() {
      return this.$store.state.userModule.listChildrens;
    },
    listSmokeParams() {
      return this.$store.state.userModule.listSmokes;
    },
    listFavoritePetParams() {
      return this.$store.state.userModule.listPets;
    },
  },

  methods: {
    ...mapMutations(["setLifeStyle"]),
    onChoseZodiac(val) {
      // const keyZodiacParam = this.$store.state.userModule.keyZodiac;

      // if (keyZodiacParam !== "") {

      // } else {
      //   document.getElementById(val).classList.remove("bg-active");

      // }
      debugger;
      const documentZodiacs = document.getElementsByClassName("zodiac");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (val === element.id) {
          const data = {
            nameZodiac: element.innerText,
          };
          this.setLifeStyle(data);
          element.classList.add("bg-active");
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseEducation(val) {
      debugger;
      const documentZodiacs = document.getElementsByClassName("education");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (val === element.id) {
          const data = {
            nameZodiac: element.innerText,
          };
          this.setLifeStyle(data);
          element.classList.add("bg-active");
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChosePersonality(val) {
      const documentZodiacs = document.getElementsByClassName("personality");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (val === element.id) {
          const data = {
            nameZodiac: element.innerText,
          };
          this.setLifeStyle(data);
          element.classList.add("bg-active");
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseSmoke(val) {
      const documentZodiacs = document.getElementsByClassName("smoke");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (val === element.id) {
          const data = {
            nameZodiac: element.innerText,
          };
          this.setLifeStyle(data);
          element.classList.add("bg-active");
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseFavoritePets(val) {
      const documentZodiacs = document.getElementsByClassName("pets");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (val === element.id) {
          const data = {
            nameZodiac: element.innerText,
          };
          this.setLifeStyle(data);
          element.classList.add("bg-active");
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseChildren() {},

    onChangeCancel() {
      this.$emit("onClickCancelLife", false);
    },

    onChangeSaveLife() {
      this.$emit("onClickSaveLife", false);
    },
  },
};
</script>

<style lang="css">
.bg-active {
  border: 1.5px solid #f65a62 !important;
  color: #f65a62;
}

.oftion-interests {
  border: 1.5px solid white;
  border-radius: 8px;
}
</style>
