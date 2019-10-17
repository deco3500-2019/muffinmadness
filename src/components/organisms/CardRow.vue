<template>
  <div class="card-row-outer">
    <p class="subtitle1">{{ name }}</p>
    <div class="card-row">
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "@/components/organisms/Card.vue";

export default {
  props: ['name'],
  components: {
    Card
  }
}
</script>

<style>
.card-row-outer {
  padding-left: 0.75rem;
}
.card-row-outer > p {
  margin-bottom: 0.5rem;
  opacity: .5;
}
.card-row {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: auto;
}
.card-row::-webkit-scrollbar {
  display: none;
}
.card-row > .card:first-of-type {
  margin-left: 0.1rem;
}
</style>