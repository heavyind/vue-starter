<template>
  <div id="app">
    <transition mode="out-in" :duration="settings.preload.duration">
      <preloader v-if="!ready"></preloader>
      <div v-else>
        <modal></modal>
        <button @click="modalOpen">Open modal</button>
        <nav>
          <ul>
            <li><trans-link to="/about">About</trans-link></li>
            <li><trans-link to="/" :trans="{duration: 0}">Home</trans-link></li>
          </ul>
        </nav>
        <transition
          mode="out-in"
          :duration="transCurrent.duration"
          @beforeLeave="transBeforeLeave"
          @beforeEnter="transBeforeEnter">
            <router-view></router-view>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import * as settings from "@/settings";
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
    }),
    settings () {
      return settings;
    }
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
      // This is set to a timer for the sake of example. Change it to suit
      // your own requirements (e.g., an array of images' `onload`).
      setTimeout(this.preloadSetDone, 500);
    }
  },
  watch: {
    preloadDone (b) {
      // Since actual app content doesn't render until preloading is complete,
      // the trans module should only be initialized when preloading is done...
      if (b === true) {
        const transSettings = {
          default: { ...settings.transitions.default },
          current: { ...settings.transitions.default }
        };
        Vue.nextTick(() => {
          // ...otherwise, we jump the gun and set the store's `initFlag`, which 
          // controls `showOnce` values, within the preload sequence rather than
          // the main app sequence, and `showOnce` transitions never occur.
          this.transInitialize(transSettings);
          // A proxy for `preloadDone`, required because `<trans>` components use
          // `preloadDone`. If parent conditional rendering/transition logic is
          // not done after children, the children are pruned from the virtual DOM 
          // and updates never propagate (meaning child transitions never fire).
          this.ready = true;
        });
      }
    },
    "$route" () {
      if (this.$route.meta && this.$route.meta.title) {
        document.title = this.$route.meta.title;
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
