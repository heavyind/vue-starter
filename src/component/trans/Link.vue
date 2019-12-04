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


export default {
  props: {
    to: {
      required: true,
      type: String
    },
    duration: {
      required: false,
      type: [Number, null],
      default: null
    },
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
      setExplicitDuration: "trans/setExplicitDuration"
    }),
    handleClick(e) {
      e.preventDefault();
      if (this.duration !== null) {
        this.setExplicitDuration(this.duration);
      }
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
