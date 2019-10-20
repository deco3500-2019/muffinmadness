<template>
  <div class="influencer-mealplan">
    <div class="nav-topbar">
      <button class="button"><i @click="goBack" class="material-icons">arrow_back_ios</i><p class="overline">Go back</p></button>
    </div>

    <h5 class="top-title">{{ info }}</h5>
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
    id: Number,
    info: String
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