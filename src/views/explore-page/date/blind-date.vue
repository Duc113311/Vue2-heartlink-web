<template>
  <div class="w-full h-full">
    <BlindPage v-if="!isShowBlind"></BlindPage>
    <BlindOption v-if="isShowBlind"></BlindOption>
  </div>
</template>

<script>
import BlindOption from "../../../components/explore/blind-date/blind-option";
import BlindPage from "../../../components/explore/blind-date/blind-page";
export default {
  components: {
    BlindOption,
    BlindPage,
  },

  name: "blind-date",

  data() {
    return {
      isShowBlind: true,
    };
  },

  methods: {},
};
</script>
