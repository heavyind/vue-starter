<template>
  <div class="up-and-in-wrap" :style="wrapStyle">
    <trans name="up-and-in"
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


<style lang="sass" scoped>

$easing-function: cubic-bezier(0, 0.91, 0.35, 1)

.up-and-in-wrap
  overflow: hidden

.up-and-in-enter-active, .up-and-in-leave-active
  transition: transform 0.70s $easing-function

.up-and-in-enter
  transform: translateY(100%)

.up-and-in-leave-active
  transform: translateY(100%)

</style>
