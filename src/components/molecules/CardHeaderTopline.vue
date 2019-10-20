<template>
  <div class="card-header-top">
    <p class="overline">{{ info.recipeType }}</p>
    <div class="card-header-cta-group">
      <i @click="toggleRecipeInMealplan" v-if="recipeNotInMealplan" class="material-icons">remove_circle</i>
      <i @click="toggleRecipeInMealplan" v-else class="material-icons">add_circle_outline</i>
      <i @click="toggleAddToCart" v-if="!itemsInCart" class="material-icons">add_shopping_cart</i>
      <i @click="toggleAddToCart" v-else class="material-icons">remove_shopping_cart</i>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
  props: {
    info: Object,
    index: Number,
    list: Array
  },
  data() {
    return {
      recipeNotInMealplan: this.info.isInMealPlan,
      itemsInCart: this.info.isInCart
    }
  },
  methods: {
    async toggleRecipeInMealplan() {
      if (this.list[this.index].cardType === "Today's meal plan") {
        this.list.splice(this.index, 1, 'empty card');
      } else if (this.list[this.index].cardType === "Recommended meal plans") {
        this.list.splice(this.index, 1)
      } else {
        let meals = this.$store.getters.getTodaysMeals;
        console.log(meals);

        for (let [index, item] of meals.entries()) {
          console.log(index);
          if (item === 'empty card') {
            this.list[this.index].header.topline.isInMealPlan = true;
            this.list[this.index].cardType = "Today's meal plan";
            meals.splice(index, 1, this.list[this.index]);
            this.list.splice(this.index, 1)
            break;
          }
        }  
      }
    },
    toggleAddToCart() {
      this.itemsInCart = !this.itemsInCart;
    }
  }
}
</script>

<style scoped>
.card-header-top {
  padding-bottom: 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.card-header-cta-group > *:first-child {
  margin-right: 0.75rem;
}
</style>