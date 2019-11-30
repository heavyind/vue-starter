<template>
  <div>
    <trans-up-in-down-out>
      <div>Home page</div>
    </trans-up-in-down-out>
    <trans-link to="/about">About</trans-link>
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
