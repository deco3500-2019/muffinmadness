<template>
  <div class="mealplan">
    <h1>mealplan page</h1>
    <CardRow name="Monday" />
    <CardRow name="Tuesday" />
    <CardRow name="Wednesday" />
    <CardRow name="Thursday" />
    <CardRow name="Friday" />
    <CardRow name="Saturday" />
    <CardRow name="Sunday" />
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
