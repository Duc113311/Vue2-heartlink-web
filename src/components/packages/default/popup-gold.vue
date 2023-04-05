<template>
  <div class="w-full h-full show-popups z-10">
    <div class="v-modal-bg"></div>
    <div class="w-full h-full absolute top-0 left-0 flex justify-center p-5">
      <div
        class="popup_report"
        :style="`background:${bindingData.colorButton.colorBackground}`"
      >
        <div class="platinum h-full w-full text-center">
          <div class="w-full title-packages">
            {{ bindingData.titlePackage }}
          </div>
          <div class="w-full text-center mb-2 h-72">
            <carousel
              :per-page="1"
              :mouse-drag="true"
              :autoplay="true"
              :paginationActiveColor="isColorActive"
              :paginationColor="isColor"
            >
              <slide
                data-index="0"
                data-name="MySlideName"
                @slideclick="handleSlideClick"
                v-for="(item, index) in bindingData.lisNameGolds"
                :key="index"
              >
                <div
                  class="item-package"
                  @click="onClickShowPackages('platinum')"
                >
                  <div
                    class="flex justify-center"
                    @click="onChangeShowPackage()"
                  >
                    <div
                      class="img-url"
                      :style="`background-image: url('${item.urlImage}');`"
                    ></div>
                  </div>
                  <div class="w-full mt-6 mb-3">
                    <div class="title-packages">{{ item.nameGold }}</div>
                    <div class="describe-packages">
                      {{ item.describeGold }}
                    </div>
                  </div>
                </div>
              </slide>
            </carousel>
          </div>
          <div class="flex justify-center text-center">
            <div
              class="square m-1"
              v-for="(item, index) in bindingData.listGoldMonth"
              :key="index"
            >
              <input
                type="radio"
                :id="`gold_` + index"
                name="squares"
                class="hidden"
                :checked="item.isChecked ? 'checked' : ''"
              />
              <label :for="`gold_` + index">
                <div>
                  <h1 class="text-5xl pt-5">{{ item.numberGold }}</h1>
                  <p>{{ item.typeGold }}</p>
                  <p class="pt-3">{{ item.price }}</p>
                  <p>{{ item.currency }}</p>
                  <p class="text-red-500 pt-3 text-xs">
                    {{ item.percentSale }}
                  </p>
                </div></label
              >
            </div>
          </div>
          <div>
            <button
              class="w-11/12 py-4 px-4 rounded-xl shadow text-xl mt-8"
              :style="`background-color:${bindingData.colorButton.bgColor}`"
            >
              {{ bindingData.colorButton.name }}
            </button>
            <div v-if="Object.keys(bindingData.colorButtonMore).length !== 0">
              <p class="mt-5 text-black font-semibold text-xl">OR</p>
              <button
                :style="`background-color:${bindingData.colorButtonMore.bgColor}`"
                class="w-11/12 text-white py-4 px-4 rounded-xl shadow text-xl mt-5"
              >
                {{ bindingData.colorButtonMore.name }}
                <p class="text-sm font-thin opacity-80">
                  {{ bindingData.colorButtonMore.describe }}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup-gold",
  data() {
    return {
      listPackages: {
        platinum: {
          titlePackage: "Get Platinum Package",
          colorButton: {
            bgColor: "#940fd8",
            name: "Continue",
            colorBackground: "#252525",
          },
          lisNameGolds: [
            {
              nameGold: "Prioritized Likes",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Everyone you like will see you soon",
            },
            {
              nameGold: "See who likes you ",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Match instantly with people who already like you",
            },
            {
              nameGold: "",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold:
                "Including Top Picks, Unlimited likes, 1free Boost every month, 5 free Supper Like every week, Rewind and Passport",
            },
            {
              nameGold: "Message before matching",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold:
                "Including Top Picks, Unlimited likes, 1free Boost every month, 5 free Supper Like every week, Rewind and Passport",
            },
          ],

          listGoldMonth: [
            {
              numberGold: 3,
              typeGold: "Month",
              price: 2.49,
              currency: "USD/each",
            },
            {
              numberGold: 9,
              typeGold: "Month",
              price: 2.49,
              currency: "USD/each",
              percentSale: "Sale 50%",
              isChecked: true,
            },
            {
              numberGold: 30,
              typeGold: "Month",
              price: 2.49,
              currency: "USD/each",
            },
          ],
          colorButtonMore: {
            bgColor: "#f6a800",
            name: "Get a Gold Packages",
            describe: "5 free Supper Like weekly",
          },
        },
        golds: {
          titlePackage: "Get Gold packages",
          colorButton: {
            bgColor: "#940fd8",
            name: "BOOST MY PROFILE",
            colorBackground: "linear-gradient(to bottom, #9d26da, #fdfdfb)",
          },
          lisNameGolds: [
            {
              nameGold: "Control profile",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Limit what others see with Dating Plus",
            },
            {
              nameGold: "Control profile1",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Limit what others see with Dating Plus",
            },
            {
              nameGold: "Control profile2",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Limit what others see with Dating Plus",
            },
          ],

          listGoldMonth: [
            {
              numberGold: 3,
              typeGold: "Month",
              price: 2.49,
              currency: "USD/each",
            },
            {
              numberGold: 9,
              typeGold: "Month",
              price: 2.49,
              currency: "USD/each",
              percentSale: "Sale 50%",
              isChecked: true,
            },
            {
              numberGold: 30,
              typeGold: "Month",
              price: 2.49,
              currency: "USD/each",
            },
          ],
          colorButtonMore: {
            bgColor: "#f6a800",
            name: "Get a Gold Packages",
            describe: "5 free Supper Like weekly",
          },
        },
      },
    };
  },

  props: ["nameGoldPackage"],

  computed: {
    bindingData() {
      debugger;
      if (this.nameGoldPackage === "platinum") {
        return this.listPackages.gold;
      } else {
        return this.listPackages.platinum;
      }
    },
  },

  methods: {},

  mounted() {},
};
</script>
<style lang="css">
@keyframes zoomIn {
  from {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}

.show-popups {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: zoomIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
.b1 {
  background-color: #940fd8;
}
.b2 {
  background-color: #f6a800;
}
.popup {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}
.item-package {
  color: black;
}
.popup_report {
  margin: auto;
  padding: 20px;
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
}
.img1 {
  margin: auto;
  width: 92px;
  height: 90px;
  background-image: url("@/assets/icon/bt_super_like.svg");
  background-size: 100%;
}
.square label {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  opacity: 0.5;
}
.square label div {
  border-radius: 10px;
  width: 130px;
  height: 200px;
  background-color: #f8f1fc;
  color: black;
}
.square input[type="radio"]:checked + label {
  border-color: #940fd8;
  border-radius: 12px;
  border-width: 3px;
  opacity: 1;
  transform: scale(1.1);
}

.square input[type="radio"]:checked + label::after {
  content: "MOST POPULAR";
  display: block;
  position: absolute;
  top: -7%;
  left: 15%;
  color: white;
  background-color: #940fd8;
  padding: 4px;
  font-size: 10px;
  border-radius: 5px;
  font-weight: 700;
}

.img-url {
  background-position: center;
  background-size: cover;
  width: 120px;
  height: 100px;
}
</style>
