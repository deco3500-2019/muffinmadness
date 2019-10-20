<template>
  <div class="mealplan">
      <div class="nav-topbar" @click="goBack">
        <button class="button"><i class="material-icons">arrow_back_ios</i><p class="overline">Go back</p></button>
      </div>
      
    <h5 class="top-title">YOUR CURRENT MEALPLAN</h5>
    <canvas id="myChart"></canvas>
    
    <h5 @click="show = !show">This week 
      <span class="icon-box">
        <i v-if="show" class="material-icons">arrow_drop_down</i>
        <i v-else class="material-icons">arrow_right</i>
      </span>
    </h5>
    <div v-if="show">
      <CardRow name="Monday" :influencerMealplan="false" />
      <CardRow name="Tuesday" :influencerMealplan="false" />
      <CardRow name="Wednesday" :influencerMealplan="false" />
      <CardRow name="Thursday" :influencerMealplan="false" />
      <CardRow name="Friday" :influencerMealplan="false" />
      <CardRow name="Saturday" :influencerMealplan="false" />
      <CardRow name="Sunday" :influencerMealplan="false" />
    </div>

    <h5 @click="show2 = !show2">Next week 
      <span class="icon-box">
        <i v-if="show2" class="material-icons">arrow_drop_down</i>
        <i v-else class="material-icons">arrow_right</i>
      </span>
    </h5>
    <p v-if="show2">There are currently no meals to show</p>

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
      show: true,
      show2: false
    }
  },
  mounted() {
    let currentMealPlanRecipes = this.$store.getters.getMealPlans[0].recipes;
    let data = this.setMealPlanData(currentMealPlanRecipes);

    let ctx = document.getElementById('myChart').getContext('2d');
    let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
    
      // The data for our dataset
      data: {
        labels: ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su'],
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
        }, 
        {
            label: '',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 0)',
            data: [0, 5]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              display: true,
              color:'rgba(0,0,0,0)'
            }
          }],
          yAxes: [{
            gridLines: {
              display: true,
              color:'rgba(0,0,0,0)'
            }
          }]
        },
        legend: {
          labels: {
            boxWidth: 1
          }
        }
      }
      
    });
  },
  methods: {
    goBack() {
      this.$router.back();
    },
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
        }

        data[0].push(sumHealth/todayData[0].length);
        data[1].push(sumSustain/todayData[1].length);
      }
      return data;
    }
  }
}
</script>

<style scoped>
.top-title {
  margin-top: 0.75rem;
  margin-left: 0;
  display: flex;
  justify-content: center;
}
.mealplan > h5 {
  margin-left: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
}
.mealplan > p {
  margin-left: 0.75rem;
}
.icon-box {
  display: flex;
  align-items: center;
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
</style>
