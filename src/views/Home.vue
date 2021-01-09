<template>
  <div class="home">
    <Navigation />
    <Introduction />
    <Footer />
  </div>
</template>

<script>
import Introduction from "@/components/Introduction";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default {
  name: "Home",
  components: { Navigation, Footer, Introduction }
};
</script>

<style scoped>
.home {
  max-height: 100vh;
}
</style>
