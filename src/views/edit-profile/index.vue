<template>
  <div class="w-full h-full relative bg-theme p-5">
    <div class="w-full h-full">
      <!-- Back -->
      <div class="w-full header-edit flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <BhBack @onBackComponent="onBackEditProfile"></BhBack>
          </div>
          <div class="ml-20 w-3/4 text-xl text-white">Edit Profile</div>
        </div>
      </div>

      <div class="form-edit overflow-scroll w-full">
        <div class="w-full">
          <MyPhotos :isShowTitle="true"></MyPhotos>
        </div>

        <div
          class="flex justify-center text-center w-full mt-3 mb-3 description-no-padding"
        >
          Add video, pic or logo toget 4% closer to completing your profile and
          you may even get more likes
        </div>

        <!-- Smart photo -->
        <div class="w-full flex justify-center items-center">
          <div class="w-full">
            <div class="w-full style-switch">
              <div class="name text-xl">Smart Photos</div>

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
              Smart photos continiously tests all your profile photos to find
              the best one
            </div>
          </div>
        </div>

        <!-- About -->

        <div class="w-full flex justify-center items-center">
          <div class="w-full">
            <div class="w-full flex justify-between p-3 bh-title">
              <div>ABOUT ME</div>
              <div>+22%</div>
            </div>
            <div>
              <el-input
                type="textarea"
                :rows="2"
                placeholder="About me - maximise 500 words"
                v-model="textarea"
              >
              </el-input>
            </div>
          </div>
        </div>

        <!-- Interests -->

        <div class="w-full flex justify-center items-center">
          <div class="w-full">
            <span v-for="(item, index) in listDataInterests" :key="index">
              <button
                @click="onSelectInterest(index)"
                :id="index"
                class="oftion-interests mr-3 mb-3 p-3 text-white"
                size="large"
              >
                {{ item }}
              </button>
            </span>
          </div>
        </div>

        <!-- life style -->
        <div class="w-full flex justify-center items-center">
          <div class="w-full">
            <div class="w-full flex justify-between p-3 bh-title">
              <div class="">LIFE STYLE</div>
              <div class="">+22%</div>
            </div>

            <div class="w-full bg-life">
              <div class="w-full item-life">
                <div class="w-5/6 bh-item-title">Zodiac</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  Virgo
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
              <div class="w-full item-life">
                <div class="w-5/6 bh-item-title">Pets free</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  Dog
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
              <div class="w-full item-life">
                <div class="w-5/6 bh-item-title">Education</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  High school
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
              <div class="w-full item-life">
                <div class="w-5/6 bh-item-title">Smocking smoker</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  No Smoking
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
              <div class="w-full item-life">
                <div class="w-5/6 bh-item-title">Character</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  ENFJ
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
              <div class="w-full item-life-end">
                <div class="w-5/6 bh-item-title">Dietary Preferences</div>
                <div
                  class="w-2/12 bh-describe whitespace-nowrap text-ellipsis mr-3 overflow-hidden"
                >
                  Carnivore
                </div>
                <div class="cursor-pointer">
                  <i
                    class="fa-solid bh-chevron-right cursor-pointer fa-chevron-right"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Job title -->
        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>JOB TITLE</div>
              <div>+3%</div>
            </div>
            <div class="w-full">
              <el-input placeholder="Job title" v-model="nameJob"></el-input>
            </div>
          </div>
        </div>
        <!-- Company -->
        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>JOB TITLE</div>
              <div>+3%</div>
            </div>
            <div class="w-full">
              <el-input placeholder="Add company" v-model="nameJob"></el-input>
            </div>
          </div>
        </div>
        <!-- Job title -->
        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>SCHOOL</div>
              <div>+3%</div>
            </div>
            <div class="w-full">
              <el-input
                placeholder="Add university"
                v-model="nameJob"
              ></el-input>
            </div>
          </div>
        </div>
        <!-- Job title -->
        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>LIVING IN</div>
              <div>+3%</div>
            </div>
            <div class="w-full">
              <el-input placeholder="Add city" v-model="nameJob"></el-input>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>SHOW INSTAGRAM PHOTOS</div>
              <div>+3%</div>
            </div>
            <div class="w-full flex style-form">
              <div class="">
                <img
                  src="@/assets/icon/ic_instagram.svg"
                  width="30"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="flex justify-between w-full p-5">
                <div class="bh-item-title">Connect Instgram</div>
                <div>
                  <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>MY ANTHEM</div>
              <div>+3%</div>
            </div>
            <div class="w-full flex style-form">
              <div class="flex justify-between w-full">
                <div class="bh-item-title">Choose an Anthem</div>
                <div class="mr-5">
                  <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>MY TOP SPOTIFY ARTISTS</div>
              <div>+3%</div>
            </div>
            <div class="w-full flex style-form">
              <div class="">
                <img
                  src="@/assets/icon/ic_spotify.svg"
                  width="30"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="flex justify-between w-full p-5">
                <div class="bh-item-title">Connect Spotify</div>
                <div>
                  <i class="fa-solid fa-chevron-right bh-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex justify-between bh-title p-3">
              <div>GENDER</div>
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
              </div>
            </div>
          </div>
        </div>

        <div class="w-full flex items-center">
          <div class="w-full">
            <div class="w-full flex bh-title p-3 items-center">
              <div>CONTROL PROFILE</div>
              <div class="ml-3">
                <div class="style-package">Sliver package</div>
              </div>
            </div>
            <div class="w-full flex items-center">
              <div class="w-full style-bg-common">
                <div class="flex justify-between w-full p-2">
                  <div class="bh-item-title">Don't show my age</div>
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
                  <div class="bh-item-title">Don't show my distance</div>
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
      </div>

      <div class="w-full">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../../components/layout/footer-home/footer";
