<template>
  <a
    @click="handleClick"
    :class="classes"
    :href="to">
    <slot></slot>
  </a>
</template>


<script>
import { mapActions } from "vuex";
import Vue from "vue";
import transLinkMixin from "./mixin/trans-link";


export default {
  mixins: [transLinkMixin],
  props: {
    activeClass: {
      type: String,
      required: false,
      default: "trans-link-active"
    }
  },
  computed: {
    isExact () {
      return this.$route.path === this.to ? true : false;
    },
    classes () {
      return {
        [this.activeClass]: this.isExact
      };  
    }
  },
  methods: {
    ...mapActions({
      transHide: "trans/hide",
      transSetCurrent: "trans/setCurrent"
    }),
    handleClick(e) {
      e.preventDefault();
      if (this.trans) { this.transSetCurrent(this.trans); }
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
