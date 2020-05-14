<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <!-- explicit durations can be set on <trans-link> -->
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";


export default {
  name: "app",
  mixins: [],
  watch: {
    $route () {
      if (this.$route.meta && this.$route.meta.title) {
        document.title = this.$route.meta.title;
      }
    }
  }
};
</script>

<style lang="sass">
@import "~SASS/main";


</style>
