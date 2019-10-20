<template>
  <div class="mealplan">
    
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
  }
}
</script>
