<template>
  <a @click="handleClick" :href="to"><slot></slot></a>
</template>


<script>
import { mapActions } from "vuex";
import Vue from "vue";
import transLinkMixin from "./mixin/trans-link";


export default {
  mixins: [transLinkMixin],
  methods: {
    ...mapActions({
      transHide: "trans/hide",
      setTransition: "trans/setTransCurrent"
    }),
    handleClick(e) {
      e.preventDefault();
      if (this.trans) { this.setTransition(this.trans); }
      if (this.to !== this.$route.path) {
        Vue.nextTick(() => {
          this.transHide();
          this.$router.push(this.to);
        });
      } 
    }
  }
};
</script>
