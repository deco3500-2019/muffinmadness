<template>
  <div id="app">
    <navbar />
    <router-view id="screen" />
  </div>
</template>

<script>
import Navbar from "@/components/organisms/Navbar.vue";

export default {
  components: {
    Navbar
  }
}
</script>

<style>
:root {
  --main-bg-color: #fff;
  --secondary-bg-color: #8BC34A;
  --main-font-color: #444444;
  --negative-color: #757575;
  --secondary-font-color: lightgray;
}

html, body {
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  color: var(--main-font-color);
}
/* The following code has been adapted from: (Google, n.d.c) */
body { font-size: 1rem; font-weight: 400; letter-spacing: 0.5; }
h1 { font-size: 6rem; font-weight: 300; letter-spacing: -1.5; }
h2 { font-size: 3.75rem; font-weight: 300; letter-spacing: -0.5; }
h3 { font-size: 3rem; font-weight: 400; letter-spacing: 0;}
h4 { font-size: 2.125rem; font-weight: 400; letter-spacing: 0.25; }
h5 { font-size: 1.5rem; font-weight: 400; letter-spacing: 0; }
h6 { font-size: 1.5rem; font-weight: 500; letter-spacing: 0.15; }
.subtitle-1 { font-size: 1rem; font-weight: 400; letter-spacing: 0.15; }
.subtitle-2 { font-size: 0.875rem; font-weight: 500; letter-spacing: 0.1; }
.body-2 { font-size: 0.875rem; font-weight: 400; letter-spacing: 0.25; }
.button { font-size: 0.875rem; font-weight: 500; letter-spacing: 1.25; text-transform: uppercase; }
.caption { font-size: 0.75rem; font-weight: 400; letter-spacing: 0.4; }
.overline { font-size: 0.625rem; font-weight: 400; letter-spacing: 1.5; text-transform: uppercase; }
/* End of adapted code */

#screen {
  padding-bottom: 50px;
}
.button {
  padding: 1rem;
  background-color: #fff;
  border-radius: 2px;
  outline-style: none;
  border: none;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}
.border-button {
  border: 1px solid var(--secondary-bg-color);
}
.filled-button, .filled-button-small {
  background-color: var(--secondary-bg-color);
  
}
.filled-button {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.filled-button-small, .cancel-button-small {
  padding: 0.25rem 0.5rem;
  height: 23px;
}
.cancel-button-small {
  background-color: var(--negative-color);
}
</style>
