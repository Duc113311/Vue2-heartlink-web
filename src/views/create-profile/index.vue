<template>
  <div class="w-full h-full">
    <div class="w-full h-full create-profile p-8 top-0 left-0 z-20 phone-login">
      <div class="body-infor overflow-hidden">
        <!-- Nút back -->
        <div class="back" v-if="isScream !== 7">
          <BhBack @onBackComponent="onBackComponent"></BhBack>
        </div>
        <!-- My name -->
        <div v-if="isScream === 0">
          <MyName @onStatusActive="onStatusActive"></MyName>
        </div>
        <!-- Birthday -->
        <div v-if="isScream === 1">
          <MyBirthday @onStatusActive="onStatusActive"></MyBirthday>
        </div>
        <!-- Gender -->
        <div v-if="isScream === 2">
          <MyGender @onStatusActive="onStatusActive"></MyGender>
        </div>
        <!-- Sexual -->
        <div v-if="isScream === 3">
          <MySexual @onStatusActive="onStatusActive"></MySexual>
        </div>
        <!-- Interest -->
        <div v-if="isScream === 4">
          <MyInterests @onStatusActive="onStatusActive"></MyInterests>
        </div>
        <div v-if="isScream === 5">
          <MyShowGender @onStatusActive="onStatusActive"></MyShowGender>
        </div>
        <!-- Photos -->
        <div v-if="isScream === 6">
          <MyPhotos @onStatusActive="onStatusActive"></MyPhotos>
        </div>
        <!-- Locations -->
        <div v-if="isScream === 7">
          <MyLocation @onStatusActive="onStatusActive"></MyLocation>
        </div>
        <!--  -->
      </div>
      <div class="footer-infor pt-3" v-if="isScream !== 7">
        <BhContinue
          :isActives="isActives"
          @onChangeContinue="onChangeContinue"
        ></BhContinue>
      </div>
    </div>
  </div>
</template>

<script>
import MyShowGender from "../../components/create-profiles/my-self/my-show-gender";
import BhContinue from "../../components/bh-element-ui/button/bh-continue";
import MyLocation from "../../components/create-profiles/my-self/my-location";
import MyPhotos from "../../components/create-profiles/my-self/my-photos";
import MyInterests from "../../components/create-profiles/my-self/my-interests";
import MySexual from "../../components/create-profiles/my-self/my-sexual";
import MyGender from "../../components/create-profiles/my-self/my-gender";
import MyBirthday from "../../components/create-profiles/my-self/my-birthday";
import MyName from "../../components/create-profiles/my-self/my-name";
import BhBack from "../../components/bh-element-ui/button/bh-back";

import TokenApps from "../../middleware/application-storage.js";
export default {
  components: {
    MyShowGender,
    BhContinue,
    MyLocation,
    MyPhotos,
    MyInterests,
    MySexual,
    MyGender,
    MyBirthday,
    MyName,
    BhBack,
  },
  name: "create-profile",

  data() {
    return {
      isScream: 0,
      isActives: false,
      isNumber: 0,
      isShowHeader: true,
      isShowAvoid: false,
    };
  },

  methods: {
    onBackComponent() {},

    onStatusActive(value) {
      this.isActives = value;
    },

    onChangeContinue(val) {
      debugger;
      console.log(val);
      if (this.isScream === 7) {
        this.isShowAvoid = true;

        const userId = TokenApps.getAccessToken("userId");
        const dataUser = this.$store.state.userModule.user_profile;
        dataUser.userId = userId;
      } else {
        this.isScream = this.isScream + 1;
      }
    },
  },
};
</script>

<style lang="css">
.create-profile {
}

.body-infor {
  height: 88%;
}

.footer-infor {
  height: 12%;
}
</style>
