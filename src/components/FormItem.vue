<template>
  <div class="form-group">
    <label :for="formType">{{ formTitle }}</label>
    <input
      :type="formType"
      class="form-control"
      :id="formType"
      :placeholder="formPlaceholder"
      :value="formValue"
      @change="formChanged"
      v-model="formValue"
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
  },
  data: function() {
    return {
      formValue: {}
    };
  },
  methods: {
    formChanged() {
      this.$emit("input", this.formValue);
    }
  },
  created() {
    this.formValue = this.value;
  }
};
</script>

<style scoped></style>
