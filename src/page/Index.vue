<template>
  <div>
    Home page
    <div v-for="postNo in [1,2,3,4,5]" :key="postNo">
      <router-link :to="'/post/' + postNo">Post {{ postNo }}</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "page-index"
};
</script>
