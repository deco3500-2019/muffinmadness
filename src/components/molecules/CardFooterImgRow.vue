<template>
  <div class="card-footer-img-row">
    <p v-if="topline" class="overline">{{ (info.hasOwnProperty('ingredients') ? 'Ingredients' : 'Meals') }}</p>
    <div v-if="topline" class="ingredient-row">
      <div 
      v-for="(item, index) in info.ingredients.slice(0,7)"
      :key="index">
        <Ingredient v-if="index < 6" :info="item" />
        <Ingredient v-else :info="[info.ingredients.length-6]" />
      </div>
    </div>
    <div v-else class="btn-row">
      <button class="button">Follow</button>
    </div>
  </div>
</template>

<script>
import Ingredient from "@/components/atoms/Ingredient.vue";

export default {
  components: {
    Ingredient
  },
  props: {
    info: {
      type: Object
    }
  },
  data() {
    return {
      topline: null
    }
  },
  created() {
    this.topline = this.$store.getters.getToplineState;
  }
}
</script>

<style scoped>
.ingredient-row, .btn-row {
  padding-left: 0;
  padding-top: 0.35rem;
  display: flex;
  border-top: 1px solid lightgray;
}
.btn-row {
  height: 50px;
  justify-content: center;
  align-items: center;
}
.btn-row > .button {
  width: 100%;
  height: 100%;
}
.card-footer-img-row {
  padding-top: 0;
}
.card-footer-img-row > p {
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}
</style>