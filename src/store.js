import Vue from "vue";
import Vuex from "vuex";

import Influencers from "@/DB/influencers.js";
import Ingredients from "@/DB/ingredients.js";
import MealPlans from "@/DB/mealPlans.js";
import Recipes from "@/DB/recipes.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    getToplineState: state => {
      return state.topline;
    }
  }
});
