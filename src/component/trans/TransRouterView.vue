<template>
  <transition
    mode="out-in"
    :duration="routeDuration"
    @beforeLeave="transBeforeLeave"
    @beforeEnter="transBeforeEnter">
      <router-view></router-view>
  </transition>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";


export default {
  name: "trans-router-view",
  computed: {
    ...mapGetters({
      routeDuration: "trans/routeDuration"
    })
  },
  methods: {
    ...mapActions({
      transHide: "trans/hide",
      transShow: "trans/show",
      transReset: "trans/resetNavigation"
    }),
    transBeforeLeave () {
      this.transHide();
    },
    transBeforeEnter () {
      this.transShow();
      this.transReset();
    }
  }
};
</script>
