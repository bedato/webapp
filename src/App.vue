<template>
  <div id="app">
    <Navigation />
    <Introduction />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Introduction from "@/components/Introduction";

export default {
  components: { Introduction, Navigation },
  created() {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Teko:wght@400;600&display=swap");

body {
  font-family: "Montserrat", sans-serif !important;
}

h1 {
  font-family: "Teko", sans-serif !important;
  text-transform: uppercase;
}
</style>
