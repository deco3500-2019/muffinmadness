<template>
  <div class="mealplan">
      <div class="nav-topbar">
        <button class="button"><i @click="goBack" class="material-icons">arrow_back_ios</i><p class="overline">Go back</p></button>
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
  methods: {
    goBack() {
      this.$router.back();
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
