<template>
  <transition
    :appear="appear"
    :name="name"
    @beforeEnter="_beforeEnter"
    @enter="_enter"
    @after-enter="_afterEnter"
    @enter-cancelled="_enterCancelled"
    @beforeLeave="_beforeLeave"
    @leave="_leave"
    @after-leave="_afterLeave"
    @leave-cancelled="_leaveCancelled">
    <div ref="el" v-show="state">
      <slot></slot>
    </div>
  </transition>
</template>


<script>
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import { normalizeTime } from "./util";
import mixinTransProps from "./mixin/trans-props";


export default {
  name: "component-trans",
  mixins: [mixinTransProps],
  computed: {
    ...mapState({
      transShow: state => state.trans.show,
      transShowOnce: state => state.trans.initFlag
    }),
    state () {
      return this.initOnly === true ? this.transShowOnce : this.transShow;
    },
    appear () {
      return !this.initOnly;
    }
  },
  methods: {
    normalizeTime,
    ...mapActions({
      registerDuration: "trans/registerDuration"
    }),
    addDuration (el, duration) {
      el.style.transitionDuration = `${duration}ms`;
    },
    addDelay (el, delay) {
      el.style.transitionDelay = `${delay}ms`;
    },
    _beforeEnter (el) {
      if (this.delay !== null) {
        console.log("The delay is", this.delay);
        const delay = typeof this.delay === "number" ? this.delay : this.delay.enter;
        this.addDelay(el, delay);
      }
      if (this.duration !== null) {
        const duration = typeof this.duration === "number" ? this.duration : this.duration.enter;
        this.addDuration(el, duration);
      }
      if (this.beforeEnter) { this.beforeEnter(); }
    },
    _enter () {
      if (this.enter) { this.enter(); }
    },
    _afterEnter () {
      if (this.afterEnter) { this.afterEnter(); }
    },
    _enterCancelled () {
      if (this.enterCancelled) { this.enterCancelled(); }
    },
    _beforeLeave (el) {
      if (this.delay !== null) {
        const delay = typeof this.delay === "number" ? this.delay : this.delay.leave;
        this.addDelay(el, delay);
      }
      if (this.duration !== null) {
        const duration = typeof this.duration === "number" ? this.duration : this.duration.leave;
        this.addDuration(el, duration);
      }
      if (this.beforeLeave) { this.beforeLeave(); }
    },
    _leave () {
      if (this.leave) { this.leave(); }
    },
    _afterLeave () {
      if (this.afterLeave) { this.afterLeave(); }
    },
    _leaveCancelled () {
      if (this.leaveCancelled) { this.leaveCancelled(); }
    }
  },
  watch: {
    transShow (b) {
      if (!b) {
        const f = () => {
          const computedDur = window.getComputedStyle(this.$refs.el).transitionDuration;
          const computedDel = window.getComputedStyle(this.$refs.el).transitionDelay;
          const normalizedDur = this.normalizeTime(computedDur);
          const normalizedDel = this.normalizeTime(computedDel);
          this.registerDuration(normalizedDur + normalizedDel);
        };
        Vue.nextTick(f);
      }
    }
  }
};
</script>
