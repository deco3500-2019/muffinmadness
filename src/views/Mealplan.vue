<template>
  <div class="mealplan">
    <h1>mealplan page</h1>
    <CardRow name="Monday" :influencerMealplan="false" />
    <CardRow name="Tuesday" :influencerMealplan="false" />
    <CardRow name="Wednesday" :influencerMealplan="false" />
    <CardRow name="Thursday" :influencerMealplan="false" />
    <CardRow name="Friday" :influencerMealplan="false" />
    <CardRow name="Saturday" :influencerMealplan="false" />
    <CardRow name="Sunday" :influencerMealplan="false" />
  </div>
</template>

<script>
import CardRow from "@/components/organisms/CardRow.vue";

export default {
  name: "mealplan",
  components: {
    CardRow
  }
}
</script>
