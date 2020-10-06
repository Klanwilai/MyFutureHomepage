<template>
  <div class="navigation">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/doodles">Doodles</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.navigation {
  position: absolute;
  bottom: 0;
  width: 40%;
  height: 5%;
  background-color: darkslategray;
  border-radius: 25px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.6;
}

.navigation:hover {
  width: 42%;
  height: 6%;
}

a {
  color: gold;
  text-decoration: none;
  display: block;
  height: 100%;
  padding: 6% 0;
}

ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 100%;
}

li {
  width: 33%;
  text-align: center;
}
</style>
