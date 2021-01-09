<template>
  <div class="form-group">
    <label :for="formType">{{ formTitle }}</label>
    <input
      :type="formType"
      class="form-control"
      :id="formType"
      :placeholder="formPlaceholder"
    />
  </div>
</template>

<script>
export default {
  name: "FormItem",
  props: {
    formType: String,
    formPlaceholder: String,
    formTitle: String
  }
};
</script>

<style scoped></style>
