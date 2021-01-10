import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import Feed from "../views/Feed.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/feed",
    name: "Feed",
    component: Feed,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  // Check if User is logged in
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;
