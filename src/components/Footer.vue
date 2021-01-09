<template>
  <footer class="d-flex justify-content-center py-4 w-max">
    <div>
      <p>
        {{ items.name }} {{ items.year }}
        <a :href="items.url">Check this on Github</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data: function() {
    return {
      items: {
        year: "2021",
        name: "Kado by Vedat Demiri",
        url: "https://www.github.com/bedato/webapp"
      }
    };
  }
};
</script>

<style scoped>
footer {
  background: black;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
}

a {
  color: white;
  text-decoration: underline;
}
</style>
