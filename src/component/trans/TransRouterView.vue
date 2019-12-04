<template>
  <transition
    mode="out-in"
    :duration="transCurrent.duration"
    @beforeLeave="transBeforeLeave"
    @beforeEnter="transBeforeEnter">
      <router-view></router-view>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";


export default {
  name: "trans-router-view",
  computed: {
    ...mapState({
      transCurrent: state => state.trans.current
    })
  },
  methods: {
    ...mapActions({
      transHide: "trans/hide",
      transShow: "trans/show",
      transSetCurrentAsDefault: "trans/setCurrentAsDefault"
    }),
    transBeforeLeave () {
      this.transHide();
    },
    transBeforeEnter () {
      this.transShow();
      this.transSetCurrentAsDefault();
    }
  }
};
</script>
