<template>
  <transition :name="transitionName" :duration="{ leave: closeDelay }">
    <div role="dialog" v-if="openProxy" class="modal" :style="style">
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
    transitionName: {
      type: String,
      required: false,
      default: ""
    },
    backgroundColor: {
      type: String,
      required: false,
      default: "rgba(0, 0, 0, 1.0)"
    },
    closeDelay: {
      type: [Number, null],
      required: false,
      default: null
    }
  },
  data () {
    return {
      openProxy: false
    };
  },
  computed: {
    ...mapState({
      open: state => state.modal.open,
      settings: state => state.modal.settings
    }),
    style () {
      return {
        "background-color": this.backgroundColor
      };
    }
  },
  methods: {
    beforeLeave () {
      console.log("About to leave");
    },
    ...mapActions({
      close: "modal/close"
    }),
    handleKeyCodes (e) {
      if (e.keyCode === 27) { this.close(); }
    }
  },
  watch: {
    open (c) {
      if (c === true) {
        Vue.nextTick(() => this.openProxy = c);
      } else {
        this.openProxy = c;
      }
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
