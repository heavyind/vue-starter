<template>
  <div class="preloader">
    <div class="preloader__content">Loading</div>
  </div>
</template>

<script>

export default {
  name: "preloader"
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
</style>
