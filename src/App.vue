<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/post/1">Post</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import PageHome from "./pages/Home.vue";
import PageAbout from "./pages/About.vue";

export default {
  name: "app",
  components: {
    PageHome,
    PageAbout
  },
};
</script>
