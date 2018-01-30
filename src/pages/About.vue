<template>
  <div>
    About page
  </div>
</template>

<script>
export default {
  name: "page-about",
  mounted () {
    console.log(document.getElementById("app").offsetHeight);
  },
  data () {
    return {
    };
  }
};
</script>
