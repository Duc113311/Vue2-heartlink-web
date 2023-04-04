<template>
  <div class="w-full h-full relative bg-theme p-5">
    <div class="w-full h-full">
      <!-- Header -->
      <div class="w-full header-detail flex justify-center items-center">
        <div class="w-full flex justify-center items-center">
          <div class="w-1/4">
            <BhBack @onBackComponent="onBackSettingPhone()"></BhBack>
          </div>
          <div class="ml-14 w-3/4 text-xl text-white">Set up phone number</div>
        </div>
      </div>

      <!-- Body -->
      <div class="body-detail height-scroll overflow-scroll w-full">
        <div class="w-full">
          <div class="bh-item-title title-item">Phone number</div>
          <div class="w-full flex justify-between form-set-input mt-3">
            <div class="mr-5 flex items-center">
              <div class="mr-3 title-item bh-text-number">+84962282864</div>
            </div>
            <div>
              <img src="@/assets/icon/ic_checked.svg" alt="" srcset="" />
            </div>
          </div>
          <div class="w-full items-center bh-describe mt-3">
            Verified phone number
          </div>
        </div>
        <div class="w-full mt-6">
          <BhCommon :nameTitle="nameTitle"></BhCommon>
        </div>
      </div>

      <div class="w-full">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import BhCommon from "../../../../components/bh-element-ui/button/bh-common";
import BhBack from "../../../../components/bh-element-ui/button/bh-back";
import Footer from "../../../../components/layout/footer-home/footer";
export default {
  components: {
    BhCommon,
    BhBack,
    Footer,
  },
  name: "phone-number-setting",
  data() {
    return {
      nameTitle: "Update my phone number",
    };
  },

  methods: {
    onBackSettingPhone() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="css"></style>
