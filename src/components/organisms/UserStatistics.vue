<template>
  <div class="user-statistics">
    <div class="statistics-row">
      <div class="statistics-box-outer">
        <div class="statistics-box-inner">
          <p class="overline">Level</p>
          <h5>2</h5>
        </div>
      </div>
      <div class="statistics-box-outer">
        <div class="statistics-box-inner">
          <p class="overline">Xp to next level</p>
          <h5>325 <span class="small-text">XP</span></h5>
        </div>
      </div>
      <div class="statistics-box-outer">
        <div class="statistics-box-inner">
          <p class="overline">Your impact</p>
          <h5><span id="impact">-32% </span><span class="small-text">AVG.</span></h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user-statistics h5 {
  margin: 0;
}
.user-statistics p {
  margin: 0;
  margin-bottom: 0.25rem;
}
.user-statistics {
  margin: 0.75rem 0 1rem 0;
}
.statistics-row {
  display: flex;
  justify-content: space-around;
  margin: 0 0.75rem;
}
.statistics-box-outer {
  width: -webkit-fill-available;

}
.statistics-box-outer:first-of-type {
  width: 50%;
}
.statistics-box-outer:not(:nth-last-child(1)) {
  border-right: 1px solid lightgray;
}
.statistics-box-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#impact {
  color: var(--secondary-bg-color);
}
.small-text {
  font-size: 0.725rem;
}
</style>