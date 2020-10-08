<template>
  <li>
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </li>
</template>

<script>
export default {
  props: ["title", "content"],
};
</script>

<style scoped>
h3 {
  color: royalblue;
}
</style>