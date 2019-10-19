<template>
  <div class="card-row-outer">
    <p class="subtitle1">{{ name }}</p>
    <div class="card-row"> 
      <div
      v-for="(card, index) in info"
      :key="index">
        <Card :info="card" />
      </div> 
    </div>
  </div>
</template>

<script>
import Card from "@/components/organisms/Card.vue";

import {
  extractUserMealPlanRecipes,
  extractMealPlanRecipes,
  extractRecommendedDishes,
  extractInfluencers,
  extractMealPlanPageRecipes
  } from '@/utils/dbConnect.js';

export default {
  components: {
    Card
  },
  props: ['name'],
  data() {
    return {
      info: null,
      user: null,
      influencers: null,
      ingredients: null,
      mealPlans: null,
      recipes: null
    }
  },
  created () {
    this.user = this.$store.getters.getUser;
    this.influencers = this.$store.getters.getInfluencers;
    this.ingredients = this.$store.getters.getIngredients;
    this.mealPlans = this.$store.getters.getMealPlans;
    this.recipes = this.$store.getters.getRecipes;

    // chooses the different content of the info variable based on card type
    const payload = [
          this.user,
          this.influencers,
          this.ingredients, 
          this.mealPlans, 
          this.recipes
          ];
    switch(this.name) {
      case "Today's meal plan":
        this.info = extractUserMealPlanRecipes(payload);
        break;
      case "Recommended meal plans":
        // extract reccommendedMealPlansData
        this.info = extractMealPlanRecipes(payload);
        break;
      case "Recommended dishes":
        this.info = extractRecommendedDishes(payload);
        break;
      case "Trending users to follow":
        this.info = extractInfluencers(payload);
        break;
      case "Monday":
        this.info = extractMealPlanPageRecipes(payload, 0);
        break;
      case "Tuesday":
        this.info = extractMealPlanPageRecipes(payload, 1);
        break;
      case "Wednesday":
        this.info = extractMealPlanPageRecipes(payload, 2);
        break;
      case "Thursday":
        this.info = extractMealPlanPageRecipes(payload, 3);
        break;
      case "Friday":
        this.info = extractMealPlanPageRecipes(payload, 4);
        break;
      case "Saturday":
        this.info = extractMealPlanPageRecipes(payload, 5);
        break;
      case "Sunday":
        this.info = extractMealPlanPageRecipes(payload, 6);
        break;
    }
  }
}
</script>

<style>
.card-row-outer {
  padding-left: 0.75rem;
}
.card-row-outer > p {
  margin-bottom: 0.5rem;
}
.card-row {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
}
.card-row::-webkit-scrollbar {
  display: none;
}
.card-row > .card:first-of-type {
  margin-left: 0.1rem;
}
</style>