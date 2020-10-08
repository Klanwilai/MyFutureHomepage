<template>
  <li>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <p>{{ alt }}</p>
    <img :src="imageURL" :alt="alt" />
  </li>
</template>

<script>
export default {
  props: ["title", "imageURL", "description", "alt"],
};
</script>

<style scoped>
h2 {
  color: saddlebrown;
}

span {
  color: salmon;
}
</style>