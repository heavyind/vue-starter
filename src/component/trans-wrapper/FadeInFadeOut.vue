<template>
  <trans name="trans-fade-in-fade-out" v-bind="$props">
    <slot></slot>
  </trans>
</template>


<script>
import VueTrans from "@heavyind/vue-trans";


export default {
  name: "trans-fade-in-fade-out",
  mixins: [VueTrans.transProps]
};
</script>


<style lang="sass">

.trans-fade-in-fade-out-enter-active
  transition: opacity
  opacity: 1

.trans-fade-in-fade-out-enter
  opacity: 0

.trans-fade-in-fade-out-leave-active
  transition: opacity 
  opacity: 0
</style>
