<template>
  <div class="w-full h-full relative bg-theme p-5">
    <div class="w-full h-full">
      <!-- Back -->
      <div class="w-full header-detail flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <BhBack @onBackComponent="onBackSetting"></BhBack>
          </div>
          <div class="ml-32 w-3/4 text-xl text-white">Setting</div>
        </div>
      </div>

      <div class="body-detail height-scroll overflow-scroll w-full">
        <!--package -->
        <slider-gold></slider-gold>

        <!-- account setting -->

        <div class="w-full">
          <div class="w-full bh-item-title title-size">Account Settings</div>
          <div class="w-full flex items-center">
            <div class="w-full">
              <div class="w-full flex form-set-input">
                <div class="flex justify-between w-full">
                  <div class="bh-item-title title-item">Phone number</div>
                  <div class="mr-5 flex items-center">
                    <div class="mr-3 title-item bh-text-number">
                      +84962282864
                    </div>
                    <div @click="onClickUpdatePhone()">
                      <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full flex items-center bh-describe size-describe">
                Secure your account by verifying your phone number
              </div>
            </div>
          </div>
        </div>

        <!-- discovery -->
        <div class="w-full">
          <div class="w-full bh-item-title title-size">Discovery Settings</div>
          <div class="w-full flex items-center">
            <div class="w-full">
              <div class="w-full flex form-set-input">
                <div class="flex justify-between w-full">
                  <div class="bh-item-title title-item">Location</div>
                  <div class="mr-5 flex items-center">
                    <div
                      class="mr-3 bh-text-location"
                      @click="onClickLocation()"
                    >
                      {{ addressLocation }}
                    </div>

                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div class="w-full flex items-center bh-describe size-describe">
                Change your location to see people in other cities
              </div>
            </div>
          </div>
        </div>

        <!-- golbal -->
        <div class="w-full flex justify-center items-center">
          <div class="w-full">
            <div
              class="w-full style-switch form-set-input flex justify-between"
            >
              <div class="name bh-item-title title-item">Golbal</div>

              <div class="mr-3">
                <el-switch
                  v-model="valueGlobal"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                  @change="onChangeGlobal()"
                >
                </el-switch>
              </div>
            </div>
            <div class="w-full p-3 bh-describe">
              You can meet people nearby and from around the world
            </div>
          </div>
        </div>

        <div v-show="valueGlobal" class="w-full form-set-list">
          <div class="w-full bh-title title-item form-set-item">
            PREFERRED LANGUAGES
          </div>
          <div class="w-full">
            <div>
              <div
                class="w-full form-set-item bd-input title-input-item bh-item-title"
              >
                English
              </div>
              <div
                class="w-full form-set-item bd-input title-input-item bh-item-title"
              >
                Vietnamese
              </div>
            </div>
            <div>
              <div class="bh-text-location form-set-item w-full">
                Add language...
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6">
          <div class="form-set-list">
            <div class="w-full flex justify-between items-center">
              <div class="bh-title title-item form-set-item">
                MAXIMUM DISTANCE
              </div>
              <div class="bh-describe">{{ valueDistance }}km</div>
            </div>

            <div>
              <el-slider
                v-model="valueDistance"
                @change="onChangeDistance()"
              ></el-slider>
            </div>
            <div class="flex justify-between w-full mt-2">
              <div class="bh-item-title title-item">
                Only show people in this range
              </div>
              <div>
                <el-switch
                  v-model="valuePeopleDistance"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                  @change="onChangePeopleDistance()"
                >
                </el-switch>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6">
          <div class="form-set-list">
            <div class="w-full flex justify-between">
              <div class="bh-title title-item form-set-item">AGE RANGE</div>
              <div class="bh-describe">{{ showAgeMin }} - {{ showAgeMax }}</div>
            </div>

            <div class="w-full">
              <el-slider
                v-model="valueAge"
                range
                :show-input-controls="true"
                :max="50"
                @change="onChangeAgeRange()"
              >
              </el-slider>
            </div>
            <div class="flex justify-between w-full">
              <div class="bh-item-title title-item">
                Only show people in this range
              </div>
              <div>
                <el-switch
                  v-model="valueAgePreference"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                  @change="onChangeAgePreference()"
                >
                </el-switch>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title form-set-item">
              <div>SHOW ME</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div
                  class="flex justify-between w-full bd-input items-center"
                  @click="onChangeGenderShowMe(`men`)"
                >
                  <div class="bh-item-title form-set-item">Men</div>
                  <div v-if="showMeGender === `men`">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div
                  class="flex justify-between w-full bd-input items-center"
                  @click="onChangeGenderShowMe(`women`)"
                >
                  <div class="bh-item-title form-set-item">Women</div>
                  <div v-if="showMeGender === `women`">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div
                  class="flex justify-between w-full items-center"
                  @click="onChangeGenderShowMe(`all`)"
                >
                  <div class="bh-item-title form-set-item">Everyone</div>
                  <div v-if="showMeGender === `all`">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full p-3 bh-describe">
            We use these preferences to find matches. Some match suggestions may
            not fall within your desired parameters
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex bh-title items-center p-3">
              <div class="form-set-item">CONTROL WHO YOU SEE</div>
              <div class="ml-3">
                <div class="style-package">Sliver package</div>
              </div>
            </div>
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div
                  class="flex justify-between w-full form-set-item items-center bd-input"
                >
                  <div class="w-full">
                    <div class="bh-item-title">Balance recommendations</div>
                    <div class="bh-describe">
                      See the most relevant people to you (default settings)
                    </div>
                  </div>
                  <div v-if="valueIncognitoMode">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div
                  class="flex justify-between w-full form-set-item items-center"
                >
                  <div class="w-full">
                    <div class="bh-item-title">Recently Active</div>
                    <div class="bh-describe">
                      See the most recently active people first
                    </div>
                  </div>
                  <div v-if="!valueIncognitoMode">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex bh-title p-3 items-center">
              <div class="form-set-item">CONTROL WHO YOU SEE</div>
              <div class="ml-3">
                <div class="style-package">Sliver package</div>
              </div>
            </div>
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div
                  class="flex justify-between w-full bd-input form-set-item items-center"
                >
                  <div class="w-full">
                    <div class="bh-item-title title-item">Standard</div>
                    <div class="bh-describe">
                      Only be shown to certain types of people for individual
                      recommendations
                    </div>
                  </div>
                  <div v-if="!valueIncognitoMode">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div
                  class="flex justify-between w-full form-set-item items-center"
                >
                  <div class="w-full">
                    <div class="bh-item-title title-item">
                      Only people I've liked
                    </div>
                    <div class="bh-describe">
                      Only people you have liked will see me
                    </div>
                  </div>
                  <div v-if="valueIncognitoMode">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex bh-title p-3 items-center">
              <div>SHOW ME ON CARD STACK</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common form-set-list">
                <div class="flex justify-between w-full">
                  <div class="w-full">
                    <div class="flex justify-between items-center">
                      <div class="form-set-item bh-item-title title-item">
                        Show me on Card Stack
                      </div>
                      <div>
                        <el-switch
                          v-model="valueCardStack"
                          active-color="#FB5D65"
                          inactive-color="#5F6A86"
                          @change="onChangeCardStack()"
                        >
                        </el-switch>
                      </div>
                    </div>
                    <div class="form-set-item bh-describe">
                      If you turn off, you will not be shown in the card stack.
                      People you have already liked may still your profile and
                      match with you. You can still see and chat with your
                      matches
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full title-item form-set-item bh-title">
              <div>SHOW ME</div>
            </div>
            <div class="w-full flex items-center bh-item-title">
              <div class="w-full style-bg-common">
                <div
                  class="flex justify-between w-full form-set-item bd-input"
                  @click="onChangeAutoPlayVideo('no')"
                >
                  <div class="bh-item-title">Only Wi-fi Only</div>
                  <div v-if="valueAutoPlayVideo === `no`">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div
                  class="flex justify-between w-full form-set-item bd-input"
                  @click="onChangeAutoPlayVideo('wifi')"
                >
                  <div class="bh-item-title">On Wi-fi and mobile data</div>
                  <div v-if="valueAutoPlayVideo === `wifi`">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>

                <div
                  class="flex justify-between w-full form-set-item"
                  @click="onChangeAutoPlayVideo('always')"
                >
                  <div class="bh-item-title">Never autoplay videos</div>
                  <div v-if="valueAutoPlayVideo === `always`">
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full">
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full">
                  <div class="w-full">
                    <div
                      class="form-set-item bh-item-title title-item flex justify-between items-center"
                    >
                      <div class="">Q&A Events</div>
                      <div>
                        <el-switch
                          v-model="value2"
                          active-color="#FB5D65"
                          inactive-color="#5F6A86"
                        >
                        </el-switch>
                      </div>
                    </div>
                    <div class="form-set-item bh-describe">
                      Turning this off will remove Q&A event content from your
                      profile, and you'll no longer see profiles with Q&A event
                      content
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full">
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full">
                  <div class="w-full">
                    <div
                      class="form-set-item bh-item-title title-item flex justify-between items-center"
                    >
                      <div class="">Show me Top picks</div>
                      <div>
                        <el-switch
                          v-model="valueShowTopPicks"
                          active-color="#FB5D65"
                          inactive-color="#5F6A86"
                          @change="onChangeShowTopPicks()"
                        >
                        </el-switch>
                      </div>
                    </div>
                    <div class="form-set-item bh-describe w-full">
                      Turning this on will allow you to be shown as a featured
                      Top Pick to other users near you
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full">
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full">
                  <div class="w-full">
                    <div
                      class="form-set-item bh-item-title title-item flex justify-between items-center"
                    >
                      <div class="">Send Read Receipts</div>
                      <div>
                        <el-switch
                          v-model="valueReadReceipts"
                          active-color="#FB5D65"
                          inactive-color="#5F6A86"
                          @change="onChangeReadReceipts()"
                        >
                        </el-switch>
                      </div>
                    </div>
                    <div class="form-set-item bh-describe w-full">
                      Turning this off will prevent any matches from activating
                      Reading Receipts in your conversation from this moment on
                      forward
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full">
            <div class="w-full flex items-center form-set-list">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full">
                  <div class="w-full">
                    <div
                      class="form-set-item bh-item-title title-item flex justify-between items-center"
                    >
                      <div class="">Activity Status</div>
                      <div>
                        <el-switch
                          v-model="valueActivityStatus"
                          active-color="#FB5D65"
                          inactive-color="#5F6A86"
                          @change="onChangeActivityStatus()"
                        >
                        </el-switch>
                      </div>
                    </div>
                    <div class="form-set-item bh-describe w-full">
                      Allow other members to see if you were recently active
                      within the last 24h on HeartLink. If you have turned this
                      off, they will not be able to see your recently active
                      status
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title">
              <div class="w-full bh-item-title title-size">App Setiings</div>
            </div>
            <div class="w-full form-set-list">
              <div class="w-full flex justify-between form-set-item">
                <div class="bh-title">SHOW DISTANCE IN</div>
                <div class="bh-describe">km.</div>
              </div>

              <div
                class="w-full flex justify-center items-center form-set-item gap-6"
              >
                <div
                  v-for="(item, index) in listDistance"
                  :key="index"
                  :id="`location_` + item"
                  class="style-distance no-active-distance"
                  @click="onChangeDistanceLocation(item)"
                >
                  {{ item.charAt(0).toUpperCase() + item.slice(1) + "." }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title form-set-item">
              <div>NOTIFICATIONS</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Email</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="flex justify-between w-full">
                    <div class="bh-item-title">Push Notification</div>
                    <div>
                      <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                    </div>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Team HeartLink</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="w-full">
                  <div
                    class="w-full form-set-item flex justify-between items-center"
                  >
                    <div class="bh-item-title">Dark theme</div>
                    <div>
                      <el-switch
                        v-model="value2"
                        active-color="#FB5D65"
                        inactive-color="#5F6A86"
                      >
                      </el-switch>
                    </div>
                  </div>
                  <div class="bh-describe">Choose the theme you like most</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title">
              <div>PAYMENT ACCOUNT</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Manage payment account</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Restore purchase</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title">
              <div>COMMUNITY</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Community Guidelines</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Safe tips</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full">
                  <div class="bh-item-title">Safety center</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title p-3">
              <div>PRIVACY</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Cookie policy</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Privacy policy</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Privacy preferences</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title">
              <div>CONTACT US</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Help & support</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center mt-6">
          <div class="w-full form-set-list">
            <div class="w-full flex justify-between bh-title">
              <div>LEGAL</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full form-set-item bd-input">
                  <div class="bh-item-title">Licenses</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>

                <div class="flex justify-between w-full form-set-item">
                  <div class="bh-item-title">Terms of Service</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mt-6">
          <div
            class="w-full flex form-set-input justify-center items-center bh-item-title"
          >
            LOG OUT
          </div>
        </div>

        <div
          class="w-full flex justify-center items-center form-set-item mt-10"
        >
          <div>
            <img
              src="@/assets/icon/ic_icon_app.svg"
              style="width: 100%"
              alt=""
              srcset=""
            />
            <div class="bh-describe">Version x.y.z</div>
          </div>
        </div>
      </div>

      <div class="w-full">
        <Footer></Footer>
      </div>
    </div>
    <popup-gold v-if="isShowPackage"></popup-gold>
  </div>
</template>

<script>
import Footer from "../../../../components/layout/footer-home/footer";
import BhBack from "../../../../components/bh-element-ui/button/bh-back";
import { mapGetters, mapMutations } from "vuex";
import PopupGold from "@/components/packages/default/popup-gold.vue";
import SliderGold from "@/components/packages/common/slider-gold.vue";

export default {
  components: {
    Footer,
    BhBack,

    PopupGold,
    SliderGold,
  },
  name: "setting-default",
  data() {
    return {
      value1: 4,
      isShowPackage: false,
      valueAge: [
        this.$store.state.userModule.user_profile.settings.agePreference.min,
        this.$store.state.userModule.user_profile.settings.agePreference.max,
      ],

      value3: true,

      valueLocation: 8,
      valueDistance:
        this.$store.state.userModule.user_profile.settings.distancePreference
          .range,

      listDistance: ["km", "mi"],
    };
  },

  computed: {
    ...mapGetters({
      nameGlobal: "showGlobal",
      namePeopleDistance: "showPeopleDistance",
      nameAgePreference: "showAgePreference",
      nameDistanceLocation: "showDistanceLocation",
      nameCardStack: "showCardStack",
      nameAutoPlayVideo: "showAutoPlay",
      nameShowTopPicks: "showTopPick",
      nameReadReceipts: "showReadReceipt",
      nameActivityStatus: "showActivityStatus",
      nameIncognitoMode: "showIncognitoMode",
    }),

    isShowDistance: {
      get() {
        const statusDistance = this.nameDistanceLocation;
        debugger;
        if (statusDistance === "km") {
          return true;
        }
        return false;
      },
      set(newName) {
        debugger;
        if (newName === "km") {
          return true;
        }
        return false;
      },
    },

    showAgeMin() {
      return this.valueAge[0];
    },

    showAgeMax() {
      return this.valueAge[1];
    },

    // Global
    valueGlobal: {
      get() {
        const global = this.nameGlobal;

        return global;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },

    // People Distance
    valuePeopleDistance: {
      get() {
        const peopleDistance = this.namePeopleDistance;

        return peopleDistance;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },

    // Age Preference
    valueAgePreference: {
      get() {
        const peopleDistance = this.nameAgePreference;

        return peopleDistance;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },

    showMeGender() {
      const genderShowMe =
        this.$store.state.userModule.user_profile?.settings.genderShowMe;
      debugger;
      return genderShowMe;
    },

    // Show me on Card Stack
    valueCardStack: {
      get() {
        const cardStack = this.nameCardStack;

        return cardStack;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },

    // Auto play video
    valueAutoPlayVideo: {
      get() {
        const autoPlayVideo = this.nameAutoPlayVideo;

        return autoPlayVideo;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },

    // Show me Top picks
    valueShowTopPicks: {
      get() {
        const showTopPicks = this.nameShowTopPicks;

        return showTopPicks;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },

    // Send Read Receipts
    valueReadReceipts: {
      get() {
        const readReceipts = this.nameReadReceipts;

        return readReceipts;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },

    // Activity Status
    valueActivityStatus: {
      get() {
        const activityStatus = this.nameActivityStatus;

        return activityStatus;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },

    // nameIncognitoMode
    valueIncognitoMode: {
      get() {
        const incognitoMode = this.nameIncognitoMode;

        return incognitoMode;
      },
      set(newName) {
        debugger;
        return newName;
      },
    },

    addressLocation() {
      const addressParam =
        this.$store.state.userModule.user_profile.profiles.address;
      debugger;
      if (addressParam !== "") {
        return addressParam;
      } else {
        return "My Current Location";
      }
    },
  },

  methods: {
    ...mapMutations([
      "setShowGlobal",
      "setValueDistance",
      "setValueAgeRange",
      "setPeopleDistance",
      "setAgePreference",
      "setShowGender",
      "setCardStack",
      "setAutoPlayVideo",
      "setShowTopPicks",
      "setReadReceipts",
      "setActivityStatus",
    ]),

    onChangeShowPackage() {
      debugger;
      this.isShowPackage = true;
    },
    onBackSetting(val) {
      console.log(val);
      this.$router.push({ path: "/setting" });
    },

    /**
     * Xự kiện xử lý Global
     */
    onChangeGlobal() {
      debugger;
      const global = this.$store.state.userModule.user_profile.settings.global;
      if (global) {
        this.setShowGlobal(false);
      } else {
        this.setShowGlobal(true);
      }
    },

    /**
     * Xự kiện xử lý Distance
     */
    onChangeDistance() {
      debugger;
      this.setValueDistance(this.valueDistance);
    },
    onChangeDistanceLocation(val) {
      debugger;
      console.log(val);
      for (let index = 0; index < this.listDistance.length; index++) {
        const element = this.listDistance[index];
        if (element === val) {
          document
            .getElementById("location_" + val)
            .classList.add("active-distance");
          document
            .getElementById("location_" + val)
            .classList.remove("no-active-distance");
        } else {
          document
            .getElementById("location_" + element)
            .classList.remove("active-distance");
          document
            .getElementById("location_" + element)
            .classList.add("no-active-distance");
        }
      }
    },
    /**
     * Xự kiện xử lý giá trị age max-min
     */
    onChangeAgeRange() {
      debugger;
      this.setValueAgeRange(this.valueAge);
    },

    onChangePeopleDistance() {
      debugger;
      const distance =
        this.$store.state.userModule.user_profile.settings.distancePreference
          .onlyShowInThis;
      if (distance) {
        this.setPeopleDistance(false);
      } else {
        this.setPeopleDistance(true);
      }
    },

    onChangeAgePreference() {
      debugger;
      const preference =
        this.$store.state.userModule.user_profile.settings.agePreference
          .onlyShowInThis;
      if (preference) {
        this.setAgePreference(false);
      } else {
        this.setAgePreference(true);
      }
    },

    onChangeCardStack() {
      const cardStack =
        this.$store.state.userModule.user_profile.settings.toppicksDiscoverable;
      if (cardStack) {
        this.setCardStack(false);
      } else {
        this.setCardStack(true);
      }
    },

    onChangeAutoPlayVideo(val) {
      debugger;
      this.setAutoPlayVideo(val);
    },

    onChangeShowTopPicks() {
      const topPicks =
        this.$store.state.userModule.user_profile.settings.showMePersonLikeMe;
      if (topPicks) {
        this.setShowTopPicks(false);
      } else {
        this.setShowTopPicks(true);
      }
    },

    onChangeReadReceipts() {
      const readReceipts =
        this.$store.state.userModule.user_profile.settings.notiSeenMsg;
      if (readReceipts) {
        this.setReadReceipts(false);
      } else {
        this.setReadReceipts(true);
      }
    },

    onChangeActivityStatus() {
      const activityStatus =
        this.$store.state.userModule.user_profile.settings.showActiveStatus;
      if (activityStatus) {
        this.setActivityStatus(false);
      } else {
        this.setActivityStatus(true);
      }
    },

    onChangeGenderShowMe(val) {
      debugger;
      console.log(val);
      this.setShowGender(val);
    },

    onChangeLocations(val) {
      this.valueLocation = val;

      localStorage.setItem("locations", val);
    },

    /**
     * Xử lý vị trí user
     */
    onClickLocation() {},

    onClickUpdatePhone() {
      debugger;
      this.$router
        .push({ path: "/phone-number", name: "phone-number-setting" })
        .catch(() => {});
    },
  },

  mounted() {
    debugger;

    const location = this.nameDistanceLocation;
    console.log(location);
    document
      .getElementById("location_" + location)
      .classList.add("active-distance");
    document
      .getElementById("location_" + location)
      .classList.remove("no-active-distance");
  },
};
</script>

<style lang="css">
.bg-theme {
  background-color: #242a38;
}

.style-distance {
  width: 28%;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}
.active-distance {
  background-color: #fd5d65;
}
.no-active-distance {
  background-color: #5f6a86;
}
</style>
