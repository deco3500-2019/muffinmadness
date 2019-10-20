<template>
  <div class="card-footer-img-row">
    <p v-if="topline" class="overline">{{ displayText }}</p>
    <router-link :to="{ name: 'ingredients', params: { allData: allData }}"  tag="div" v-if="topline" class="ingredient-row">
      <div 
      v-for="(item, index) in info.ingredients.slice(0,7)"
      :key="index">
        <Ingredient v-if="index < 6" :info="item" />
        <Ingredient v-else :info="[info.ingredients.length-6]" />
      </div>
    </router-link>
    <div v-else class="btn-row">
      <button @click="toggleFollow" class="button">
        <i v-if="following" class="material-icons">check</i>
        {{ (following === false) ? 'Follow' : 'Following' }}
      </button>
    </div>
  </div>
</template>

<script>
import Ingredient from "@/components/atoms/Ingredient.vue";

export default {
  components: {
    Ingredient
  },
  props: {
    info: Object,
    allData: Object
  },
  data() {
    return {
      topline: null,
      following: false
    }
  },
  methods: {
    toggleFollow() {
      this.following = !this.following;
    }
  },
  computed: {
    displayText() {
      if (this.allData.cardType === 'recipe') {
        return '';
      } else if (this.allData.cardType === 'Recommended meal plans') {
        return 'Meals';
      } else {
        return 'Ingredients';
      }
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-row  > .button > i {
  margin-bottom: 0.25rem;
  margin-right: 0.25rem;
  color: var(--secondary-bg-color);
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
</style>