<template>
  <div class="ingredients">
    <div class="nav-topbar" @click="goBack">
      <button class="button"><i class="material-icons">arrow_back_ios</i><p class="overline">Go back</p></button>
    </div>

    

  </div>
</template>

<script>
export default {
  props: {
    allData: Object
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  },
  created() {
    console.log('allData');
    console.log(this.allData);
    let recipeData = this.$store.getters.getSingularRecipe(this.allData.header.body.name);
    console.log('recipeData');
    console.log(recipeData);
  }
}
</script>

<style scoped>
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