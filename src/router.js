import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/page1",
      name: "page1",
      component: () =>
        import(/* webpackChunkName: "page1" */ "./views/Page1.vue")
    },
    {
      path: "/page2",
      name: "page2",
      component: () =>
        import(/* webpackChunkName: "page2" */ "./views/Page2.vue")
    }
  ]
});
