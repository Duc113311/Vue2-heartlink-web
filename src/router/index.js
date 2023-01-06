import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/login/index.vue";
import ExplorePage from "../views/explore/index.vue";
import ExploreVerified from "../views/explore/verified/photo-dialog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login-page",
    component: LoginPage,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/home",
    name: "home-page",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "home-page" */ "../views/home/index.vue"),
  },

  {
    path: "/explore",
    name: "explore-page",
    component: ExplorePage,
    children: [
      {
        path: "",
        name: "dashboard-page",
        component: () =>
          import(
            /* webpackChunkName: "home-page" */ "../views/explore/dashboard/dashboard-page.vue"
          ),
      },
      {
        path: "photo-dialog",
        name: "photo-dialog",
        component: ExploreVerified,
      },

      {
        path: "find-scream/:nameScream",
        name: "find-page",
        component: () =>
          import(
            /* webpackChunkName: "find-page" */ "../views/explore/find-people/find-page.vue"
          ),
      },
    ],
  },

  {
    path: "/photo-dialog",
    name: "photo-dialog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ExploreVerified,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
