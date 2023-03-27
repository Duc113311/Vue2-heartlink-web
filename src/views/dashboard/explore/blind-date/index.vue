<template>
  <div class="main-frame">
    <div class="header">
      <BhBack></BhBack>
    </div>
    <div class="content">
      <!-- Nội dung ở đây -->
      <div class="content-1">
        <i class="fa-solid fa-circle-question"></i>
        <h3>Chia sẻ quan điểm</h3>
        <p>
          Trả lời các câu hỏi hóc búa thay câu mở lời! Các câu trả lời của bạn
          sẽ hiển thị trên giao diện Blind Date và có thể được dùng để bắt đầu
          cuộc trò chuyện
        </p>
      </div>
      <div class="content-1">
        <i class="fa-solid fa-circle-quarter-stroke"></i>
        <h3>Hãy chuẩn bị sẵn sàng</h3>
        <p>
          Các câu hỏi và thời gian chat được giới hạn, nên hãy nghĩ và trả lời
          nhanh nhé
        </p>
      </div>
      <div class="content-1">
        <i class="fa-solid fa-heart"></i>
        <h3>Tương hợp để xem hồ sơ</h3>
        <p>
          sau khi chat xong, bạn sẽ thấy hồ sơ của người ấy nếu cả hai hợp nhau
        </p>
      </div>
    </div>
    <div class="footer">
      <button class="continue-button">Join now</button>
      <p>NO THANKS</p>
    </div>
  </div>
</template>

<script>
import BhBack from "../../../../components/bh-element-ui/button/bh-back";
export default {
  components: { BhBack },
  name: "blind-date",

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css">
.main-frame {
  width: 500px;
  height: 932px;
  margin: 20px auto;
  /* căn giữa và cách viền 20px */
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  background-image: url("../../../../assets/image-dating/explore_blind_date\ \(1\).png");
  background-size: cover;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #fffeff;
}

/* CSS cho phần đầu */
.header {
  margin-top: 30px;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.header img {
  width: 40px;
  height: 40px;
}
/* CSS cho phần giữa */
.content {
  height: 782px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
.content-1 {
  width: 80%;
  align-items: center;
  text-align: center;
}
.content img {
  width: 40px;
  height: 40px;
  filter: invert(1);
}
/* CSS cho phần cuối */
.footer {
  height: 100px;
  text-align: center;
  /* căn giữa nút */
  padding: 10px;
  margin-bottom: 50px;
}
.continue-button {
  height: 50px;
  width: 80%;
  background-color: #fd5d65; /* màu nền xanh */
  color: #fff; /* màu chữ trắng */
  border: none; /* không có đường viền */
  border-radius: 10px; /* bo góc 10px */
  padding: 10px 20px; /* thêm padding để tăng kích thước nút */
  font-size: 20px; /* kích thước chữ */
  cursor: pointer; /* đổi con trỏ chuột thành hình tay khi di chuột qua nút */
  transition: all 0.3s ease-in-out; /* hiệu ứng chuyển đổi mượt mà */
}
.footer p {
  margin-top: 30px;
}
</style>
