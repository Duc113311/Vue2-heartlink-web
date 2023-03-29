<template>
  <div class="bg-image w-full h-full">
    <div class="w-full h-full p-5">
      <div class="header-bg w-full flex items-center">
        <BhBack></BhBack>
      </div>
      <div class="content-bg justify-center flex items-center">
        <div class="w-full text-center">
          <!-- Nội dung ở đây -->
          <div class="flex justify-center items-center w-full mb-8">
            <div class="content w-96">
              <i class="fa-solid fa-circle-question icon-date"></i>
              <div class="text-description">Chia sẻ quan điểm</div>
              <p class="text-note">
                Trả lời các câu hỏi hóc búa thay câu mở lời! Các câu trả lời của
                bạn sẽ hiển thị trên giao diện Blind Date và có thể được dùng để
                bắt đầu cuộc trò chuyện
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center w-full mb-8">
            <div class="content w-96">
              <i class="fa-solid fa-circle-question icon-date"></i>
              <div class="text-description">Hãy chuẩn bị sẵn sàng</div>
              <p class="text-note">
                Các câu hỏi và thời gian chat được giới hạn, nên hãy nghĩ và trả
                lời nhanh nhé
              </p>
            </div>
          </div>
          <div class="flex justify-center items-center w-full">
            <div class="content w-96">
              <i class="fa-solid fa-circle-question icon-date"></i>
              <div class="text-description">Tương hợp để xem hồ sơ</div>
              <p class="text-note">
                Sau khi chat xong, bạn sẽ thấy hồ sơ của người ấy nếu cả hai hợp
                nhau
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bg w-full">
        <div><BhJoin></BhJoin></div>
        <div><BhNothank></BhNothank></div>
      </div>
    </div>
  </div>
</template>

<script>
import BhNothank from "../../../components/bh-element-ui/button/bh-nothank";
import BhJoin from "../../../components/bh-element-ui/button/bh-join";
import BhBack from "../../../components/bh-element-ui/button/bh-back";
export default {
  name: "blind-page",
  components: {
    BhNothank,
    BhJoin,
    BhBack,
  },
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="css">
.bg-image {
  background-image: url("@/assets/image-dating/bg_blind_date\ \(2\).png");
  z-index: 99;
  padding-right: 0px !important;
  padding-left: 0px !important;
  background-size: cover;
  position: relative;
}

.header-bg {
  height: 10%;
}

.content-bg {
  height: 75%;
}

.footer-bg {
  height: calc(100% - 85%);
}

.icon-date {
  font-size: 34px;
}
</style>
