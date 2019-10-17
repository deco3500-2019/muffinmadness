<template>
  <div class="card-header-body" :class="{ 'add-padding-top': !topline}">
    <div>
      <div>
        <img v-if="!topline || mealplan" class="card-header-body-profile-img" src="https://i0.wp.com/studiolorier.com/wp-content/uploads/2018/10/Profile-Round-Sander-Lorier.jpg?ssl=1&fbclid=IwAR0QKzJ-ie3qOYEv7FX4DElIzgYe99qxhIEkhHsjpYQKJYhG6GtnZwi-CfE">
        <h5 class="recipe-name">Vegan Omelette of awesomeness</h5>
      </div>
      <button v-if="!topline" class="follow-btn button filled-button-small">Follow</button>
    </div>
    <div v-if="topline">
      <!-- make per square and data into one component vertically -->
      <div class='info-squares-group'>
        <!-- <div class="info-square"><img src="https://img.icons8.com/bubbles/100/000000/around-the-globe.png"></div>
        <div class="info-square"><img src="https://img.icons8.com/bubbles/100/000000/heart-with-pulse.png"></div>
        <div class="info-square"><img src="https://img.icons8.com/bubbles/100/000000/time-machine.png"></div>
        <div class="info-square"><img src="https://img.icons8.com/bubbles/100/000000/money.png"></div> -->
        <InfoSquare />
        <InfoSquare />
        <InfoSquare />
        <InfoSquare />
      </div>
    </div>
    <div v-else>
      <UserSocialStatus />
      <UserSocialStatus />
      <!-- insert social components - followers - likes -->
    </div>
  </div>
</template>

<script>
import InfoSquare from "@/components/atoms/InfoSquare.vue";
import UserSocialStatus from "@/components/atoms/UserSocialStatus.vue";

export default {
  components: {
    InfoSquare,
    UserSocialStatus
  },
  data() {
    return {
      topline: null,
      mealplan: false
    }
  },
  created() {
    this.topline = this.$store.getters.getToplineState;
  }
}
</script>

<style scoped>
.card-header-body {
  padding-top: 0;
  padding-bottom: 0;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-header-body > div:first-child {
  display: flex;
  justify-content: space-between;
}
.card-header-body > div:first-child > div {
  width: 260px;
  display: flex;
  align-items: center;
}
.card-header-body-profile-img {
  width: 50px;
  height: 50px;
  margin-right: 0.25rem;
}
.recipe-name {
  max-width: 200px;
  max-height: 60px;
  margin-bottom: 0;
  overflow: hidden;
}
.follow-btn {
  margin-top: 0.25rem;
}
.info-squares-group {
  display: flex;
}
.add-padding-top {
  padding-top: 0.5rem;
}
</style>