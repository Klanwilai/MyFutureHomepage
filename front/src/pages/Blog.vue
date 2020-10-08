<template>
  <h1>My Blog</h1>
  <p>Here I might write about stuff</p>
  <ul>
    <blog-post-list
      v-for="result in results"
      :key="result.id"
      :title="result.title"
      :content="result.content"
    >
    </blog-post-list>
  </ul>
</template>

<script>
import BlogPostList from "../components/BlogPostList";
export default {
  data() {
    return {
      results: [],
    };
  },
  components: {
    BlogPostList,
  },
  methods: {
    loadBlogPosts() {
      fetch("http://localhost:3000/blog/blogs")
        .then((result) => {
          console.log(result.ok);
          return result.json();
        })
        .then((data) => {
          const result = [];
          const blogs = data.blogs;
          console.log(blogs);
          for (const idx in blogs) {
            result.push({
              id: blogs[idx]._id,
              title: blogs[idx].title,
              content: blogs[idx].content,
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
    this.loadBlogPosts();
  },
};
</script>

<style>
h1 {
  color: green;
}

p {
  color: greenyellow;
}
</style>