<template>
  <div class="card-row-outer">
    <p class="subtitle1">{{ name }}</p>
    <div class="card-row" 
    v-for="(card, index) in info"
    :key="index">
      <Card :info="{x: 1}" />
    </div>
  </div>
</template>

<script>
import Card from "@/components/organisms/Card.vue";

import { extractMealData } from '@/utils/dbConnect.js';

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

    // chooses the different content of the data variable based on card type
    switch(this.name) {
      case "Today's meal plan":
        this.info = extractMealData([
          this.user, 
          this.influencers, 
          this.ingredients, 
          this.mealPlans, 
          this.recipes
          ]);
        break;
      case "Recommended meal plans":
        // code block
        break;
      case "Recommended dishes":
      // code block
        break;
      case "Trending users to follow":
      // code block  
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