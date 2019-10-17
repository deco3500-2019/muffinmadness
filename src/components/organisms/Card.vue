<template>
  <div class="card">
    <div class="card-header">
      <CardHeaderTopline v-if="topline" />
      <CardHeaderBody />
    </div>
    <div class="card-footer">
      <CardFooterImgRow />
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
  props: ['name'],
  data() {
    return {
      topline: true,
    }
  },
  created() {
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
  background-image: url("https://img.taste.com.au/jfM_AXMk/w720-h480-cfill-q80/taste/2016/11/apple-and-yoghurt-flower-54725-1.jpeg?fbclid=IwAR0LQgR7ndcSa1hkp3nC-x2Z-LWpqB3S7XyzcxNvP4_92OhFhK29DhgBphA");
  background-size: cover;
}
.card p, .card h5 {
  margin: 0 0 0.5rem 0;
}
.card-header > *, .card-footer > * {
  padding: 0.5rem;
}
.card-header {
  height: 76%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(255,255,255, 0.1) 0%, rgba(255, 255, 255, 1) 90%);
}
.card-footer {
  height: 24%;
  background-color: #fff;
}
</style>