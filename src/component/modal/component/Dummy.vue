<template>
  <div class="modal-dummy">
    <transition appear name="modal-dummy">
      <div v-if="open">
        <div>Dummy modal component</div>
        <button @click="modalClose">Close modal</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
  name: "modal-dummy",
  methods: {
    ...mapActions({
      modalClose: "modal/close"
    })
  },
  computed: {
    ...mapState({
      open: state => state.modal.open
    })
  }
};
</script>

<style lang="sass">

.modal-dummy
  color: white

.modal-dummy-enter-active
  opacity: 1
  transition: opacity 0.2s linear 0.2s

.modal-dummy-enter
  opacity: 0

.modal-dummy-leave-active
  opacity: 0
  transition: opacity 0.5s linear
</style>
