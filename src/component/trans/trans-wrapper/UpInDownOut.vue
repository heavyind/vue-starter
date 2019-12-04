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
import Trans from "@/component/trans/Trans.vue";
import mixinTransProps from "../mixin/trans-props";


export default {
  name: "trans-up-in-down-out",
  mixins: [mixinTransProps],
  components: { Trans },
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

.trans-up-in-down-out-enter-active, .trans-up-in-down-out-leave-active
  transition: transform 0.70s $easing-function

.trans-up-in-down-out-enter, .trans-up-in-down-out-leave-active
  transform: translateY(100%)

</style>
