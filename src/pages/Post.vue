<template>
  <div>
    A post
    <br>
    {{ post.title }}
    <br>
    {{ post.body }}
  </div>
</template>

<script>
export default {
  name: "post",
  asyncData ({store, route}) {
    return store.dispatch("fetchPost", route.params.id);
  },
  computed: {
    post () {
      const aPost = this.$store.state.posts[this.$route.params.id];
      return aPost;
    }
  }
};
</script>
