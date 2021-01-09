<template>
  <form>
    <h1>login</h1>
    <FormItem
      form-title="E-Mail Address"
      form-type="email"
      :form-placeholder="exampleMail"
    />
    <FormItem form-title="Password" form-type="password" />
    <button type="submit" class="btn btn-md w-100 mt-3">SUBMIT</button>
    <small class="mt-3">{{ small }} <a href="register">Register here</a></small>
  </form>
</template>

<script>
import FormItem from "@/components/FormItem";
export default {
  name: "Login",
  components: { FormItem },
  data: function() {
    return {
      small: "Not yet on Kado?",
      url: "register",
      exampleMail: "karl@lagerfeld.com"
    };
  }
};
</script>

<style scoped>
form {
  border: 3px solid black;
  padding: 2.5rem 4rem;
}

button {
  border: 2px solid black;
  font-family: "Teko", sans-serif;
  font-size: 2rem;
}

button:hover {
  background: black;
  color: white;
}

small > a {
  color: black;
  text-decoration: underline;
}
</style>
