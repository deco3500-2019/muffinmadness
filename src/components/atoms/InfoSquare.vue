<template>
  <div class="info-square">
    <img v-if="info.objKey === 'time'" src="https://img.icons8.com/bubbles/100/000000/time-machine.png">
    <img v-else-if="info.objKey === 'cost'" src="https://img.icons8.com/bubbles/100/000000/money.png">
    <img v-else-if="info.objKey === 'sustainability'" src="https://img.icons8.com/bubbles/100/000000/around-the-globe.png">
    <img v-else src="https://img.icons8.com/bubbles/100/000000/heart-with-pulse.png">
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
.info-square > img {
  height: 50px;
}
.info-square > p {
  text-align: center;
}
</style>