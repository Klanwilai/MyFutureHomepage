<template>
  <div>
    <h1>Doodles</h1>
    <p>I want to draw stuff and show it to the world</p>
    <ol>
      <doodles-list
        v-for="result in results"
        :key="result.id"
        :title="result.title"
        :imageURL="result.imageURL"
        :description="result.description"
        :alt="result.alt"
      ></doodles-list>
    </ol>
  </div>
</template>



<script>
import DoodlesList from "../components/DoodlesList";

export default {
  data() {
    return {
      results: [],
    };
  },
  components: {
    DoodlesList,
  },
  methods: {
    loadDoodles() {
      fetch("http://localhost:3000/doodles/doodles")
        .then((result) => {
          console.log(result.ok);
          return result.json();
        })
        .then((data) => {
          const result = [];
          const doodles = data.doodles;
          console.log(doodles);
          for (const idx in doodles) {
            result.push({
              id: doodles[idx]._id,
              title: doodles[idx].title,
              imageURL: doodles[idx].imageURL,
              description: doodles[idx].description,
              alt: doodles[idx].alt,
            });
          }
          this.results = result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.loadDoodles();
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: gainsboro;
}
</style>

