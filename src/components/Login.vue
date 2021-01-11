<template>
  <form>
    <h1>{{ content.login }}</h1>

    <FormItem
      form-title="E-Mail Address"
      form-type="email"
      :form-placeholder="content.exampleMail"
      :form-v-model="loginCreds.email"
      :value="loginCreds.email"
      v-model="loginCreds.email"
    />
    <FormItem
      form-title="Password"
      form-type="password"
      :value="loginCreds.password"
      v-model="loginCreds.password"
    />

    <button
      type="submit"
      class="btn btn-md w-100 mt-3"
      @click.prevent="login()"
    >
      {{ content.submit }}
    </button>
    <small class="mt-3"
      >{{ content.small }} <a href="register">{{ content.register }}</a></small
    >
  </form>
</template>

<script>
import FormItem from "@/components/FormItem";
export default {
  name: "Login",
  components: { FormItem },
  data: function() {
    return {
      content: {
        login: "login",
        small: "Not yet on Kado?",
        url: "register",
        exampleMail: "karl@lagerfeld.com",
        submit: "SUBMIT",
        register: "Register here"
      },
      loginCreds: {
        email: "",
        password: "",
        loginFailed: false
      }
    };
  },
  methods: {
    login: function() {
      //console.log(this.loginCreds.email);
      //console.log(this.loginCreds.password);
      let email = this.loginCreds.email;
      let password = this.loginCreds.password;
      console.log(password);
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/feed"))
        .catch(err => console.log(err), (this.loginCreds.loginFailed = true));
    }
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
