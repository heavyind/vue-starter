<template>
  <div>The app itself</div>
</template>

<script>
import PageHome from "./pages/Home.vue";
import PageAbout from "./pages/About.vue";

export default {
  name: "app",
  components: {
    PageHome,
    PageAbout
  }
};
</script>
