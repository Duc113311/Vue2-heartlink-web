<template>
  <div class="w-full h-full home-page overflow-hidden p-2">
    <Header></Header>

    <div class="w-full border-collapse body-explore overflow-y-auto">
      <!-- Verified -->
      <div class="w-full h-44 relative cursor-pointer">
        <div class="title-verified text-2xl absolute p-12">Verified photo</div>
        <img
          @click="onClickVerified"
          src="@/assets/image-dating/explore_verified_photo (1).png"
          alt=""
        />
      </div>
      <div class="w-full text-description-no-padding pt-2 pb-4">
        Let's find people same with your vibe...
      </div>

      <div class="w-full option-find">
        <div class="w-full grid gap-2 grid-explore mb-2">
          <div class="relative cursor-pointer" @click="onClickFindPage">
            <div class="w-full absolute p-2 top-40 text-center">
              <div class="countdown"></div>
              <div class="title-date title-option">Blind Date</div>
              <div class="text-describe mt-5">
                Open hour 6pm - 12 pm <br />
                (Local time)
              </div>
            </div>
            <img
              class="imgae-explore w-full rounded-lg"
              src="@/assets/image-dating/explore_blind_date (1).png"
              alt=""
              srcset=""
            />
          </div>
          <div class="relative cursor-pointer">
            <div class="w-full absolute p-2 top-40 text-center">
              <div class="countdown"></div>
              <div class="title-date title-option">Let's be Friend</div>
              <div class="text-describe mt-5">Find your best friend here</div>
            </div>
            <img
              class="imgae-explore w-full rounded-lg"
              src="@/assets/image-dating/explore_let_be_friend (1).png"
              alt=""
              srcset=""
            />
          </div>
          <div class="relative cursor-pointer">
            <div class="w-full absolute p-2 top-40 text-center">
              <div class="countdown"></div>
              <div class="title-date title-option">Looking for love</div>
              <div class="text-describe mt-5">Find your love here</div>
            </div>
            <img
              class="imgae-explore w-full rounded-lg"
              src="@/assets/image-dating/explore_looking_for_love (1).png"
              alt=""
              srcset=""
            />
          </div>
          <div class="relative cursor-pointer">
            <div class="w-full absolute p-2 top-40 text-center">
              <div class="countdown"></div>
              <div class="title-date title-option">Coffee Date</div>
              <div class="text-describe mt-5">Find your coffee here</div>
            </div>
            <img
              class="imgae-explore w-full rounded-lg"
              src="@/assets/image-dating/explore_coffee_date (1).png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../../../components/layout/header-home/header";
import Footer from "../../../components/layout/footer-home/footer";
export default {
  components: {
    Header,
    Footer,
  },
  name: "dashboard-page",
  data() {
    return {
      nameScream: 1,
      urlVerified: "../../assets/image-dating/explore_verified_photo (1).png",
    };
  },

  methods: {
    onClickVerified() {
      debugger;
      this.$router.push({ path: "/explore/photo-dialog" });
    },

    onClickFindPage() {
      debugger;
      this.$router.replace({
        path: `/explore/find-scream/${this.nameScream}`,
      });
    },
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
