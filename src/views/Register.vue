<template>
  <div class="vh-100">
    <Navigation />
    <Registration />
    <Footer />
  </div>
</template>

<script>
import Registration from "@/components/Registration";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default {
  name: "Register",
  components: { Footer, Navigation, Registration }
};
</script>

<style scoped></style>
