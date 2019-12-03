<template>
  <transition :duration="{ leave: closeDelay }">
  <div role="dialog" v-if="open" class="modal" :style="style">
    <component
      v-if="settings"
      :is="settings.component"
      v-bind="settings.props">
    </component>
  </div>
  </transition>
</template>

<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";


export default {
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: "rgba(0, 0, 0, 1.0)"
    },
    closeDelay: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data () {
    return {
      open: false
    };
  },
  computed: {
    ...mapState({
      _open: state => state.modal.open,
      settings: state => state.modal.settings
    }),
    style () {
      return {
        "background-color": this.backgroundColor
      };
    }
  },
  methods: {
    ...mapActions({
      close: "modal/close"
    }),
    handleKeyCodes (e) {
      if (e.keyCode === 27) { this.close(); }
    }
  },
  watch: {
    _open (c) {
      Vue.nextTick(() => this.open = c);
    },
    open (c) {
      console.log("open changed to ", c);
    }
  },
  mounted () {
    addEventListener("keyup", this.handleKeyCodes);
  },
  beforeDestroy () {
    removeEventListener("keyup", this.handleKeyCodes);
  }
};
</script>

<style lang="sass">

.modal
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  z-index: 110
</style>
