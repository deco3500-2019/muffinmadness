<template>
  <div class="ingredient" 
  :style="{ 'background-image': 'url(' + (info[2] ? info[2] : '')  + ')' }">
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Array
    }
  },
  created() {
    console.log(this.info[2]);
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
</style>