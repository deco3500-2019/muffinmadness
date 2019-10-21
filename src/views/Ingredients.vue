<template>
  <div class="ingredients">
    <div class="nav-topbar" @click="goBack">
      <button class="button"><i class="material-icons">arrow_back_ios</i><p class="overline">Go back</p></button>
    </div>

    <div class="ingredients-box">
      <h5>ABOUT THE INGREDIENTS</h5>
      <h6 class="subtitle-1 ">{{ allData.header.body.name }}</h6>
    
      <div class="item-row" ref="sustainScroll">
        <div>
          <iframe width="200" height="113" :src="recipeData.videoSustainability" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
        <div v-for="(item, index) in recipeData.ingredients"
        :key="index">
          <div v-if="index === 0" :class="[updateSustain < index+1 && updateSustain >= 0 ? 'big-item' : '', 'item']" :style="{ 'background-image': 'url(' + item[2]  + ')' }"></div>
          <div v-else-if="index !== recipeData.ingredients.length" :class="[updateSustain < index+1 && updateSustain >= index ? 'big-item' : '', 'item']" :style="{ 'background-image': 'url(' + item[2] + ')' }"></div>
        </div>
        <div>
          <div class="last-item"></div>
        </div>       
      </div>
      <div class="sustainability-information" :style="{ height: sustainInfoHeight }">
        <p class="overline">{{ setSustTitle || 'Why is is sustainable' }}</p>
        <pre>{{ setSustText }}</pre>
      </div>
      <div v-if="setSustText.length > 594" class="button-row">
        <button @click="setSustainInfoHeight" class="button">{{ (sustainInfoHeight === '310px') ? 'Show more' : 'Show less' }}</button>
      </div>
    </div>
    
    <div class="ingredients-box">
      <div class="item-row" ref="nutriScroll">
        <div>
          <iframe width="200" height="113" :src="recipeData.videoHealth" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </div>
        <div v-for="(item, index) in recipeData.ingredients"
        :key="index">
          <div v-if="index === 0" :class="[updateNutri < index+1 && updateNutri >= 0 ? 'big-item' : '', 'item']" :style="{ 'background-image': 'url(' + item[2]  + ')' }"></div>
          <div v-else-if="index !== recipeData.ingredients.length" :class="[updateNutri < index+1 && updateNutri >= index ? 'big-item' : '', 'item']" :style="{ 'background-image': 'url(' + item[2] + ')' }"></div>
        </div>
        <div>
          <div class="last-item"></div>
        </div>       
      </div>
      <div class="nutri-information" :style="{ height: nutriInfoHeight }">
        <p class="overline">{{ setNutriTitle || 'Why it is healthy' }}</p>
        <pre>{{ setNutriText }}</pre>
      </div>
      <div v-if="setNutriText.length > 594" class="button-row">
        <button @click="setNutriInfoHeight" class="button">{{ (nutriInfoHeight === '310px') ? 'Show more' : 'Show less' }}</button>
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
      sustainInfoHeight: '310px',
      scrollPosNutri: null,
      lowerNutriBreakpoint: -66,
      upperNutriBreakpoint: 0,
      nutriPos: -1,
      nutriInfoHeight: '310px'
    }
  },
  computed: {
    updateSustain() {
      return this.sustainPos;
    },
    updateNutri() {
      return this.nutriPos;
    },
    setSustTitle() {
      if (this.sustainPos <= -1) {
        return 'Why it is sustainable'
      } else if (this.sustainPos >= 0) {
        return this.recipeData.ingredients[this.sustainPos][1];
      }
      return ''
    },
    setNutriTitle() {
      if (this.nutriPos <= -1) {
        return 'Why it is healthy'
      } else if (this.nutriPos >= 0) {
        return this.recipeData.ingredients[this.nutriPos][1];
      }
      return ''
    },
    setSustText() {
      if (this.sustainPos <= -1) {
        return this.recipeData.sustainabilityExplain;
      } else if (this.sustainPos >= 0) { 
        return this.$store.getters.getIngredientByName(this.recipeData.ingredients[this.sustainPos][1]).info;
      }
      return ''
    },
    setNutriText() {
      if (this.nutriPos <= -1) {
        return this.recipeData.healthExplain;
      } else if (this.nutriPos >= 0) { 
        return this.$store.getters.getIngredientByName(this.recipeData.ingredients[this.nutriPos][1]).info;
      }
      return ''
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    setSustainInfoHeight () {
      if (this.sustainInfoHeight === '310px') {
        this.sustainInfoHeight = 'fit-content';
      } else {
        this.sustainInfoHeight = '310px';
      }
    },
    setNutriInfoHeight () {
      if (this.nutriInfoHeight === '310px') {
        this.nutriInfoHeight = 'fit-content';
      } else {
        this.nutriInfoHeight = '310px';
      }
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
    },
    updateNutriScroll() {
      this.scrollPosNutri = this.$refs.nutriScroll.scrollLeft - 125;

      if (this.scrollPosNutri >= this.upperNutriBreakpoint) {
        this.lowerNutriBreakpoint += 66;
        this.upperNutriBreakpoint += 66;
        this.nutriPos = Math.floor(this.lowerNutriBreakpoint/66);
      } else if (this.scrollPosNutri <= this.lowerNutriBreakpoint && this.scrollPosNutri > 0) {
        this.lowerNutriBreakpoint -= 66;
        this.upperNutriBreakpoint -= 66;
        this.nutriPos = Math.floor(this.lowerNutriBreakpoint/66);
      } else if (this.scrollPosNutri < 0) {
        this.lowerNutriBreakpoint -= 100;
        this.upperNutriBreakpoint -= 100;
        this.nutriPos = -1;
      }
    }
  },
  mounted() {
    this.$refs.sustainScroll.addEventListener('scroll', this.updateSustainScroll);
    this.$refs.nutriScroll.addEventListener('scroll', this.updateNutriScroll);
  },
  destroyed() {
    this.$refs.sustainScroll.removeEventListener('scroll');
    this.$refs.nutriScroll.removeEventListener('scroll');
  },
  created() {
    this.recipeData = this.$store.getters.getSingularRecipe(this.allData.header.body.name);
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
.ingredients > div:nth-of-type(2) {
  margin-bottom: 4rem;
}
.ingredients-box > h5, .ingredients-box > h6 {
  margin: 1rem 0;
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
.item, .big-item {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.item {
  margin-left: 1rem;
  height: 50px;
  width: 50px;
}
.big-item {
  margin-left: 1rem;
  height: 113px;
  width: 113px;
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
.sustainability-information, .nutri-information {
  /* height: 310px; */
  overflow-y: hidden;
}
.sustainability-information > pre, .nutri-information > pre {
  overflow-x: auto;
  white-space: pre-wrap;
  max-width: 100%;
  margin-right: 1rem;
}
.button-row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -1rem;
}
</style>
