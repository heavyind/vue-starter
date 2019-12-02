// A note about this architechture
<template>
  <div id="app">
    <transition mode="out-in" :duration="{enter: 0, leave: 900}">
      <preloader v-if="!ready"></preloader>
      <div v-else>
        <modal></modal>
        <transition
          mode="out-in"
          :duration="transCurrent.duration"
          @beforeLeave="transBeforeLeave"
          @beforeEnter="transBeforeEnter">
            <router-view></router-view>
        </transition>
        <button @click="modalOpen">Open modal</button>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import { transitions } from "@/settings";
import Preloader from "@/component/preloader/Index.vue";
import Modal from "@/component/modal/Index.vue";
import ModalDummy from "@/component/modal/component/Dummy.vue";

export default {
  name: "app",
  components: {
    Preloader,
    Modal
  },
  computed: {
    ...mapState({
      preloadDone: state => state.preload.done,
      transCurrent: state => state.trans.current
    })
  },
  data () {
    return {
      ready: false
    };
  },
  methods: {
    ...mapActions({
      preloadSetDone: "preload/setDone",
      transInitialize: "trans/initialize",
      transShow: "trans/show",
      transHide: "trans/hide",
      transSetCurrentAsDefault: "trans/setCurrentAsDefault"
    }),
    modalOpen (component) {
      this.$store.dispatch("modal/openWith", { component: ModalDummy });
    },
    transBeforeLeave () {
      this.transHide();
    },
    transBeforeEnter () {
      this.transShow();
      this.transSetCurrentAsDefault();
    },
    mountedHook () {
      setTimeout(this.preloadSetDone, 500);
    }
  },
  watch: {
    preloadDone (b) {
      // Since actual app content doesn't render until preloading is complete,
      // the trans module should only be initialized when preloading is done...
      if (b === true) {
        const transSettings = {
          default: { ...transitions.default },
          current: { ...transitions.default }
        };
        Vue.nextTick(() => {
          // ...otherwise, we jump the gun and set the `initFlag`, which controls
          // `showOnce` values, before any meaningful content is rendered.
          this.transInitialize(transSettings);
          this.ready = true;
        });
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
