<template>
  <div class="d-flex align-items-center">
    <div :class="{ openNav: isResponsive }">
      <BIconBarChartSteps />
      <router-link class="px-3" to="/">Home</router-link>
      <router-link class="px-3" to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavigationItems",
  data: function() {
    return {
      responsiveMenu: false
    };
  },
  props: {
    isResponsive: Boolean
  }
};
</script>

<style scoped>
a {
  padding: 0 2rem;
  font-family: "Teko", sans-serif;
  font-size: 3rem;
  color: black;
  font-weight: 600;
}

a:hover {
  color: black;
}

.openNav {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
