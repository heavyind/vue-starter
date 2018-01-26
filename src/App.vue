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
  },
  // Remove after I work this bug out
  render: h => { return h("div", "something"); }
};
</script>
