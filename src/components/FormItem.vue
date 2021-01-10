<template>
  <div class="form-group">
    <label :for="formType">{{ formTitle }}</label>
    <input
      :type="formType"
      class="form-control"
      :id="formType"
      :placeholder="formPlaceholder"
      :v-model="formVModel"
    />
  </div>
</template>

<script>
export default {
  name: "FormItem",
  props: {
    formType: String,
    formPlaceholder: String,
    formTitle: String,
    formVModel: String
  }
};
</script>

<style scoped></style>
