<template>
  <div class="ingredient" :class="{'extra-ingredients': extraIngredients}"
  :style="{ 'background-image': 'url(' + (info[2] ? info[2] : '')  + ')' }">
    <strong v-if="extraIngredients !== null">+{{ extraIngredients }}</strong>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Array
    }
  },
  data () {
    return {
      extraIngredients: null
    }
  },
  created() {
    if (this.info.length === 1 ) {
      this.extraIngredients = this.info[0];
    }
  }
}
</script>

<style scoped>
.ingredient {
  height: 40px;
  width: 40px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 0.5rem;
}
.extra-ingredients {
  margin-top: 0.25rem;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ingredient > strong {
  color: var(--negative-color);
  margin: 0;
  padding: 0;
}
</style>