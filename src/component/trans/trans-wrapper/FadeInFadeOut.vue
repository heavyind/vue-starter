<template>
  <trans name="trans-fade-in-fade-out" v-bind="$props">
    <slot></slot>
  </trans>
</template>


<script>
import Trans from "@/component/trans/Trans.vue";
import mixinTransProps from "@/component/trans/mixin/trans-props";

export default {
  name: "trans-fade-in-fade-out",
  mixins: [mixinTransProps],
  components: { Trans }
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
