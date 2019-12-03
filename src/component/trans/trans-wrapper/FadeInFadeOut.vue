<template>
  <trans name="trans-fade-in-fade-out">
    <slot></slot>
  </trans>
</template>


<script>
import mixinTrans from "../mixin/trans";


export default {
  name: "trans-fade-in-fade-out",
  mixins: [mixinTrans]
};
</script>

<style lang="sass">

.trans-fade-in-fade-out-enter-active
  transition: opacity 0.7s
  opacity: 1

.trans-fade-in-fade-out-enter
  opacity: 0

.trans-fade-in-fade-out-leave-active
  transition: opacity 0.7s
  opacity: 0


</style>
