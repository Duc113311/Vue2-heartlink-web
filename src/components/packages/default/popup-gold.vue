<template>
  <div class="w-full h-full show-popups z-10">
    <div class="v-modal-bg" @click="onHidePackage()"></div>
    <div class="w-full h-full absolute top-0 left-0 flex justify-center p-5">
      <div
        class="popup_report"
        :style="`background:${bindingData.colorButtonAction.colorBackground}`"
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
                v-for="(item, index) in bindingData.lisNameSliderGolds"
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
                    <div
                      class="title-packages font-bold"
                      :style="`color:${bindingData.colorTextGold.colorFormGold}`"
                    >
                      {{ item.nameGold }}
                    </div>
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
              <label
                :for="`gold_` + index"
                :style="{
                  '--borderPlatinum': bindingData.colorBorderActive.borderColor,
                  '--bgPlatinum': bindingData.colorBorderActive.bgColor,
                  '--textPlatinum': bindingData.colorBorderActive.textColor,
                }"
              >
                <div
                  class="bg-form-package"
                  :style="`background-color:${bindingData.colorTextGold.bgFormGold};color:${bindingData.colorTextGold.colorFormGold}`"
                >
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
              class="w-11/12 py-4 px-4 rounded-xl shadow text-2xl mt-8"
              :style="`background-color:${bindingData.colorButtonAction.bgColor};color:${bindingData.colorButtonAction.textColor}`"
            >
              {{ bindingData.colorButtonAction.name }}
            </button>
            <div
              class="text-lg mt-3"
              :style="`color:#7D808B`"
              v-if="Object.keys(bindingData.colorButtonMore).length === 0"
            >
              Recuring billing, cancel anytime
            </div>
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
          colorTextGold: {
            bgFormGold: "rgb(84 74 74)",
            colorFormGold: "#ffffff",
          },
          colorBorderActive: {
            borderColor: "#ffffff",
            bgColor: "#ffffff",
            textColor: "#000000",
          },
          colorButtonAction: {
            bgColor: "#ffffff",
            textColor: "#000000",
            name: "Continue",
            colorBackground:
              "linear-gradient(    321deg,    rgb(32 29 29) 10%,    rgb(46 41 41) 50%,    rgb(18 16 16) 90%  )",
          },
          lisNameSliderGolds: [
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
          colorButtonMore: {},
        },
        // Gold
        gold: {
          titlePackage: "Get Gold Package",
          colorTextGold: {
            bgFormGold: "#FEF6E7",
            colorFormGold: "#000000",
          },
          colorBorderActive: {
            borderColor: "#EBAB3B",
            bgColor: "#EBAB3B",
            textColor: "#000000",
          },
          colorButtonAction: {
            bgColor: "#EBAB3B",
            textColor: "#ffffff",
            name: "Continue",
            colorBackground:
              "linear-gradient(321deg,rgba(252, 211, 77, 1) 30%,rgba(255, 237, 176, 1) 50%,rgba(252, 211, 77, 1) 70%)",
          },
          lisNameSliderGolds: [
            {
              nameGold: "99+ people already like you",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "See who likes you and match instantly",
            },
            {
              nameGold: "Buy more Top Picks",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold:
                "Get full access to Top Picks, Like you, send unlimited likes & more",
            },
            {
              nameGold: "Unlimited Likes",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "See as many likes as you want",
            },
            {
              nameGold: "1 free boost every month",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Skip the line & get more matches",
            },
            {
              nameGold: "Control your profile",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Limit what others see with Dating Plus",
            },
            {
              nameGold: "Choose who see you ",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Only be shown to people you've liked",
            },
            {
              nameGold: "Like profile around the world",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Passport to anywhere",
            },
            {
              nameGold: "5 free Supper Likes very week",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "You're 3x more likely to get a match",
            },
            {
              nameGold: "Unlimited rewinds",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Go back and try again",
            },
            {
              nameGold: "Turn Off Ads",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Have fun without interruptions",
            },
          ],

          listGoldMonth: [
            {
              numberGold: 1,
              typeGold: "months",
              price: 7.99,
              currency: "USD/Months",
            },
            {
              numberGold: 6,
              typeGold: "months",
              price: 3.99,
              currency: "USD/Months",
              percentSale: "Sale 50%",
              isChecked: true,
            },
            {
              numberGold: 12,
              typeGold: "months",
              price: 2.99,
              currency: "USD/Months",
            },
          ],
          colorButtonMore: {},
        },
        // Silver
        silver: {
          titlePackage: "Get Silver Package",
          colorTextGold: {
            bgFormGold: "#ECEFEE",
            colorFormGold: "#000000",
          },
          colorBorderActive: {
            borderColor: "#44665A",
            bgColor: "#44665A",
            textColor: "#000000",
          },
          colorButtonAction: {
            bgColor: "#44665A",
            textColor: "#ffffff",
            name: "Continue",
            colorBackground:
              "linear-gradient( 321deg,rgba(161, 161, 170, 1) 30%,rgba(208, 208, 208, 1) 50%,rgba(161, 161, 170, 1) 70%",
          },
          lisNameSliderGolds: [
            {
              nameGold: "Unlimited Likes",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Send as many likes as you want",
            },
            {
              nameGold: "Control your profile",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Limit what others see with Dating Plus",
            },
            {
              nameGold: "Choose who sees you ",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Only be shown to people you've liked",
            },
            {
              nameGold: "Like profile around the world",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Passport to anywhere",
            },
            {
              nameGold: "Unlimited rewinds",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Go back and try again",
            },
            {
              nameGold: "Turn Off Ads",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "Have fun without interruptions",
            },
          ],

          listGoldMonth: [
            {
              numberGold: 1,
              typeGold: "months",
              price: 7.99,
              currency: "USD/Months",
            },
            {
              numberGold: 6,
              typeGold: "months",
              price: 3.99,
              currency: "USD/Months",
              percentSale: "Sale 50%",
              isChecked: true,
            },
            {
              numberGold: 12,
              typeGold: "months",
              price: 2.99,
              currency: "USD/Months",
            },
          ],
          colorButtonMore: {},
        },
        // Supper Likes
        supperLike: {
          titlePackage: "Get Supper Likes Package",
          colorTextGold: {
            bgFormGold: "#ECEFEE",
            colorFormGold: "#000000",
          },
          colorBorderActive: {
            borderColor: "#50B181",
            bgColor: "#50B181",
            textColor: "#ffffff",
          },
          colorButtonAction: {
            bgColor: "#50B181",
            textColor: "#ffffff",
            name: "GET SUPPER LIKES",
            colorBackground:
              "linear-gradient( 319deg,rgba(0, 181, 126, 1) 20%,rgba(0, 255, 174, 1) 50%,rgba(0, 181, 126, 1) 80%",
          },
          lisNameSliderGolds: [
            {
              nameGold: "Stand out with Super like",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold: "3x chance to get a match",
            },
          ],

          listGoldMonth: [
            {
              numberGold: 3,
              typeGold: "Supper likes",
              price: 2.99,
              currency: "USD/each",
            },
            {
              numberGold: 15,
              typeGold: "Supper likes",
              price: 2.49,
              currency: "USD/each",
              percentSale: "Sale 50%",
              isChecked: true,
            },
            {
              numberGold: 30,
              typeGold: "Supper likes",
              price: 1.99,
              currency: "USD/each",
            },
          ],
          colorButtonMore: {
            bgColor: "#EBAB3B",
            name: "Get a Gold package",
            describe: "5 free Supper Like weekly",
          },
        },
        // Boost
        boost: {
          titlePackage: "Get Boost Package",
          colorTextGold: {
            bgFormGold: "#F7F2FB",
            colorFormGold: "#000000",
          },
          colorBorderActive: {
            borderColor: "#8620D1",
            bgColor: "#8620D1",
            textColor: "#ffffff",
          },
          colorButtonAction: {
            bgColor: "#8820D0",
            textColor: "#ffffff",
            name: "BOOST MY PROFILE ",
            colorBackground:
              "linear-gradient( 321deg, rgba(168, 85, 247, 1) 19%,rgba(185, 143, 226, 1) 50%, rgba(168, 85, 247, 1) 79%",
          },
          lisNameSliderGolds: [
            {
              nameGold: "Skip the Queue",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold:
                "Always on top profile in your area for 30 mins to get more matches",
            },
          ],

          listGoldMonth: [
            {
              numberGold: 3,
              typeGold: "Supper likes",
              price: 2.99,
              currency: "USD/each",
            },
            {
              numberGold: 15,
              typeGold: "Supper likes",
              price: 2.49,
              currency: "USD/each",
              percentSale: "Sale 50%",
              isChecked: true,
            },
            {
              numberGold: 30,
              typeGold: "Supper likes",
              price: 1.99,
              currency: "USD/each",
            },
          ],
          colorButtonMore: {
            bgColor: "#EBAB3B",
            name: "Get a Gold package",
            describe: "5 free Supper Like weekly",
          },
        },
        // read receipt
        readReceipt: {
          titlePackage: "Get Read Receipt Package",
          colorTextGold: {
            bgFormGold: "#F7F2FB",
            colorFormGold: "#000000",
          },
          colorBorderActive: {
            borderColor: "#3983F6",
            bgColor: "#3983F6",
            textColor: "#ffffff",
          },
          colorButtonAction: {
            bgColor: "#3983F6",
            textColor: "#ffffff",
            name: "GET READ RECEIPT ",
            colorBackground:
              "linear-gradient(321deg,rgba(96, 165, 250, 1) 19%, rgba(177, 212, 255, 1) 50%, rgba(96, 165, 250, 1) 79%",
          },
          lisNameSliderGolds: [
            {
              nameGold: "Stay up to date",
              urlImage: require("../../../assets/icon/package/ic_platium_package.svg"),
              describeGold:
                "Know when your messages have been read with Read Receipt",
            },
          ],

          listGoldMonth: [
            {
              numberGold: 1,
              typeGold: "Read Receipt",
              price: 2.99,
              currency: "USD/each",
            },
            {
              numberGold: 5,
              typeGold: "Read Receipt",
              price: 2.49,
              currency: "USD/each",
              percentSale: "Sale 50%",
              isChecked: true,
            },
            {
              numberGold: 20,
              typeGold: "Read Receipt",
              price: 1.99,
              currency: "USD/each",
            },
          ],
          colorButtonMore: {},
        },
      },
    };
  },

  props: ["nameGoldPackage"],

  computed: {
    bindingData() {
      debugger;
      if (this.nameGoldPackage === "platinum") {
        return this.listPackages.platinum;
      } else if (this.nameGoldPackage === "gold") {
        return this.listPackages.gold;
      } else if (this.nameGoldPackage === "silver") {
        return this.listPackages.silver;
      } else if (this.nameGoldPackage === "supperLike") {
        return this.listPackages.supperLike;
      } else if (this.nameGoldPackage === "boost") {
        return this.listPackages.boost;
      } else {
        return this.listPackages.readReceipt;
      }
    },
  },

  methods: {
    onHidePackage() {
      debugger;
      this.$emit("onClickHidePackage", false);
    },
  },

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
  padding: 10px;
  width: 100%;
  color: black;
  height: 100%;
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
}
.square input[type="radio"]:checked + label {
  border-color: var(--borderPlatinum);
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
  color: var(--textPlatinum);
  background-color: var(--bgPlatinum);
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
