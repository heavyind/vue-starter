<template>
  <div>
    <layout-header></layout-header>
    {{ post.title }}
    <br>
    {{ post.body }}
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/LayoutHeader.vue";


export default {
  name: "post",
  asyncData ({store, route}) {
    return store.dispatch("fetchPost", route.params.id);
  },
  components: {
    LayoutHeader
  },
  computed: {
    post () {
      return this.$store.state.posts[this.$route.params.id];
    }
  }
};
</script>
