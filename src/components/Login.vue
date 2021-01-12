<template>
  <form>
    <h1>{{ content.login }}</h1>

    <FormItem
      form-title="E-Mail Address"
      form-type="email"
      :form-placeholder="content.exampleMail"
      :value="loginCreds.email"
      :has-error="true"
      v-model="loginCreds.email"
    />
    <FormItem
      form-title="Password"
      form-type="password"
      :value="loginCreds.password"
      v-model="loginCreds.password"
    />

    <div class="error-container" v-if="this.loginCreds.loginFailed === true">
      <small class="error-message">{{ content.hasError }}</small>
    </div>

    <button
      type="submit"
      class="btn btn-md w-100 mt-3"
      :class="{ invalidForm: addAnimation }"
      @click.prevent="
        login();
        loginSuccess();
      "
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
        register: "Register here",
        hasError: "Username or Email do not match our records"
      },
      loginCreds: {
        email: "",
        password: "",
        loginFailed: false
      },
      addAnimation: false
    };
  },
  methods: {
    login: function() {
      let email = this.loginCreds.email;
      let password = this.loginCreds.password;

      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/feed"))
        .catch(err => console.log(err), (this.loginCreds.loginFailed = true));
    },
    loginSuccess: function() {
      if (this.$store.getters.authStatus === "loading") {
        this.addAnimation = true;
        setTimeout(() => {
          this.addAnimation = false;
        }, 1000);
        this.loginCreds.loginFailed = true;
      }
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
  position: relative;
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

.error-message {
  color: red;
  text-decoration: underline;
}

.invalidForm {
  animation-name: shake;
  animation-timing-function: ease-in;
  animation-duration: 2s;
}

@keyframes shake {
  0% {
    left: 0;
  }
  1% {
    left: -3px;
  }
  2% {
    left: 5px;
  }
  3% {
    left: -8px;
  }
  4% {
    left: 8px;
  }
  5% {
    left: -5px;
  }
  6% {
    left: 3px;
  }
  7% {
    left: 0;
  }
}
</style>