import MyPhotos from "../../components/create-profiles/my-self/my-photos";
import BhBack from "../../components/bh-element-ui/button/bh-back";
export default {
  components: {
    Footer,
    MyPhotos,
    BhBack,
  },
  name: "edit-profile",

  data() {
    return {
      value2: true,
      textarea: "",
      nameJob: "",
    };
  },

  computed: {
    listDataInterests() {
      return [];
    },
  },

  methods: {
    onBackEditProfile(val) {
      console.log(val);
      this.$router.push({ path: "/setting" });
    },
  },
};
</script>

<style lang="css">
.bg-theme {
  background-color: #242a38;
}

.header-edit {
  height: 10%;
}

.form-edit {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-y: scroll; /* Add the ability to scroll */
  height: 79%;
}

.form-edit::-webkit-scrollbar {
  display: none;
}

.oftion-interests:hover {
  background-color: #5b566b;
  color: white;
  border: 1px solid white;
}

.oftion-interests {
  border: 1px solid white;
  border-radius: 8px;
}

.style-switch {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #495063;
  border-radius: 10px;
  color: white;
  background-color: #495063;
}

.el-textarea__inner {
  min-height: 140px !important;
  height: 134px !important;
  background-color: rgb(73, 80, 99) !important;
  border: 1px solid rgb(73, 80, 99) !important;
  border-radius: 10px !important;
  font-size: 17px !important;
  padding: 12px !important;
  color: #ffffff !important;
}

.bg-life {
  background-color: #495063;
  border-radius: 10px;
  padding: 24px;
}

.item-life {
  display: flex;
  /* padding: 12px; */
  border-bottom: 1px solid #616781;
  padding-bottom: 15px;
  padding-top: 15px;
}
.item-life-end {
  display: flex;
  /* padding: 12px; */
  padding-bottom: 15px;
  padding-top: 15px;
}

.el-input__inner {
  background-color: #495063 !important;
  border: 1px solid #495063 !important;
  border-radius: 10px !important;
  padding: 13px !important;
  font-size: 15px !important;
  height: 50px !important;
  color: #ffffff !important;
}

.style-form {
  height: 50px;
  background-color: #495063;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}

.style-bg-common {
  background-color: #495063;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}

.style-package {
  padding: 5px;
  width: 138px;
  display: flex;
  justify-content: center;
  border: 1px solid #8fada5;
  border-radius: 4px;
  background-color: #8fada5;
  color: #ffffff;
}
</style>
