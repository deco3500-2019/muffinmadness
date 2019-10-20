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
      path: "/mealplan",
      name: "mealplan",
      component: () => import("./views/Mealplan.vue")
    },
    {
      path: "/recipe",
      name: "recipe",
      props: true,
      component: () => import("./views/Recipe.vue")
    },
    {
      path: "/influencer-mealplan",
      name: "influencer-mealplan",
      props: true,
      component: () => import("./views/InfluencerMealplan.vue")
    },
    {
      path: "/ingredients",
      name: "ingredients",
      component: () => import("./views/Ingredients.vue")
    }
  ]
});
