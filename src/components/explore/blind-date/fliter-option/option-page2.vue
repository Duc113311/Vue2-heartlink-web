<template>
  <div class="w-full content1">
    <h4>Bữa tối tuyệt nhất là ở:</h4>
    <input id="01" type="radio" name="dating" value="smoker" />
    <label @click="getvalue()" for="01" class="label-radio">
      Trong nhà hàng
    </label>
    <input id="02" type="radio" name="dating" value="not-lover" />
    <label @click="getvalue()" for="02" class="label-radio">
      Trên khay và xem tivi
    </label>
    <input id="03" type="radio" name="dating" value="not-romantic" />
    <label @click="getvalue()" for="03" class="label-radio">
      Trên giường
    </label>
  </div>
</template>

<script>
export default {
  name: "option-page2",

  data() {
    return {};
  },

  methods: {
    getvalue() {
      setTimeout(() => this.$emit("update", "so3"), 500);
    },
  },
};
</script>

<style lang="css">
.content1 {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;
  background-color: #3e2b3e;
  padding-bottom: 30px;
  border-radius: 10px;
  color: #e4dee8;
  margin-top: 30px;
}
.content1 h4 {
  margin-bottom: 50px;
  margin-top: 40px;
}
.content1 label {
  color: #e4dee8;
  border-radius: 15px;
  /* bo góc 10px */
  padding: 20px;
  /* thêm padding để tăng kích thước nút */
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 15px;
  background-color: #3e2b3e;
  border: 1px solid white;
}
.content1 input[type="radio"] {
  display: none;
}
.content1 input[type="radio"]:checked + .label-radio {
  border-color: #fd5d65;
  color: #fd5d65;
}
</style>
