<template>
  <div class="w-50">
    <div v-if="isResponsive" class="d-flex justify-content-end">
      <div v-if="showNavigationItems">
        <BIconXSquare
          style="width: 60px; height: 60px;"
          @click="toggleNavigation"
        />
      </div>
      <div v-else>
        <BIconTextParagraph
          style="width: 60px; height: 60px;"
          @click="toggleNavigation"
        />
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-end">
      <div
        :class="{ openNav: isResponsive, openBurger: showNavigationItems }"
        v-if="showNavigationItems"
      >
        <router-link class="px-3" to="/">Home</router-link>
        <router-link class="px-3" to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { BIconTextParagraph, BIconXSquare } from "bootstrap-vue";

export default {
  name: "NavigationItems",
  data: function() {
    return {
      showNavigationItems: true
    };
  },
  components: {
    BIconXSquare,
    BIconTextParagraph
  },
  props: {
    isResponsive: Boolean
  },
  methods: {
    toggleNavigation: function() {
      this.showNavigationItems = !this.showNavigationItems;
    },
    hideBurgerMenu: function() {
      if (this.isResponsive) {
        this.showNavigationItems = false;
      }
    }
  },
  mounted() {
    this.hideBurgerMenu();
  }
};
</script>

<style scoped="scss">
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
