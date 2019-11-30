<template>
  <div>
    <trans-up-and-in>
      <div>Home page</div>
    </trans-up-and-in>
    <trans-link to="/about">About</trans-link>
  </div>
</template>

<script>
import TransUpAndIn from "@/component/trans/fx/UpAndIn.vue";

export default {
  name: "page-index",
  components: {
    TransUpAndIn
  }
};
</script>
