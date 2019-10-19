<template>
  <div class="info-square">
    <i  v-if="info.objKey === 'time'" class="material-icons">access_time</i>
    <i  v-else-if="info.objKey === 'cost'" class="material-icons">attach_money</i>
    <i  v-else-if="info.objKey === 'sustainability'" class="material-icons">eco</i>
    <i  v-else class="material-icons">favorite</i>
    <p>{{ info.square }}</p>
  </div>
</template>

<script>
export default {
    props: {
    info: {
      type: Object
    }
  },
  created () {
    switch(this.info.objKey) {
      case "time":
        this.info.square += "min";
        break;
      case "cost":
        this.info.square = "$" + this.info.square;
        break;
      default:
        this.info.square += "/5";
        break;
    }
  }
}
</script>

<style scoped>
.info-square {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 0 0.5rem 0 0;
  width: 50px;
}
.info-square > i {
  height: 30px;
  display: flex;
  align-self: center;
}
.info-square > p {
  text-align: center;
}
</style>