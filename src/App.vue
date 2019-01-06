<template>
  <div id="app">
    <layout-header></layout-header>
    <router-view></router-view>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/LayoutHeader.vue";
import LayoutFooter from "VUE_COMPONENT/layout/footer/LayoutFooter.vue";

export default {
  name: "app",
  components: {
    LayoutHeader,
    LayoutFooter
  }
};
</script>

<style lang="sass">
@import "~SASS/main";
</style>
