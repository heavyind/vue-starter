<template>
  <div class="preloader">
    <transition
      name="preloader__content">
      <div v-if="loading" class="preloader__content">
        Loading
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";


export default {
  name: "preloader",
  computed: {
    ...mapState({
      loading: state => !state.preload.done
    })
  }
};
</script>

<style lang="sass">

.preloader
  position: relative
  width: 100%
  height: 100%
  &__content
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    &-leave-active
      opacity: 0
      transition: opacity 0.4s linear
    &-leave
      opacity: 1
</style>
