<template>
  <router-link v-if="!isRecipePage" tag="div" :to="destinationData" class="card-header-body" :class="{ 'add-padding-top': !topline}">
    <div>
      <div>
        <h5 class="recipe-name">{{ info.name }}</h5>
      </div>
    </div>
    <div v-if="topline">
      <!-- make per square and data into one component vertically -->
      <div class='info-squares-group'>
        <div 
        v-for="(square, objKey) in info.infoSquares"
        :key="objKey">
          <InfoSquare :info="{square:square, objKey:objKey}" />
        </div>
      </div>
    </div>
    <div v-else class="social-status">
      <div
      v-for="(item, index) in info.userSocialStatus"
      :key="index">
        <UserSocialStatus :info="[item, index]" />
      </div>
    </div>
  </router-link>
</template>

<script>
import InfoSquare from "@/components/atoms/InfoSquare.vue";
import UserSocialStatus from "@/components/atoms/UserSocialStatus.vue";

export default {
  components: {
    InfoSquare,
    UserSocialStatus
  },
  props: {
    allData: Object,
    info: Object,
    isRecipePage: Boolean,
    recipeData: Object
  },
  data() {
    return {
      topline: null,
      destinationData: {}
    }
  },
  created() {
    this.topline = this.$store.getters.getToplineState;
    if ( this.allData.cardType === "Today's meal plan" || this.allData.cardType === "Recommended dishes" ) { // click on recipe cards
      this.destinationData = { name: 'recipe', params: { name: this.info.name, recipeData: this.recipeData } }
    } else if ( this.allData.cardType === "Recommended meal plans" ) { // click on influencer meal plan card
      this.destinationData = { name: 'influencer-mealplan', params: { id: this.allData.planId } }
    } else { // click on influencer card
      
    }
  }
}
</script>

<style scoped>
.card-header-body {
  padding-top: 0;
  padding-bottom: 0;
  height: 90%;
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
  max-width: 260px;
  max-height: 60px;
  margin-bottom: 0;
  overflow: hidden;
}
.follow-btn {
  margin-top: 0.25rem;
}
.info-squares-group {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
}
.add-padding-top {
  padding-top: 0.5rem;
}
.social-status {
  margin-bottom: 2rem;
}
</style>