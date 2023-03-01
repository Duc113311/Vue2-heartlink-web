<template>
  <div class="w-full h-full relative bg-theme p-5">
    <div class="w-full h-full">
      <!-- Back -->
      <div class="w-full header-edit flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <BhBack></BhBack>
          </div>
          <div class="ml-20 w-3/4 text-xl text-white">Settings</div>
        </div>
      </div>

      <div class="hight-setting overflow-scroll w-full">
        <!--package -->
        <div class="w-full gold-package overflow-scroll mt-3">
          <div class="border-package">
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
              >
                <div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-slate-900">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_platium_package.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Platinum package</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div>
              </slide>
              <slide
                ><div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-amber-300">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_gold_package.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Gold package</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >

              <slide>
                <div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-blue-400">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_gold_package.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Gold package</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >
              <slide>
                <div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-zinc-400">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_silver_package.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Silver package</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >
              <slide>
                <div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-orange-500">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_super_like.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Get Supper Like</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >
              <slide
                ><div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-yellow-500">
                    <div class="flex justify-center">
                      <img src="@/assets/icon/package/ic_boost.svg" alt="" />
                    </div>
                    <div class="mt-2 text-xl">Get Boost Profile</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >
              <slide
                ><div
                  class="w-full flex justify-center text-center mb-2 dash-packages"
                >
                  <div class="item-package bg-teal-400">
                    <div class="flex justify-center">
                      <img
                        src="@/assets/icon/package/ic_read_receipts.svg"
                        alt=""
                      />
                    </div>
                    <div class="mt-2 text-xl">Get Read Receipts</div>
                    <div class="mt-2 text-sm">
                      Level up everyone action you take on HeartLink
                    </div>
                  </div>
                </div></slide
              >
            </carousel>
          </div>
        </div>

        <!-- account setting -->

        <div class="w-full">
          <div class="w-full">Account Settings</div>
          <div class="w-full flex items-center">
            <div class="w-full">
              <div class="w-full flex style-form">
                <div class="flex justify-between w-full">
                  <div class="bh-item-title">Phone number</div>
                  <div class="mr-5 flex items-center">
                    <div class="mr-3">+84962282864</div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div class="w-full flex justify-center items-center">
                Secure your account by verifying your phone number
              </div>
            </div>
          </div>
        </div>

        <!-- discovery -->
        <div class="w-full">
          <div class="w-full">Discovery Settings</div>
          <div class="w-full flex items-center">
            <div class="w-full">
              <div class="w-full flex style-form">
                <div class="flex justify-between w-full">
                  <div class="bh-item-title">Location</div>
                  <div class="mr-5 flex items-center">
                    <div class="mr-3">My Current Location</div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
              <div class="w-full flex justify-center items-center">
                Change your location to see people in other cities
              </div>
            </div>
          </div>
        </div>

        <!-- golbal -->
        <div class="w-full flex justify-center items-center">
          <div class="w-full">
            <div class="w-full style-switch">
              <div class="name text-xl">Golbal</div>

              <div>
                <el-switch
                  v-model="value2"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                >
                </el-switch>
              </div>
            </div>
            <div class="w-full p-3 bh-describe">
              You can meet people nearby and from around the world
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full">PREFERRED LANGUAGES</div>
          <div class="w-full">
            <div>
              <div class="w-full">English</div>
              <div class="w-full">Vietnamese</div>
            </div>
            <div>
              <div>Add language...</div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div>
            <div class="w-full flex justify-between p-3">
              <div>MAXIMUM DISTANCE</div>
              <div>{{ value1 }}km</div>
            </div>
            <div class="flex justify-between w-full">
              <div>Only show people in this range</div>
              <div>
                <el-switch
                  v-model="value2"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                >
                </el-switch>
              </div>
            </div>
            <div>
              <el-slider v-model="value1"></el-slider>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div>
            <div class="w-full flex justify-between p-3">
              <div>MAXIMUM DISTANCE</div>
              <div>{{ value }}km</div>
            </div>
            <div class="flex justify-between w-full">
              <div>Only show people in this range</div>
              <div>
                <el-switch
                  v-model="value2"
                  active-color="#FB5D65"
                  inactive-color="#5F6A86"
                >
                </el-switch>
              </div>
            </div>
            <div>
              <el-slider
                v-model="value"
                range
                :show-input-controls="true"
                :max="50"
              >
              </el-slider>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>SHOW ME</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Men</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Women</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Everyone</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full">
            We use these preferences to find matches. Some match suggestions may
            not fall within your desired parameters
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex bh-title p-3 items-center">
              <div>CONTROL WHO YOU SEE</div>
              <div class="ml-3">
                <div class="style-package">Sliver package</div>
              </div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="w-full">
                    <div>Balance recommendations</div>
                    <div>
                      See the most relevant people to you (default settings)
                    </div>
                  </div>
                  <div>
                    <el-switch
                      v-model="value2"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="w-full">
                    <div>Recently Active</div>
                    <div>See the most recently active people first</div>
                  </div>
                  <div>
                    <el-switch
                      v-model="value2"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex bh-title p-3 items-center">
              <div>CONTROL WHO YOU SEE</div>
              <div class="ml-3">
                <div class="style-package">Sliver package</div>
              </div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="w-full">
                    <div>Standard</div>
                    <div>
                      Only be shown to certain types of people for individual
                      recommendations
                    </div>
                  </div>
                  <div>
                    <el-switch
                      v-model="value2"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="w-full">
                    <div>Only people I've liked</div>
                    <div>Only people you have liked will see me</div>
                  </div>
                  <div>
                    <el-switch
                      v-model="value2"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
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
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="w-full">
                    <div>Show me on Card Stack</div>
                    <div>
                      If you turn off, you will not be shown in the card stack.
                      People you have already liked may still your profile and
                      match with you. You can still see and chat with your
                      matches
                    </div>
                  </div>
                  <div>
                    <el-switch
                      v-model="value2"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>SHOW ME</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Only Wi-fi Only</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">On Wi-fi and mobile data</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Never autoplay videos</div>
                  <div>
                    <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="w-full">
                    <div>Q&A Events</div>
                    <div>
                      Turning this off will remove Q&A event content from your
                      profile, and you'll no longer see profiles with Q&A event
                      content
                    </div>
                  </div>
                  <div>
                    <el-switch
                      v-model="value2"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="w-full">
                    <div>Show me Top picks</div>
                    <div>
                      Turning this on will allow you to be shown as a featured
                      Top Pick to other users near you
                    </div>
                  </div>
                  <div>
                    <el-switch
                      v-model="value2"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="w-full">
                    <div>Send Read Receipts</div>
                    <div>
                      Turning this off will prevent any matches from activating
                      Reading Receipts in your conversation from this moment on
                      forward
                    </div>
                  </div>
                  <div>
                    <el-switch
                      v-model="value2"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="w-full">
                    <div>Activity Status</div>
                    <div>
                      Allow other members to see if you were recently active
                      within the last 24h on HeartLink. If you have turned this
                      off, they will not be able to see your recently active
                      status
                    </div>
                  </div>
                  <div>
                    <el-switch
                      v-model="value2"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>App Setiings</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full flex justify-between">
                <div>SHOW DISTANCE IN</div>
                <div>km.</div>
              </div>

              <div class="w-full flex justify-center items-center">
                <div class="style-km">Km.</div>

                <div class="style-mi">Mi.</div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>NOTIFICATIONS</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Email</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Push Notification</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Team HeartLink</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="w-full">
                    <div>Dark theme</div>
                    <div>Choose the theme you like most</div>
                  </div>
                  <div>
                    <el-switch
                      v-model="value2"
                      active-color="#FB5D65"
                      inactive-color="#5F6A86"
                    >
                    </el-switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>PAYMENT ACCOUNT</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Manage payment account</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Restore purchase</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>COMMUNITY</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Community Guidelines</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Safe tips</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Safety center</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>PRIVACY</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Cookie policy</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Privacy policy</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Privacy preferences</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>CONTACT US</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Help & support</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>LEGAL</div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Licenses</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
                <div class="flex justify-center w-full items-center">
                  <div class="br-bottom"></div>
                </div>
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Terms of Service</div>
                  <div>
                    <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="w-full flex style-form justify-center items-center">
            LOG OUT
          </div>
        </div>

        <div class="w-full flex justify-center items-center p-3">
          <img
            src="@/assets/icon/ic_icon_app.svg"
            width="40"
            alt=""
            srcset=""
          />
        </div>
      </div>

      <div class="w-full">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../../../components/layout/footer-home/footer";
import BhBack from "../../../components/bh-element-ui/button/bh-back";
export default {
  components: {
    Footer,
    BhBack,
  },
  name: "setting-detail",
  data() {
    return {
      value1: 4,

      value: [18, 40],
    };
  },

  methods: {},
};
</script>

<style lang="css">
.bg-theme {
  background-color: #242a38;
}
.header-edit {
  height: 10%;
}

.hight-setting {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
  height: 79%;
}

.hight-setting::-webkit-scrollbar {
  display: none;
}

.gold-package {
  border-radius: 10px;
  height: 27%;
}

.gold-package {
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
}

.gold-package::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}

.border-package {
  width: 100%;
  height: 200px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.dash-packages {
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 40px;
}
.VueCarousel-dot {
  padding: 5px !important;
  width: 8px !important;
  height: 8px !important;
}

.item-package {
  padding: 20px;
  width: 100%;
  color: white;
  height: 100%;
}

.style-form {
  height: 50px;
  background-color: #495063;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}
</style>
