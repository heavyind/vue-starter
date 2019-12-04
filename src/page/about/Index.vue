<template>
  <div class="page-about">
    <trans-fade-in-fade-out :duration="350">
      <h1>About page</h1>
    </trans-fade-in-fade-out>
  </div>
</template>

<script>
import TransFadeInFadeOut from "@/component/trans/trans-wrapper/FadeInFadeOut.vue";

export default {
  name: "page-about",
  components: {
    TransFadeInFadeOut
  }
};
</script>
