<template>
  <div id="app">
    <div v-if="!initLoadComplete">
      <preloader></preloader>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import Preloader from "@/component/preloader/Index.vue";

export default {
  name: "app",
  components: {
    Preloader
  },
  computed: {
    ...mapState({
      initLoadComplete: state => state.loading.initLoadComplete
    })
  },
  methods: {
    ...mapActions({
      setInitLoadComplete: "loading/setInitLoadComplete"
    }),
    mountedHook () {
      setTimeout(this.setInitLoadComplete, 1000);
    }
  },
  mounted () {
    this.mountedHook();
  }
};
</script>

<style lang="sass">
@import "~SASS/main";
</style>
