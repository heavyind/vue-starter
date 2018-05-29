<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  }
};
</script>

<style lang="sass">
@import "~SASS/main";

#app
  position: relative
  min-height: 100vh
</style>
