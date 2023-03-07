<template>
  <div class="w-full h-full relative">
    <div class="w-full option-like flex h-20 items-center p-5">
      <el-popover placement="top" width="160" v-model="visible">
        <div class="w-full h-full p-10">
          <div class="w-full h-5/6">
            <div class="w-full padding-title">Filter</div>
            <div class="w-full">
              <div
                class="w-full flex justify-between items-center padding-describe"
              >
                <div>Maximum distance</div>
                <div>{{ valueLocation }}km +</div>
              </div>
              <div class="w-full">
                <el-slider v-model="valueLocation" :step="10"> </el-slider>
              </div>
            </div>
            <div class="w-full">
              <div
                class="w-full flex justify-between items-center padding-describe"
              >
                <div>Age range</div>
                <div>{{ valueAge }}km +</div>
              </div>
              <div class="w-full">
                <el-slider v-model="valueAge" range show-stops :max="10">
                </el-slider>
              </div>
            </div>
          </div>
          <div class="h-1/6 text-right m-0">
            <el-button size="mini" type="text" @click="visible = false"
              >cancel</el-button
            >
            <el-button type="primary" size="mini" @click="visible = false"
              >confirm</el-button
            >
          </div>
        </div>

        <div
          class="oftion-interests p-2 mr-3 w-12 h-11"
          slot="reference"
          @click="onShowFilterLike()"
        >
          <img src="@/assets/image-dating/ic_filter.svg" width="30" alt="" />
        </div>
      </el-popover>

      <div class="flex justify-center">
        <span v-for="(item, index) in listIntersts" :key="index">
          <button
            :id="index"
            class="oftion-interests mr-3 mb-3 p-2 text-white"
            size="large"
          >
            {{ item }}
          </button>
        </span>
      </div>
    </div>

    <div
      class="w-full flex items-center justify-center p-2 description-no-padding"
    >
      <span>Upgrade to Gold to see people who are interested in you</span>
    </div>
    <div class="w-full h-full p-3 board">
      <div class="grid items-center list-likes h-full">
        <div class="item-user m-3 relative overflow-hidden">
          <div class="image absolute bottom-0 w-full p-4 z-10 text-white">
            <div class="name">Kiều Kiều , <span>18</span></div>
            <div class="flex items-center">
              <BhActivateLike></BhActivateLike>
              Recently active
            </div>
          </div>
          <div class="bg-shadow w-full h-full"></div>
          <div
            class="bg-background-shadow absolute bottom-0 w-full h-full"
          ></div>
        </div>
        <div class="item-user m-3 relative overflow-hidden">
          <div class="image absolute bottom-0 w-full p-4 z-10 text-white">
            <div class="name">Thu Anh , <span>22</span></div>
            <div class="flex items-center">
              <BhActivateLike></BhActivateLike>
              Recently active
            </div>
          </div>
          <div class="bg-shadow w-full h-full"></div>
          <div
            class="bg-background-shadow absolute bottom-0 w-full h-full"
          ></div>
        </div>
        <div class="item-user m-3 relative overflow-hidden">
          <div class="image absolute bottom-0 w-full p-4 z-10 text-white">
            <div class="name">Trang Hà , <span>25</span></div>
            <div class="flex items-center">
              <BhActivateLike></BhActivateLike>
              Recently active
            </div>
          </div>
          <div class="bg-shadow w-full h-full"></div>
          <div
            class="bg-background-shadow absolute bottom-0 w-full h-full"
          ></div>
        </div>
      </div>
    </div>
    <div class="absolute w-full bottom-0 z-10 mb-14">
      <BhSeeLike></BhSeeLike>
    </div>
  </div>
</template>

<script>
import BhActivateLike from "../../bh-element-ui/button/bh-activateLike";
import BhSeeLike from "../../bh-element-ui/button/bh-seeLike";
export default {
  components: {
    BhActivateLike,
    BhSeeLike,
  },
  name: "people-likes",

  data() {
    return {
      listIntersts: ["Reading", "Car", "Dog", "Music", "Art"],
      visible: false,
      valueLocation: "",
      valueAge: [4, 8],
    };
  },

  methods: {},
};
</script>

<style lang="css">
.oftion-interests:hover {
  background-color: #5b566b;
  color: white;
  border: 1px solid white;
}

.oftion-interests {
  border: 1.5px solid white;
  border-radius: 8px;
}

.option-like {
  align-items: revert;
}

.list-likes {
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.board {
  height: 86%;
}
.item-user {
  width: 90%;
  height: 93%;
  border-radius: 10px;
  background-image: url("../../../assets/image-dating/uikoria.jpg");
  background-position: center;
  background-size: cover;
}

.bg-shadow {
  background-image: url("../../../assets/image-dating/84x106_5026f25d-07a8-41fa-9ce7-43f80d55a42e.jpg");
  background-position: 50% 100%;
  background-size: auto 100.952%;
}

.bg-background-shadow {
  background: linear-gradient(
    0deg,
    rgb(0 0 0 / 85%) 9%,
    rgb(254 254 254 / 0%) 29%,
    rgb(255 255 255 / 0%) 99%
  );
}

.el-popover {
  width: 52% !important;
  height: 68% !important;
  top: 195px !important;
  left: 215px !important;
  background-color: #434a5d;
  border: none;
  border-radius: 10px;
}

.popper__arrow {
  display: none;
}
</style>
