<template>
  <div class="container d-flex justify-content-center align-items-center h-75">
    <form class="w-50">
      <h1>{{ content.register }}</h1>

      <validation-provider rules="required" v-slot="{ errors }">
        <FormItem
          :form-title="content.username"
          form-type="text"
          :value="registerCreds.username"
          v-model="registerCreds.username"
        />
        <span class="error">{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider rules="required|email" v-slot="{ errors }">
        <FormItem
          :form-title="content.email"
          form-type="email"
          :value="registerCreds.email"
          v-model="registerCreds.email"
        />
        <span class="error">{{ errors[0] }}</span>
      </validation-provider>

      <ValidationObserver>
        <validation-provider
          rules="required|password:confirm"
          v-slot="{ errors }"
        >
          <FormItem
            :form-title="content.password"
            form-type="password"
            :value="registerCreds.password"
            v-model="registerCreds.password"
          />
          <span class="error">{{ errors[0] }}</span>
        </validation-provider>

        <validation-provider rules="required" v-slot="{ errors }">
          <FormItem
            :form-title="content.passwordConfirm"
            form-type="password"
            :value="registerCreds.password"
            v-model="registerCreds.password"
          />
          <span class="error">{{ errors[0] }}</span>
        </validation-provider>
      </ValidationObserver>

      <button
        type="submit"
        class="btn btn-md w-100 mt-3"
        @click.prevent="register()"
      >
        {{ content.submit }}
      </button>
    </form>
  </div>
</template>

<script>
import FormItem from "@/components/FormItem";
import { ValidationProvider, extend } from "vee-validate";
import { ValidationObserver } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import { email } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required"
});

extend("email", {
  ...email,
  message: "Please enter a correct mail"
});

extend("password", {
  params: ["target"],
  validate(value, { target }) {
    return value === target;
  },
  message: "Password confirmation does not match"
});

export default {
  name: "Registration",
  components: { FormItem, ValidationProvider, ValidationObserver },
  data: function() {
    return {
      content: {
        register: "registration",
        submit: "REGISTER",
        email: "E-Mail Address",
        password: "Password",
        username: "Username",
        passwordConfirm: "Confirm Password"
      },
      registerCreds: {
        email: "",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    register: function() {
      let data = {
        username: this.registerCreds.username,
        email: this.registerCreds.email,
        password: this.registerCreds.password
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/catwalk"))
        .catch(err => console.log(err));
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

.invalidForm {
  animation-name: shake;
  animation-timing-function: ease-in;
  animation-duration: 2s;
}

.error {
  color: red;
  margin-bottom: 1rem;
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
