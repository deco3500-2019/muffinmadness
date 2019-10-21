<template>
  <div class="searchbar">
    <input type="text" name="searchbar" placeholder="Feature coming soon..." disabled>
    <div>
      <i class="material-icons">search</i>
    </div>
  </div>
</template>

<style scoped>
.searchbar > input, .searchbar > div {
  width: 90%;
  opacity: .5;
  margin-left: 0.75rem;
}
.searchbar > input {
  border-radius: 45px;
  outline: none;
  padding: 1em 0 1em 1em;
  border-radius: 20px;
  border: 1px solid var(--main-font-color);
  background-color: var(--main-bg-color);
}
.searchbar > div {
  margin-top: -8%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: flex-end;
}
</style>