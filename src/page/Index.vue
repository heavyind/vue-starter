<template>
  <div class="page-index">
    <trans-up-in-down-out :duration="700">
      <h1>Home page</h1>
    </trans-up-in-down-out>
  </div>
</template>

<script>
import TransUpInDownOut from "@/component/trans/trans-wrapper/UpInDownOut.vue";

export default {
  name: "page-index",
  components: {
    TransUpInDownOut
  }
};
</script>

<style lang="sass">
</style>
