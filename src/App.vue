<template>
  <div id="app">
    <div v-if="!preloadDone">
      <preloader></preloader>
    </div>
    <div v-else>
      <transition
        mode="out-in"
        :duration="transCurrent.duration"
        @beforeLeave="transBeforeLeave"
        @beforeEnter="transBeforeEnter">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import { transitions } from "@/settings";
import Preloader from "@/component/preloader/Index.vue";

export default {
  name: "app",
  components: {
    Preloader
  },
  computed: {
    ...mapState({
      preloadDone: state => state.preload.done,
      transCurrent: state => state.trans.current
    })
  },
  methods: {
    ...mapActions({
      preloadSetDone: "preload/setDone",
      transInitialize: "trans/initialize",
      transShow: "trans/show",
      transHide: "trans/hide"
    }),
    transBeforeLeave () {
      this.transHide();
    },
    transBeforeEnter () {
      this.transShow();
    },
    mountedHook () {
      setTimeout(this.preloadSetDone, 0);
    }
  },
  watch: {
    preloadDone (b) {
      if (b === true) {
        const transSettings = {
          default: { ...transitions.default },
          current: { ...transitions.default }
        };
        this.transInitialize(transSettings);
      }
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
