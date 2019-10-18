<template>
  <div class="card-header-body" :class="{ 'add-padding-top': !topline}">
    <div>
      <div>
        <h5 class="recipe-name">{{ info.name }}</h5>
      </div>
      <button v-if="!topline" class="follow-btn button filled-button-small">Follow</button>
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
  props: {
    info: {
      type: Object
    }
  },
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
  flex-direction: row-reverse;
  justify-content: flex-end;
}
.add-padding-top {
  padding-top: 0.5rem;
}
.social-status {
  margin-bottom: 2rem;
}
</style>