<template>
  <div role="dialog" v-if="open" class="modal" :style="style">
    <component
      v-if="settings"
      :is="settings.component"
      v-bind="settings.props">
    </component>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
  props: {
    backgroundColor: {
      type: String,
      required: false,
      default: "rgba(0, 0, 0, 1.0)"
    }
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
    ...mapActions({
      close: "modal/close"
    }),
    handleKeyCodes (e) {
      if (e.keyCode === 27) { this.close(); }
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
