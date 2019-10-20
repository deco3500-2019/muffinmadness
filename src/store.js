import Vue from "vue";
import Vuex from "vuex";

import User from "@/DB/user.js";
import Influencers from "@/DB/influencers.js";
import Ingredients from "@/DB/ingredients.js";
import MealPlans from "@/DB/mealPlans.js";
import Recipes from "@/DB/recipes.js";

import { findRecipe, findRecipeById, findIngredientByName;
} from "@/utils/dbConnect.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: User,
    influencers: Influencers,
    ingredients: Ingredients,
    mealPlans: MealPlans,
    recipes: Recipes,
    topline: null,
    userTodaysMeals: {},
    recommendedMeals: {}
  },
  mutations: {
    'SET_TOPLINE_STATE' (state, payload) {
      state.topline = payload;
    },
    'SET_TODAYSMEALS_STATE' (state, payload) {
      state.userTodaysMeals = payload;
    },
    'SET_RECOMMENDEDMEALS_STATE' (state, payload) {
      state.recommendedMeals = payload;
    }
  },
  actions: {
    setToplineState: ({ commit }, payload) => {
      commit('SET_TOPLINE_STATE', payload);
    },
    setTodaysMeals: ({ commit }, payload) => {
      commit('SET_TODAYSMEALS_STATE', payload);
    },
    setRecommendedMeals: ({ commit }, payload) => {
      commit('SET_RECOMMENDEDMEALS_STATE', payload);
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
    getIngredientByName: (state) => (name) => {
      return findIngredientByName(state.ingredients, name);
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
    getRecipeById: (state) => (id) => {
      return findRecipeById(state.recipes, id);
    },
    getToplineState: state => {
      return state.topline;
    },
    getTodaysMeals: state => {
      return state.userTodaysMeals;
    },
    getRecommendedMeals: state => {
      return state.recommendedMeals;
    }
  }
});
