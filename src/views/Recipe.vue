<template>
  <div class="recipe">
    <div>backarrow</div>
    <h1>recipe page</h1>
    <Card id="recipe-card" :info="mockInfo"/>

  </div>
</template>

<script>
import Card from "@/components/organisms/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      mockInfo: {
        cardType: "recipe",
        image: '',
        header: {
          topline: {
            recipeType: 'test',
            isInMealPlan: true,
            isInCart: false
          },
          body: {
            name: 'test',
            infoSquares: [1, 2, 3, 4]
          }
        },
        footer: {
          ingredients: []
        }
      }
    }
  }
}
</script>

<style scoped>
#recipe-card {
  margin: 0;
  width: 100%;
}
</style>
