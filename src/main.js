import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "intl-tel-input/build/css/intlTelInput.css";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
