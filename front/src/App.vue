<template>
  <div class="main">
    <router-view></router-view>
  </div>
  <Nav></Nav>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  background-color: black;
}

.main {
  width: 85%;
  height: 100vh;
  margin: 0 auto;
}

a.router-link-active {
  color: red;
  font-style: italic;
}
</style>
