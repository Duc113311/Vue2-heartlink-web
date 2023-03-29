<template>
  <div class="w-full h-full bg-filter">
    <div class="w-full h-full p-5">
      <div class="header-bg w-full flex items-center">
        <div class="">
          <BhBack></BhBack>
        </div>
        <div class="w-5/6 flex justify-center">Blind Date</div>
      </div>

      <div class="content-bg flex justify-center items-center">
        <OptionPage v-if="show === 'so1'" @update="show = $event"></OptionPage>
      </div>

      <div class="footer-bg">
        <div class="footer">
          <div class="footer01">
            <input
              v-model="show"
              id="so1"
              type="radio"
              name="so"
              value="so1"
              style="display: none"
              checked
            />
            <label for="so1" class="circle">
              <div v-if="show === 'so1'">1</div>
              <div class="circle_v" v-else>✔</div>
            </label>
            <div class="line"></div>
            <input
              v-model="show"
              id="so2"
              type="radio"
              name="so"
              value="so2"
              style="display: none"
            />
            <label for="so2" class="circle">
              <div v-if="show === 'so2' || show === 'so1'">2</div>
              <div class="circle_v" v-else>✔</div>
            </label>
            <div class="line"></div>
            <input
              v-model="show"
              id="so3"
              type="radio"
              name="so"
              value="so3"
              style="display: none"
            />
            <label for="so3" class="circle">
              <div>3</div>
            </label>
          </div>
          <div class="footer02">
            <p :class="{ active: show === 'so1' }">Answer question</p>
            <p :class="{ active: show === 'so2' }">Optimise pairing</p>
            <p :class="{ active: show === 'so3' }">Connecting</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OptionPage from "../../explore/blind-date/fliter-option/option-page";
import BhBack from "../../bh-element-ui/button/bh-back";
export default {
  components: {
    BhBack,
    OptionPage,
  },

  name: "blind-option",

  data() {
    return {
      show: "so1",
    };
  },

  methods: {},
};
</script>

<style lang="css">
.bg-filter {
  background: linear-gradient(to bottom, #81207f, #f06f21);
}
.header-bg {
  height: 15%;
}

.content-bg {
  height: 75%;
}

.footer-bg {
  height: calc(100% - 90%);
}
/* CSS cho phần cuối */
.footer {
  height: 100px;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.circle {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: white;
}
.circle_v {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: #ef632e;
  background-color: white;
}
.footer01 input[type="radio"]:checked + .circle {
  background-color: white;
  color: #ef632e;
}

.footer01 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.line {
  width: 80px;
  height: 2px;
  background-color: #ffa27f;
  margin-left: 10px;
  margin-right: 10px;
}

.footer02 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fffeff;
  color: #feb290;
}

.footer02 p {
  width: 80px;
  margin-left: 32px;
  margin-right: 32px;
  text-align: center;
}
.active {
  color: white;
}
</style>
