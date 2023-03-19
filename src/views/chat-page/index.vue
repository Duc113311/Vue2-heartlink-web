<template>
  <div class="w-full h-full relative bg-theme p-5">
    <div class="chat w-full h-full">
      <div class="header-chat">
        <!-- <BhBack></BhBack>
        <div class="info">
          <img :src="userInfo.avatar" alt="img-nguoi-chat" />
          <p>{{ userInfo.name }}</p>
          <img class="confirm" :src="userInfo.confirm" alt="1" />
        </div>
        <div class="utilities">
          <img src="../../assets/icon/ic_video_call.svg" alt="icon-camera" />
          <img src="../../assets/icon/ic_safety (1).svg" alt="icon-report" />
        </div> -->
      </div>

      <div class="content-chat" ref="chatContainer">
        <!-- <div v-for="(message, index) in messages" :key="index">
          <div
            class="content-me"
            v-if="
              message.sender === 'user1' &&
              (message.content !== '' || message.url)
            "
          >
            <div class="time">{{ message.timestamp }}</div>
            <div v-if="message.url">
              <div
                v-for="(i, index) in message.url"
                :key="index"
                class="img_message_me"
              >
                <img :src="i" alt="" />
              </div>
            </div>
            <div v-if="message.content !== ''">
              <div v-if="message.content !== '👋'" class="message-me">
                {{ message.content }}
              </div>
              <div v-else class="message-wave">
                {{ message.content }}
              </div>
            </div>
          </div>
          <div
            v-if="
              message.sender === 'user3' &&
              (message.content !== '' || message.url)
            "
            class="content-your"
          >
            <div class="time">{{ message.timestamp }}</div>
            <div style="display: flex">
              <img class="avatar_your" :src="userInfo.avatar" alt="" />
              <div style="display: colump">
                <div v-if="message.url">
                  <div
                    v-for="(i, index) in message.url"
                    :key="index"
                    class="img_message_you"
                  >
                    <img :src="i" alt="" />
                  </div>
                </div>
                <div v-if="message.content !== ''">
                  <div v-if="message.content !== '👋'" class="message_your">
                    {{ message.content }}
                  </div>
                  <div v-else class="message-wave">
                    {{ message.content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>

      <div class="footer-chat">
        <!-- <div class="gif-upload">
          <label for="gif-upload">GIF</label>
          <input
            type="file"
            id="gif-upload"
            multiple
            name="gif-upload"
            ref="fileInput"
            @change="previewImages($event)"
          />
        </div>
        <div class="chat-input">
          <input
            ref="input"
            type="text"
            placeholder="Nhập tin nhắn..."
            v-model="newMessage"
            @keyup.enter="sendMessage()"
          />
         
        </div>
        <p class="send-btn" @click="hand()">👋</p> -->
      </div>
    </div>
  </div>
</template>

<script>
// import BhBack from "../../components/bh-element-ui/button/bh-back";
// import { Picker } from "emoji-mart-vue";

export default {
  name: "chat-page",
  components: {
    // BhBack,
    // Picker,
  },
  data() {
    return {
      userInfo: {
        name: "girl friend",
        avatar: require("@/assets/image-dating/0659_photo-1-163186806531842640671.jpg"),
        confirm: require("@/assets/icon/ic_verified_enable.svg"),
      },

      messages: [
        {
          sender: "user1",
          content: "Hello",
          timestamp: "",
          url: "",
        },
        {
          sender: "user3",
          content: "Hello",
          timestamp: "",
          url: "",
        },
      ],
    };
  },

  methods: {
    previewImages() {
      debugger;
    },
  },

  created() {},
};
</script>

<style lang="css">
.bg-theme {
  background-color: #242a38;
}

.header-chat {
  height: 10%;
}

.content-chat {
  height: 80%;
}

.footer-chat {
  height: calc(100% - 90%);
}
.header {
  display: flex;
  /* Thêm thuộc tính hiển thị flex để các phần tử con trong header có thể dễ dàng được căn chỉnh */
  align-items: center;
  /* Căn giữa các phần tử theo chiều dọc */
  padding: 10px;
  /* Thêm phần đệm giữa nội dung và khung của header */
  border-bottom: 1px solid #3c3f50;
  /* Thêm đường viền dưới cùng cho header */
  height: 8%;
}

.info .confirm {
  width: 30px;
  height: 30px;
}

.utilities img {
  width: 30px;
  /* Thêm kích thước cho các biểu tượng tiện ích */
  height: 30px;
  margin-left: 10px;
  /* Thêm phần đệm giữa các biểu tượng tiện ích */
  cursor: pointer;
  /* Thêm hiệu ứng con trỏ tay khi di chuột qua các biểu tượng tiện ích */
  padding-left: 15px;
}

.content-chat::-webkit-scrollbar {
  width: 0px;
  /* Ẩn thanh cuộn mặc định trên Chrome/Safari */
  height: 0px;
}

.content-me {
  margin-top: 20px;
  padding: 10px;
  margin-left: auto;
  width: 50%;
}

.time {
  margin-top: 20px;
  font-size: 15px;
  color: #757a8d;
  text-align: center;
}
.img_message_me img {
  width: 100%;
}

.message-me {
  background-color: #fd5d65;
  border-radius: 20px 0px 20px 20px;
  word-wrap: break-word;
  margin-top: 20px;
  padding: 10px;
}

.message-wave {
  margin-top: 20px;
  text-align: right;
  font-size: 60px;
}

/*Bạn*/
.content-your {
  margin-top: 20px;
  padding: 10px;
  margin-right: auto;
  width: 60%;
}

.avatar_your {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.img_message_you {
  width: 70%;
  margin-top: 20px;
  padding: 10px;
  margin-right: auto;
  display: inline-block;
}

.img_message_you img {
  width: 100%;
}

.message_your {
  width: 100%;
  background-color: white;
  border-radius: 0px 20px 20px 20px;
  margin-top: 20px;
  padding: 10px;
  margin-right: auto;
  word-wrap: break-word;
  color: black;
  display: inline-block;
}
.message-wave {
  margin-top: 20px;
  text-align: right;
  font-size: 60px;
}
</style>
