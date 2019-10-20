<template>
  <div class="influencer-mealplan">
    <CardRow name="Monday" :influencerMealplan="true" :id="id" />
    <CardRow name="Tuesday" :influencerMealplan="true" :id="id" />
    <CardRow name="Wednesday" :influencerMealplan="true" :id="id" />
    <CardRow name="Thursday" :influencerMealplan="true" :id="id" />
    <CardRow name="Friday" :influencerMealplan="true" :id="id" />
    <CardRow name="Saturday" :influencerMealplan="true" :id="id" />
    <CardRow name="Sunday" :influencerMealplan="true" :id="id" />
  </div>
</template>

<script>
import CardRow from "@/components/organisms/CardRow.vue";

export default {
  name: "influencer-mealplan",
  components: {
    CardRow
  },
  props: {
    id: Number
  }
}
</script>
