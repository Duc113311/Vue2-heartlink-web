<template>
  <div>
    <div class="grid">
      <button
        class="btn-Sign cursor-pointer text-xl font-semibold bg-white text-black w-80 rounded-lg px-3 py-3 mb-4"
        @click="onLoginGoogle()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/google_icon.svg" class="mr-2" alt="" />
          <span class="font-sans">Log in with Google</span>
        </span>
      </button>

      <button
        type="primary"
        class="btn-Sign cursor-pointer text-xl font-semibold bg-face text-white w-80 rounded-lg px-3 py-3 mb-4"
        @click="onLoginFacebook()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/facebook_icon.svg" class="mr-2" alt="" /><span
            class="font-sans"
            >Log in with Facebook</span
          >
        </span>
      </button>
      <button
        type="danger"
        class="btn-Sign cursor-pointer text-xl font-semibold bg-phone text-white w-80 rounded-lg px-3 py-3 mb-3"
        @click="onClickPhoneNumber()"
      >
        <span class="flex justify-center">
          <img src="@/assets/icon/phone_number_icon.svg" class="mr-2" alt="" />
          <span class="font-sans">Log in with Phone number</span>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-btn",
};
</script>

<style lang="css"></style>
