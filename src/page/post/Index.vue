<template>
  <div>
    <div v-if="post">
      {{ post.title }}
      {{ post.body }}
    </div>
    <div v-else>
      No post
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  name: "page-post",
  asyncData ({store, route}) {
    return store.dispatch("post/fetchPost", route.params.id);
  },
  computed: {
    post () {
      return this.$store.state.post.posts[this.$route.params.id];
    }
  }
};
</script>
