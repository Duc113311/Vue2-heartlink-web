import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/login/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login-page",
    component: LoginPage,
  },

  {
    path: "/dash-board",
    name: "dash-board",
    component: () =>
      import(
        /* webpackChunkName: "dash-board" */ "../views/dashboard/index.vue"
      ),
    children: [
      // Trang Home
      {
        path: "/",
        name: "home-news",
        component: () =>
          import(
            /* webpackChunkName: "home-news" */ "../views/dashboard/home/index.vue"
          ),
      },
      // Explore
      {
        path: "/explore-new",
        name: "explore-news",
        component: () =>
          import(
            /* webpackChunkName: "explore-news" */ "../views/dashboard/explore/index.vue"
          ),
      },
      // Message
      {
        path: "/message-new",
        name: "message-new",
        component: () =>
          import(
            /* webpackChunkName: "message-new" */ "../views/dashboard/message/index.vue"
          ),
      },
      // Profile
    ],
  },
  // Like and topic
  {
    path: "/like-topic-news",
    name: "like-topic-news",
    component: () =>
      import(
        /* webpackChunkName: "like-topic-news" */ "../views/like-topic/index.vue"
      ),
  },

  // Setting
  {
    path: "/setting",
    name: "setting-page",
    component: () =>
      import(
        /* webpackChunkName: "setting-page" */ "../views/setting/index.vue"
      ),
  },

  // Thêm thông tin user
  {
    path: "/create-user",
    name: "create-profile",
    component: () =>
      import(
        /* webpackChunkName: "create-profile" */ "../views/create-profile/index.vue"
      ),
  },

  {
    path: "/control",
    name: "home-page",
    component: () =>
      import(/* webpackChunkName: "home-page" */ "../views/home/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
