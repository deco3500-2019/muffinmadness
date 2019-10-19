import Vue from "vue";
import Vuex from "vuex";

import User from "@/DB/user.js";
import Influencers from "@/DB/influencers.js";
import Ingredients from "@/DB/ingredients.js";
import MealPlans from "@/DB/mealPlans.js";
import Recipes from "@/DB/recipes.js";

import { findRecipe } from "@/utils/dbConnect.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: User,
    influencers: Influencers,
    ingredients: Ingredients,
    mealPlans: MealPlans,
    recipes: Recipes,
    topline: null
  },
  mutations: {
    'SET_TOPLINE_STATE' (state, payload) {
      state.topline = payload;
    }
  },
  actions: {
    setToplineState: ({ commit }, payload) => {
      commit('SET_TOPLINE_STATE', payload);
    }
  },
  getters: {
    getUser: state => {
      return state.user;
    },
    getInfluencers: state => {
      return state.influencers;
    },
    getIngredients: state => {
      return state.ingredients;
    },
    getMealPlans: state => {
      return state.mealPlans;
    },
    getRecipes: state => {
      return state.recipes;
    },
    getSingularRecipe: (state) => (name) => {
      return findRecipe(state.recipes, name);
    },
    getToplineState: state => {
      return state.topline;
    }
  }
});
