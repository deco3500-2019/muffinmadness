<template>
  <div class="mealplan">
    <canvas id="myChart"></canvas>
    <h5>This week 
      <span>
        <i v-if="show" class="material-icons"></i>
        <i v-else class="material-icons"></i>
      </span>
    </h5>
    <div>
      <CardRow name="Monday" :influencerMealplan="false" />
      <CardRow name="Tuesday" :influencerMealplan="false" />
      <CardRow name="Wednesday" :influencerMealplan="false" />
      <CardRow name="Thursday" :influencerMealplan="false" />
      <CardRow name="Friday" :influencerMealplan="false" />
      <CardRow name="Saturday" :influencerMealplan="false" />
      <CardRow name="Sunday" :influencerMealplan="false" />
    </div>
  </div>
</template>

<script>
import CardRow from "@/components/organisms/CardRow.vue";

export default {
  name: "mealplan",
  components: {
    CardRow
  },
  data() {
    return {
      show: true
    }
  },
  mounted() {
    let currentMealPlanRecipes = this.$store.getters.getMealPlans[0].recipes;
    let data = this.setMealPlanData(currentMealPlanRecipes);

    console.log(data);

    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
    
      // The data for our dataset
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Health',
            backgroundColor: 'rgba(255, 90, 90, 0)',
            borderColor: 'rgb(255, 50, 50)',
            data: data[0]
        }, 
        {
            label: 'Sustainability',
            backgroundColor: 'rgba(255, 0, 0, 0)',
            borderColor: 'rgb(34,139,34)',
            data: data[1]
        }]
      }
    });
  },
  methods: {
    setMealPlanData(currentMealPlanRecipes){
      let data = [[],[]];
      for(let [index, day] of currentMealPlanRecipes.entries()){
        let todayData = [[],[]];
        for(let recipeId of day){
          let recipe = this.$store.getters.getRecipeById(recipeId);
          todayData[0].push(recipe.infoSquares.health);
          todayData[1].push(recipe.infoSquares.sustainability);
        }
        let sumHealth = 0;
        let sumSustain = 0;
        for(index in todayData[0]){
          sumHealth += todayData[0][index];
          sumSustain += todayData[1][index];
          console.log(sumHealth);
        }

        data[0].push(sumHealth/todayData[0].length);
        data[1].push(sumSustain/todayData[1].length);
      }
      return data;
    }
  }
}
</script>
