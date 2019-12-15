<template>
  <div class="trans-up-in-down-out-wrap" :style="wrapStyle">
    <trans name="trans-up-in-down-out"
      v-bind="$props"
      :beforeEnter="_beforeEnter"
      :afterEnter="_afterEnter"
      :beforeLeave="_beforeLeave"
      :afterLeave="_afterLeave">
      <slot></slot>
    </trans>
  </div>
</template>


<script>
import VueTrans from "@heavyind/vue-trans";


export default {
  name: "TransUpInDownOut",
  mixins: [VueTrans.transProps],
  data () {
    return {
      transitioning: false
    };
  },
  methods: {
    _beforeEnter () {
      this.transitioning = true;
    },
    _afterEnter () {
      this.transitioning = false;
    },
    _beforeLeave () {
      this.transitioning = true;
    },
    _afterLeave () {
      this.transitioning = false;
    }
  },
  computed: {
    shouldOverflow () {
      return this.transitioning === false;
    },
    wrapStyle () {
      return this.transitioning ? "overflow: hidden" : "overflow: visible";
    }
  }
};
</script>


<style lang="sass">

$easing-function: cubic-bezier(0, 0.91, 0.35, 1)

.trans-up-in-down-out-wrap
  overflow: hidden

.trans-up-in-down-out-enter-active, 
  transition: transform  $easing-function

.trans-up-in-down-out-enter
  transform: translateY(100%)

.trans-up-in-down-out-leave-active
  transform: translateY(100%)
  transition: transform  $easing-function

</style>
