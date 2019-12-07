<template>
  <div id="app">
    <modal transitionName="trans-modal"></modal>
    <trans-fade-in-fade-out :initOnly="true" :duration="350" :delay="200">
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
    </trans-fade-in-fade-out>
    <trans-router-view></trans-router-view>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import Modal from "@/component/modal/Index.vue";
import ModalDummy from "@/component/modal/component/Dummy.vue";
import TransFadeInFadeOut from "@/component/trans-wrapper/FadeInFadeOut.vue";


export default {
  name: "app",
  components: {
    Modal,
    TransFadeInFadeOut
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
      this.transInitialize();
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
</style>
