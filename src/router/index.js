import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // Test các control
  {
    path: "/control",
    name: "control-page",
    component: () =>
      import(/* webpackChunkName: "home-page" */ "../views/control/index.vue"),
  },
  // Login PhoneNumber - Google - Facebook
  {
    path: "/",
    name: "login-page",
    component: () =>
      import(/* webpackChunkName: "login-page" */ "../views/login/index.vue"),
  },
  {
    path: "/login",
    name: "type-login",
    component: () =>
      import(
        /* webpackChunkName: "login-page" */ "../views/login/type-login/index.vue"
      ),

    children: [
      {
        path: "/email",
        name: "phone-number",
        component: () =>
          import(
            /* webpackChunkName: "phone-number" */ "../views/login/type-login/phone-number/index.vue"
          ),
      },
      {
        path: "/",
        name: "email-page",
        component: () =>
          import(
            /* webpackChunkName: "email-page" */ "../views/login/type-login/form-email/email-page.vue"
          ),
      },
    ],
  },

  // Create account user-profile
  {
    path: "/create-user",
    name: "create-profile",
    component: () =>
      import(
        /* webpackChunkName: "create-profile" */ "../views/create-profile/index.vue"
      ),
  },

  // Page Home
  {
    path: "/home",
    name: "home-page",
    component: () =>
      import(
        /* webpackChunkName: "home-page" */ "../views/home-page/index.vue"
      ),
  },

  // Page explore
  {
    path: "/explore",
    name: "explore-page",
    component: () =>
      import(
        /* webpackChunkName: "explore-page" */ "../views/explore-page/index.vue"
      ),

    children: [
      // Dashboard
      {
        path: "/",
        name: "category-page",
        component: () =>
          import(
            /* webpackChunkName: "category-page" */ "../views/explore-page/category/index.vue"
          ),
      },
      // Verified user
      {
        path: "/verified",
        name: "verified-page",
        component: () =>
          import(
            /* webpackChunkName: "verified-page" */ "../views/explore-page/verified/verified-page.vue"
          ),
      },

      // Blind date
      {
        path: "/blind-date",
        name: "blind-date",
        component: () =>
          import(
            /* webpackChunkName: "blind-date" */ "../views/explore-page/date/blind-date.vue"
          ),
      },
    ],
  },

  // Page like & topic
  {
    path: "/like-topic",
    name: "like-topic-page",
    component: () =>
      import(
        /* webpackChunkName: "like-topic-page" */ "../views/like-topic/index.vue"
      ),
  },

  // Page message
  {
    path: "/message",
    name: "message-page",
    component: () =>
      import(
        /* webpackChunkName: "message-page" */ "../views/message-page/index.vue"
      ),

    children: [
      // Chat with user
      {
        path: "/chat/:userId",
        name: "chat-page",
        component: () =>
          import(
            /* webpackChunkName: "chat-page" */ "../views/message-page/chat-page/index.vue"
          ),
      },
    ],
  },

  // Page Profile - Setting - Update
  {
    path: "/profile",
    name: "profile-page",
    component: () =>
      import(
        /* webpackChunkName: "profile-page" */ "../views/profile-page/index.vue"
      ),

    children: [
      // Default page
      {
        path: "/",
        name: "default-page",
        component: () =>
          import(
            /* webpackChunkName: "default-page" */ "../views/profile-page/default-page/default.vue"
          ),
      },
      // Detail profile user admin
      {
        path: "/admin/:userId",
        name: "detail-admin",
        component: () =>
          import(
            /* webpackChunkName: "detail-admin" */ "../views/profile-page/detail-admin/index.vue"
          ),
      },
      // edit profile
      {
        path: "/edit-profile",
        name: "edit-profile",
        component: () =>
          import(
            /* webpackChunkName: "edit-profile" */ "../views/profile-page/edit-profile/index.vue"
          ),
      },
      // Setting profile
      {
        path: "/setting",
        name: "setting",
        component: () =>
          import(
            /* webpackChunkName: "setting" */ "../views/profile-page/setting/index.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
