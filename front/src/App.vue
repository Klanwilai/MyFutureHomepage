<template>
  <div id="app">
    <blogBody></blogBody>
  </div>
</template>

<script>
import Blog from "./pages/Blog.vue";

export default {
  components: {
    blogBody: Blog
  }
};
</script>

<style>
* {
  margin: 0;
  background-color: black;
}

h1 {
  text-align: center;
  color: gold;
}

/* .star {
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
    transform: scale(2.75);
    opacity: 1;
  }
  50% {
    opacity: 1;
    width: 18em;
  }
  100% {
    opacity: 0;
    transform: scale(0.1);
    width: 18em;
  }
} */
</style>
