<template>
  <div class="card-footer-img-row">
    <p v-if="topline" class="overline">Ingredients</p>
    <div v-if="topline" class="ingredient-row">
      <div class="ingredient">
        <i class="material-icons">info</i>
      </div>
      <div class="ingredient">
        <i class="material-icons">info</i>
      </div>
    </div>
    <div v-else class="btn-row">
      <button class="button">See More</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topline: null
    }
  },
  created() {
    this.topline = this.$store.getters.getToplineState;
  }
}
</script>

<style scoped>
.ingredient-row, .btn-row {
  padding-left: 0;
  padding-top: 0.35rem;
  display: flex;
  border-top: 1px solid lightgray;
}
.btn-row {
  height: 50px;
  justify-content: center;
  align-items: center;
}
.btn-row > .button {
  width: 100%;
  height: 100%;
}
.card-footer-img-row {
  padding-top: 0;
}
.card-footer-img-row > p {
  margin-top: 0;
  padding-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}
.ingredient {
  height: 40px;
  width: 40px;
  margin-right: 0.5rem;
  background-color: lightgray;
}
</style>