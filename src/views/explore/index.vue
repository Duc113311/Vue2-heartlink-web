<template>
  <div class="home-page w-full h-full">
    <!-- explore -->
    <div class="w-full h-full home-page overflow-hidden p-2">
      <Header></Header>

      <div class="w-full border-collapse body-explore h-full overflow-y-auto">
        <!-- Verified -->
        <div class="w-full h-44">
          <div class="title-verified text-2xl absolute p-12">
            Verified photo
          </div>
          <img
            src="@/assets/image-dating/explore_verified_photo (1).png"
            alt=""
          />
        </div>
        <div class="w-full text-description-no-padding pt-2 pb-4">
          Let's find people same with your vibe...
        </div>

        <div class="w-full option-find">
          <div class="w-full grid gap-2 grid-explore">
            <img
              class="imgae-explore w-full rounded-lg"
              src="@/assets/image-dating/explore_blind_date (1).png"
              alt=""
              srcset=""
            /><img
              class="imgae-explore w-full rounded-lg"
              src="@/assets/image-dating/explore_let_be_friend (1).png"
              alt=""
              srcset=""
            /><img
              class="imgae-explore w-full rounded-lg"
              src="@/assets/image-dating/explore_looking_for_love (1).png"
              alt=""
              srcset=""
            /><img
              class="imgae-explore w-full rounded-lg"
              src="@/assets/image-dating/explore_coffee_date (1).png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "../../components/layout/footer-home/footer";
import Header from "../../components/layout/header-home/header";
export default {
  components: {
    Footer,
    Header,
  },
  name: "explore-page",

  data() {
    return {
      urlVerified: "../../assets/image-dating/explore_verified_photo (1).png",
    };
  },
};
</script>

<style lang="css">
.home-page {
  background-color: #382e41;
}
.home-page::-webkit-scrollbar {
  display: none;
}

.body-page-home {
  height: 82%;
}

.title-logo {
  height: 8%;
}

.body-page {
  background-repeat: no-repeat;
  background-size: cover;
}
.title-boy {
  grid-template-columns: 5fr 1fr;
}

.bt-img {
  background-color: white;
  width: 70px;
}

.bt-option {
  grid-template-columns: auto auto auto auto auto;
  gap: 35px;
}

.title-page {
  background-color: #181c274f;
  background-image: linear-gradient(to top, #1e23334a, #230f1f7d);
  background-attachment: scroll;
  height: 24%;
}

.footer-body {
  height: calc(100% - 91%);
  justify-content: center;
  gap: 95px;
  align-items: center;
  border-top: 1px solid #373e50;
  margin-top: 10px;
}

.body-explore {
  height: 83%;
}

.bg-verified {
  background-repeat: no-repeat;
  height: 23%;
  width: 100%;
  background-position: center;
  background-size: contain;
}

.grid-explore {
  grid-template-columns: 1fr 1fr;
}

.body-explore::-webkit-scrollbar {
  display: none;
}
</style>
