<template>
  <div class="card-header-top">
    <p class="overline">Breakfast</p>
    <div class="card-header-cta-group">
      <i @click="toggleRecipeInMealplan" v-if="recipeNotInMealplan" class="material-icons">remove_circle</i>
      <i @click="toggleRecipeInMealplan" v-else class="material-icons">add_circle_outline</i>
      <i @click="toggleAddToCart" v-if="!itemsInCart" class="material-icons">add_shopping_cart</i>
      <i @click="toggleAddToCart" v-else class="material-icons">remove_shopping_cart</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipeNotInMealplan: false,
      itemsInCart: false
    }
  },
  methods: {
    toggleRecipeInMealplan() {
      this.recipeNotInMealplan = !this.recipeNotInMealplan
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