<template>
  <div class="w-full h-full">
    <div class="w-full h-full">
      <BhBack></BhBack>
      <div class="h-email">
        <MyEmail @onShowWelcome="onShowWelcome"></MyEmail>
      </div>
    </div>
    <NewAccount v-show="isShowWelcome"></NewAccount>
  </div>
</template>

<script>
import NewAccount from "../../../../components/welcome/new-account";
import MyEmail from "../../../../components/form-login/email/my-email";
import BhBack from "../../../../components/bh-element-ui/button/bh-back";
export default {
  components: {
    NewAccount,
    MyEmail,
    BhBack,
  },
  name: "email-page",

  data() {
    return {
      isShowWelcome: false,
    };
  },

  methods: {
    onShowWelcome(val) {
      this.isShowWelcome = val;
    },
  },
};
</script>

<style lang="css">
.h-email {
  height: calc(100% - 6%);
}
</style>
