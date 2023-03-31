<template>
  <div class="w-full h-full">
    <div class="v-modal-bg w-full h-full"></div>
    <div
      class="w-full h-full flex justify-center items-center absolute top-0 left-0"
    >
      <div class="rounded-lg items-center w-form-life relative p-5">
        <div class="w-full justify-between flex items-center h-title-close">
          <div @click="onChangeCancel()">
            <i class="fa-solid fa-xmark size-icon-default"></i>
          </div>
          <div @click="onChangeSaveLife()">
            <i class="fa-solid fa-check size-icon-default"></i>
          </div>
        </div>
        <div class="w-full flex justify-center items-center h-form-data">
          <div class="w-full items-center h-full height-scroll overflow-scroll">
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
                  :id="item.code"
                  class="oftion-interests mr-3 mb-3 p-3 text-white zodiac"
                  @click="onChoseZodiac(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>

            <!-- Pest -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="padding-describe">What is your favorite pet?</div>
              </div>
              <div>
                <button
                  v-for="(item, index) in listFavoritePetParams"
                  :key="index"
                  :id="item.code"
                  class="oftion-interests mr-3 mb-3 p-3 text-white pets"
                  @click="onChoseFavoritePets(item)"
                >
                  {{ item.value }}
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
                  :id="item.code"
                  class="oftion-interests mr-3 mb-3 p-3 text-white education"
                  @click="onChoseEducation(item)"
                >
                  {{ item.value }}
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
                  :id="item.code"
                  class="oftion-interests mr-3 mb-3 p-3 text-white smoke"
                  @click="onChoseSmoke(item)"
                >
                  {{ item.value }}
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
                  :id="item.code"
                  class="oftion-interests mr-3 mb-3 p-3 text-white personality"
                  @click="onChosePersonality(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>
            <!-- Tính cách -->
            <div class="w-full">
              <div class="w-full flex items-center">
                <div class="padding-describe">Your personality type?</div>
              </div>
              <div class="">
                <button
                  v-for="(item, index) in listDietaryPreferenceParam"
                  :key="index"
                  :id="item.code"
                  class="oftion-interests mr-3 mb-3 p-3 text-white dietary-preferences"
                  @click="onChosePreferences(item)"
                >
                  {{ item.value }}
                </button>
              </div>
            </div>

            <!-- Thích điều j -->
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
      return this.$store.state.commonModule.listLifeStyle.zodiacs;
    },
    listEducationParams() {
      return this.$store.state.commonModule.listLifeStyle.educations;
    },
    listPersonalityParams() {
      return this.$store.state.commonModule.listLifeStyle.personalities;
    },
    listDietaryPreferenceParam() {
      return this.$store.state.commonModule.listLifeStyle.foodPreferences;
    },
    listSmokeParams() {
      return this.$store.state.commonModule.listLifeStyle.smokes;
    },
    listFavoritePetParams() {
      return this.$store.state.commonModule.listLifeStyle.pets;
    },
  },

  methods: {
    ...mapMutations([
      "setLifeStyle",
      "setZodiac",
      "setEducation",
      "setPersonality",
      "setSmoke",
      "setFavoritePets",
      "setPreferences",
    ]),
    onChoseZodiac(val) {
      debugger;

      const documentZodiacs = document.getElementsByClassName("zodiac");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (val.code === element.id) {
          this.setZodiac(val);

          element.classList.add("bg-active");
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseEducation(val) {
      const documentZodiacs = document.getElementsByClassName("education");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (val.code === element.id) {
          this.setEducation(val);
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
        if (val.code === element.id) {
          this.setPersonality(val);
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
        if (val.code === element.id) {
          this.setSmoke(val);
          element.classList.add("bg-active");
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChoseFavoritePets(val) {
      debugger;
      const documentZodiacs = document.getElementsByClassName("pets");
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (val.code === element.id) {
          this.setFavoritePets(val);
          element.classList.add("bg-active");
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChosePreferences(val) {
      const documentZodiacs = document.getElementsByClassName(
        "dietary-preferences"
      );
      for (let index = 0; index < documentZodiacs.length; index++) {
        const element = documentZodiacs[index];
        if (val.code === element.id) {
          this.setPreferences(val);
          element.classList.add("bg-active");
        } else {
          element.classList.remove("bg-active");
        }
      }
    },

    onChangeCancel() {
      const objectLifeStyle = this.$store.state.userModule.lifeStyle;
      const documentZodiacs = document.getElementsByClassName("zodiac");
      const documentEducation = document.getElementsByClassName("education");
      const documentPersonality =
        document.getElementsByClassName("personality");
      const documentSmoke = document.getElementsByClassName("smoke");
      const documentPets = document.getElementsByClassName("pets");
      const documentPreferences = document.getElementsByClassName(
        "dietary-preferences"
      );
      if (objectLifeStyle.keyZodiac !== undefined) {
        documentZodiacs[objectLifeStyle.keyZodiac].classList.remove(
          "bg-active"
        );
      }

      if (objectLifeStyle.keyEducation !== undefined) {
        documentEducation[objectLifeStyle.keyEducation].classList.remove(
          "bg-active"
        );
      }
      if (objectLifeStyle.keyPersonality !== undefined) {
        documentPersonality[objectLifeStyle.keyPersonality].classList.remove(
          "bg-active"
        );
      }
      if (objectLifeStyle.keySmoke !== undefined) {
        documentSmoke[objectLifeStyle.keySmoke].classList.remove("bg-active");
      }
      if (objectLifeStyle.keyPets !== undefined) {
        documentPets[objectLifeStyle.keyPets].classList.remove("bg-active");
      }
      if (objectLifeStyle.keyPreferences !== undefined) {
        documentPreferences[objectLifeStyle.keyPreferences].classList.remove(
          "bg-active"
        );
      }

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
