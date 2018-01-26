<template>
  <div>
    Home page
    <a href="/about">Go to about</a>
  </div>
</template>

<script>
export default {
  name: "page-home",
  data () {
    return {};
  },
  render: h => { return h("div", "works"); }
};
</script>
