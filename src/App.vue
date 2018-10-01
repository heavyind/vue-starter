<template>
  <div id="app">
    <router-view></router-view>
    <layout-footer></layout-footer>
  </div>
</template>

<script>


export default {
  name: "app",
  components: {
    LayoutFooter: () => import(
      /* webpackChunkName: "componentFooterLayoutFooter" */
      "VUE_COMPONENT/layout/footer/LayoutFooter.vue"
    )
  }
};
</script>

<style lang="sass">
@import "~SASS/main";
</style>
