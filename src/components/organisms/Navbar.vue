<template>
  <div id="nav">
    <section>
      <div class="nav-btn-container">
        <router-link class="nav-btn" to="/">
          <i class="material-icons">home</i>
        </router-link>
        <router-link class="nav-btn" to="/mealplan">
          <i class="material-icons">local_dining</i>
        </router-link>
      </div>
    </section>
  </div>
</template>    

<style>
#nav {
  z-index: 999;
}
#nav > section {
  position: fixed;
  bottom: 0;
  background-color: #fff;
}
#nav > section > div {
  height: 50px;
  /* The following code has been sourced from: (Thornton, S. n.d.) */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  /* End of sourced code */
  display: flex;
}
.nav-btn {
  width: 50vw;
  margin-top: 10px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #444444;
}
.router-link-exact-active > i {
  color: var(--secondary-bg-color);
  border-bottom: 1px solid var(--secondary-bg-color);
}
.nav-btn:first-child {
  border-right: 1px solid lightgray;
}
</style>