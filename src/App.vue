<template>
  <div id="app">
    <div v-if="!preloadDone">
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
      preloadDone: state => state.preload.done
    })
  },
  methods: {
    ...mapActions({
      setPreloadDone: "preload/setPreloadDone"
    }),
    mountedHook () {
      setTimeout(this.setPreloadDone, 1000);
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
