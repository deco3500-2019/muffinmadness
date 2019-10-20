<template>
  <div class="recipe">
    <div class="nav-topbar" @click="goBack">
      <button class="button"><i class="material-icons">arrow_back_ios</i><p class="overline">Go back</p></button>
    </div>
    
    <Card id="recipe-card" :info="recipeData" :allData="recipeData" />
    <div class="recipe-bottom">
      <div class="button-row">
        <button class="button filled-button">add to plan</button>
      </div>
      <h5>Ingredients</h5>
      <ul
      v-for="(item, i) in recipeExtendedData.ingredients"
      :key="i">
        <li>{{ item[0] }} {{ item[1] }}</li>
      </ul>
      <h5>Steps</h5>
      <div class="steps"
      v-for="(step, j) in recipeExtendedData.steps"
      :key="j">
        <div><span class="step-number-circle"><p>{{ j+1 }}</p></span></div>
        <div><p>{{ step }}</p></div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/organisms/Card.vue";

export default {
  components: {
    Card
  },
  props: {
    name: String,
    recipeData: Object
  },
  data() {
    return {
      recipeExtendedData: {}
    }
  },
  created() { 
    this.recipeData.image = '';
    this.recipeData.cardType = 'recipe';
    this.recipeExtendedData = this.$store.getters.getSingularRecipe(this.name);
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#recipe-card {
  margin: 0;
  width: 100%;
}
.nav-topbar {
  display: flex;
  align-items: center;
}
.nav-topbar > button {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.recipe-bottom {
  padding: 0.75rem;
}
.recipe-bottom h5 {
  margin: 0;
  margin-top: 1rem;
}
.button-row {
  display: flex;
  justify-content: center;
}
.button-row > .button {
  padding-left: 3.75rem;
  padding-right: 3.75rem;
}
.steps {
  display: flex;
}
.steps > div:first-of-type {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
}
.steps > div:last-of-type {
  width: 90%;
}
.step-number-circle {
  background: var(--secondary-bg-color);
  padding: 0.25rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.step-number-circle > p {
  margin: 0;
  font-weight: bold;
}
</style>
