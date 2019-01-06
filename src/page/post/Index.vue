<template>
  <div>
    <layout-header></layout-header>
    {{ post.title }}
    <br>
    {{ post.body }}
  </div>
</template>

<script>

export default {
  name: "page-post",
  asyncData ({store, route}) {
    return store.dispatch("fetchPost", route.params.id);
  },
  components: {
    LayoutHeader: () => import(
      /* webpackChunkName: "componentHeaderLayoutHeader" */
      "VUE_COMPONENT/layout/header/LayoutHeader.vue"
    )
  },
  computed: {
    post () {
      return this.$store.state.posts[this.$route.params.id];
    }
  }
};
</script>
