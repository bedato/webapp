<template>
  <div class="container vh-100">
    <div class="row pt-5">
      <div class="col-sm d-flex justify-content-center pt-5">
        <IndexPresentation />
      </div>
      <div class="col-sm d-flex justify-content-center pt-5">
        One of three columns
      </div>
    </div>
  </div>
</template>

<script>
import IndexPresentation from "@/components/IndexPresentation";
export default {
  name: "Introduction.vue",
  components: { IndexPresentation },
  data: function() {
    return {
      scrollPosition: null,
      isResponsive: true,
      windowWidth: window.innerWidth
    };
  }
};
</script>

<style scoped></style>
