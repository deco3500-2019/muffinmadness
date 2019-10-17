<template>
  <div class="home">
    <UserStatistics />
    <Searchbar />
    <CardRow name="Today's meal plan" />
    <CardRow name="Recommended meal plans" />
    <CardRow name="Recommended dishes" />
    <CardRow name="Trending users to follow" />
  </div>
</template>

<script>
import Searchbar from "@/components/atoms/Searchbar.vue";
import CardRow from "@/components/organisms/CardRow.vue";
import UserStatistics from "@/components/organisms/UserStatistics.vue";

export default {
  name: "home",
  components: {
    Searchbar,
    CardRow,
    UserStatistics
  }
};
</script>
