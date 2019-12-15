<template>
  <div id="app">
    <modal transitionName="trans-modal"></modal>
    <trans name="fifo" :initOnly="true" :duration="350" :delay="200">
      <header>
        <nav>
          <ul>
            <!-- explicit durations can be set on <trans-link> -->
            <li><trans-link to="/">Home</trans-link></li>
            <li><trans-link to="/about">About</trans-link></li>
          </ul>
        </nav>
        <button @click="modalOpen">Open modal</button>
      </header>
    </trans>
    <trans-view></trans-view>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import Modal from "@/component/modal/Index.vue";
import ModalDummy from "@/component/modal/component/Dummy.vue";


export default {
  name: "app",
  mixins: [],
  components: {
    Modal
  },
  data () {
    return {
      ready: false
    };
  },
  methods: {
    modalOpen (component) {
      this.$store.dispatch("modal/openWith", { component: ModalDummy });
    },
    mountedHook () {
      this.$store.dispatch("trans/initialize");
    }
  },
  watch: {
    $route () {
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


// "Fade-in, fade-out"
.fifo-enter-active
  opacity: 1
  transition: opacity

.fifo-enter
  opacity: 0

.fifo-leave-active
  opacity: 0
  transition: opacity
</style>
