<template>
  <div>
    <nav
      :class="{ effect: scrollPosition < 100, none: scrollPosition > 100 }"
      class="d-flex justify-content-between container py-3"
    >
      <Logo />
      <NavigationItems v-bind:isResponsive="isResponsive" />
    </nav>
  </div>
</template>

<script>
import NavigationItems from "@/components/NavigationItems";
import Logo from "@/components/Logo";

export default {
  name: "Navigation",
  components: { Logo, NavigationItems },
  data: function() {
    return {
      scrollPosition: null,
      isResponsive: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  }
};
</script>

<style scoped>
.effect {
  border-bottom: 3px solid black;
  transition: border-bottom 0.1s ease-in-out;
}
</style>
