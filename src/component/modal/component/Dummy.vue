<template>
  <div class="modal-dummy">
    Dummy modal component
    <button @click="modalClose">Close modal</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";


export default {
  name: "modal-dummy",
  methods: {
    ...mapActions({
      modalClose: "modal/close"
    })
  }
};
</script>

<style lang="sass">

.modal-dummy
  color: white
</style>
