<template>
  <div class="card">
    <router-link v-if="isDisabled" to="/recipe">
      <div class="card-header" :style="{ 'background-image': 'linear-gradient(rgba(255, 255, 255, 0.3),rgba(255, 255, 255, 0.1)),url(' + info.image + ')' }">
        <div class="card-header-overlay">
          <CardHeaderTopline v-if="topline" :info="info.header.topline" />
          <CardHeaderBody :info="info.header.body" />
        </div>
      </div>
    </router-link>
    <div v-else>
      <div class="card-header" :style="{ 'background-image': 'linear-gradient(rgba(255, 255, 255, 0.3),rgba(255, 255, 255, 0.1)),url(' + info.image + ')' }">
        <div class="card-header-overlay">
          <CardHeaderTopline v-if="topline" :info="info.header.topline" />
          <CardHeaderBody :info="info.header.body" />
        </div>
      </div>
    </div>
    <div class="card-footer">
      <CardFooterImgRow :info="info.footer" />
    </div>
  </div>
</template>

<script>
import CardHeaderTopline from "@/components/molecules/CardHeaderTopline.vue";
import CardHeaderBody from "@/components/molecules/CardHeaderBody.vue";
import CardFooterImgRow from "@/components/molecules/CardFooterImgRow.vue";

export default {
  components: {
    CardHeaderTopline,
    CardHeaderBody,
    CardFooterImgRow
  },
  props: {
    info: {
      type: Object
    }
  },
  data() {
    return {
      topline: true,
      isDisabled: (this.info.cardType === "recipe") ? true : false
    }
  },
  created() {
    if (this.info.cardType !== "Trending users to follow") {
      this.topline = true;
    } else {
      this.topline = false;
    }
    this.$store.dispatch('setToplineState', this.topline)
  }
}
</script>

<style>
.card {
  margin: 0 0.25rem 0.25rem 0.25rem;
  border-radius: 2px;
  width: 350px;
  height: 280px;
  /* The following code has been sourced from: (Thornton, S. n.d.) */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  /* End of sourced code */
  flex: 0 0 auto;
}
.card p, .card h5 {
  margin: 0 0 0.5rem 0;
  text-shadow: 0 1px 3px rgba(255,255,255,0.12), 0 1px 2px rgba(255,255,255,0.24);
}
.card-header > *, .card-footer > * {
  padding: 0.5rem;
}
.card-header-overlay {
  padding-bottom: 0;
  pointer-events: none;
  background-image:
  linear-gradient(
    to top, 
    rgba(255,255,255, 1) 0%,
    rgba(255,255,255, .9) 5%,
    rgba(255,255,255, .7) 10%,
    rgba(255,255,255, .5) 15%, 
    rgba(255,255,255, .3) 20%,
    rgba(255,255,255, .1) 25%,
    rgba(255,255,255, 0) 30%
  );
  height: 100%;
}
.video-overlay {
  padding: 0 !important;
}
.card-header {
  height: 76%;
  display: flex;
  flex-direction: column;
  background-size: cover;
}
.card-footer {
  height: 24%;
  background-color: #fff;
}
</style>