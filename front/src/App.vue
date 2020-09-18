<template>
  <div id="app">
    <section class="logo">
      <h1>TISS</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>

<style>
body {
  margin: 0;
  background-color: black;
}

h1 {
  text-align: center;
  color: gold;
  /* border: white 2px solid; */
}

.star {
  position: absolute;
  width: 1px;
  height: 1px;
  background-color: white;
}

.logo {
  position: absolute;
  top: 20%;
  left: 45%;
  z-index: 1;
  margin: auto;
  animation: logo 9s ease-out 9s;
  opacity: 0;
}

@keyframes logo {
  0% {
    width: 18em;
    transform: scale(0.1);
    opacity: 1;
  }
  50% {
    opacity: 1;
    width: 18em;
  }
  100% {
    opacity: 0;
    transform: scale(2.75);
    width: 18em;
  }
}
</style>
