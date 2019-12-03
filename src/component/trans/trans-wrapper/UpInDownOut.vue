<template>
  <div class="trans-up-in-down-out-wrap" :style="wrapStyle">
    <trans name="trans-up-in-down-out"
      :initOnly="initOnly"
      :delay="delay"
      :beforeEnter="beforeEnter"
      :afterEnter="afterEnter"
      :beforeLeave="beforeLeave"
      :afterLeave="afterLeave">
      <slot></slot>
    </trans>
  </div>
</template>


<script>
import mixinTrans from "../mixin/trans";


export default {
  name: "trans-up-in-down-out",
  mixins: [mixinTrans],
  data () {
    return {
      transitioning: false
    };
  },
  methods: {
    beforeEnter () {
      this.transitioning = true;
    },
    afterEnter () {
      this.transitioning = false;
    },
    beforeLeave () {
      this.transitioning = true;
    },
    afterLeave () {
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

.trans-up-in-down-out-enter-active, .trans-up-in-down-out-leave-active
  transition: transform 0.70s $easing-function

.trans-up-in-down-out-enter, .trans-up-in-down-out-leave-active
  transform: translateY(100%)

</style>
