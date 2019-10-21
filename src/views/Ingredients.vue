<template>
  <div class="ingredients">
    <div class="nav-topbar" @click="goBack">
      <button class="button"><i class="material-icons">arrow_back_ios</i><p class="overline">Go back</p></button>
    </div>

    <div class="ingredients-box">
      <h5>ABOUT THE INGREDIENTS</h5>
      <h6>{{ allData.header.body.name }}</h6>
    
      <div class="item-row" ref="sustainScroll">
        <div>
          <iframe width="200" height="113" :src="recipeData.videoSustainability" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
        <div v-for="(item, index) in recipeData.ingredients"
        :key="index">
          <div v-if="index === 0" :class="[updateSustain < index+1 && updateSustain >= 0 ? 'big-item' : '', 'item']"></div>
          <div v-else-if="index !== recipeData.ingredients.length" :class="[updateSustain < index+1 && updateSustain >= index ? 'big-item' : '', 'item']"></div>
        </div>
        <div>
          <div class="last-item"></div>
        </div>       
      </div>
      <div class="sustainability-information">
        <p class="overline">{{ setSustTitle || 'Why is is sustainable' }}</p>
        <p>{{ setSustText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    allData: Object
  },
  data() {
    return {
      recipeData: null,
      scrollPosSustain: null,
      lowerSustainBreakpoint: -66,
      upperSustainBreakpoint: 0,
      sustainPos: -1,
    }
  },
  computed: {
    updateSustain() {
      return this.sustainPos;
    },
    setSustTitle() {
      if (this.sustainPos <= -1) {
        return 'Why it is sustainable'
      } else if (this.sustainPos >= 0) {
        return this.recipeData.ingredients[this.sustainPos][1];
      }
      return ''
    },
    setSustText() {
      if (this.sustainPos <= -1) {
        // return this.recipeData.;
      } else if (this.sustainPos >= 0) { 
        return this.$store.getters.getIngredientByName(this.recipeData.ingredients[this.sustainPos][1]).info;
      }
      return ''
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    updateSustainScroll() {
      this.scrollPosSustain = this.$refs.sustainScroll.scrollLeft - 125;

      if (this.scrollPosSustain >= this.upperSustainBreakpoint) {
        this.lowerSustainBreakpoint += 66;
        this.upperSustainBreakpoint += 66;
        this.sustainPos = Math.floor(this.lowerSustainBreakpoint/66);
      } else if (this.scrollPosSustain <= this.lowerSustainBreakpoint && this.scrollPosSustain > 0) {
        this.lowerSustainBreakpoint -= 66;
        this.upperSustainBreakpoint -= 66;
        this.sustainPos = Math.floor(this.lowerSustainBreakpoint/66);
      } else if (this.scrollPosSustain < 0) {
        this.lowerSustainBreakpoint -= 100;
        this.upperSustainBreakpoint -= 100;
        this.sustainPos = -1;
      }
      console.log(this.sustainPos);
    }
  },
  mounted() {
    this.$refs.sustainScroll.addEventListener('scroll', this.updateSustainScroll);
  },
  destroyed() {
    this.$refs.sustainScroll.removeEventListener('scroll');
  },
  created() {
    this.recipeData = this.$store.getters.getSingularRecipe(this.allData.header.body.name);
    console.log(this.recipeData);
  }
}
</script>

<style scoped>
.nav-topbar {
  display: flex;
  align-items: center;
}
.ingredients-box {
  padding-left: 0.75rem;
}
.nav-topbar > button {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.item-row {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
}
.item-row > div {
  width: fit-content;
}
.item {
  margin-left: 1rem;
  height: 50px;
  width: 50px;
  background-color: red;
}
.big-item {
  margin-left: 1rem;
  height: 113px;
  width: 113px;
  background-color: red;
}
.last-item {
  height: 50px;
  width: 275px;
  background-color: white;
}
.item-row::-webkit-scrollbar {
  display: none;
}
.item-row > .card:first-of-type {
  margin-left: 0.1rem;
}
.sustainability-information {

}
</style>
