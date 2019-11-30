<template>
  <transition
    :appear="appear"
    :name="_name"
    @beforeEnter="_beforeEnter"
    @enter="_enter"
    @after-enter="_afterEnter"
    @enter-cancelled="_enterCancelled"
    @beforeLeave="_beforeLeave"
    @leave="_leave"
    @after-leave="_afterLeave"
    @leave-cancelled="_leaveCancelled">
    <div v-show="state">
      <slot></slot>
    </div>
  </transition>
</template>


<script>
import { mapState } from "vuex";


export default {
  name: "component-trans",
  props: {
    initOnly: {
      required: false,
      type: Boolean,
      default: false
    },
    delay: {
      required: false,
      type: [Number, Object],
      default: 0 
    },
    name: {
      required: false,
      type: String
    },
    duration: {
      required: false,
      type: [Number, Object]
    },
    beforeEnter: {
      type: Function,
      required: false
    },
    enter: {
      type: Function,
      required: false
    },
    afterEnter: {
      type: Function,
      required: false
    },
    enterCancelled: {
      type: Function,
      required: false
    },
    beforeLeave: {
      type: Function,
      required: false
    },
    leave: {
      type: Function,
      required: false
    },
    afterLeave: {
      type: Function,
      required: false
    },
    leaveCancelled: {
      type: Function,
      required: false
    }
  },
  computed: {
    ...mapState({
      transCurrentName: state => state.trans.current.name,
      transShow: state => state.trans.show,
      transShowOnce: state => state.trans.initFlag
    }),
    state () {
      return this.initOnly === true ? this.transShowOnce : this.transShow;
    },
    _name () {
      return this.name === undefined ? this.transCurrentName : this.name;
    },
    appear () {
      return !this.initOnly;
    }
  },
  methods: {
    addDuration (el, duration) {
      el.style.transitionDuration = `${duration}ms`;
    },
    addDelay (el, delay) {
      el.style.transitionDelay = `${delay}ms`;
    },
    _beforeEnter (el) {
      const delay = typeof this.delay === "number" ? this.delay : this.delay.enter;
      this.addDelay(el, delay);
      if (!(this.duration === undefined)) {
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
      const delay = typeof this.delay === "number" ? this.delay : this.delay.leave;
      this.addDelay(el, delay);
      if (!(this.duration === undefined)) {
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
  }
};
</script>
