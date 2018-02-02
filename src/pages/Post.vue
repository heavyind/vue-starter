<template>
  <div>
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
      return this.$store.state.posts[this.$route.params.id];
    }
  }
};
</script>
