<template>
  <div class="home-page w-full h-full">
    <div class="w-full h-full home-page overflow-hidden p-2">
      <Header></Header>

      <div class="w-full body-page-home relative">
        <CategoryPage></CategoryPage>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import CategoryPage from "../../../components/explore/category-page";
import Footer from "../../../components/layout/footer-home/footer";
import Header from "../../../components/layout/header-home/header";
export default {
  components: {
    CategoryPage,
    Footer,
    Header,
  },
  name: "category-page",

  data() {
    return {};
  },

  methods: {},
};
</script>
<style lang="css"></style>
