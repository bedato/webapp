import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

let timestamp = Math.floor(Date.now() / 1000).toString();

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .post(
            process.env.VUE_APP_API_URL + "login",
            {
              email: user.email,
              password: user.password
            },
            {
              headers: {
                "X-Request-Timestamp": timestamp,
                "X-Access-Token": process.env.VUE_APP_API_KEY
              }
            }
          )
          .then(resp => {
            console.log(resp);
            if (resp.data.user_code) {
              const token = resp.data.user_code;
              localStorage.setItem("token", token);
              axios.defaults.headers.common["Authorization"] = token;
              commit("auth_success", token);
              console.log("Token stored successfully! " + localStorage);
              resolve(resp);
            } else {
              this.state.errors = resp.data.errors;
              console.log(resp.data.errors);
            }
          })
          .catch(err => {
            console.log(err);
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios
          .post(
            process.env.VUE_APP_API_URL + "users",
            {
              email: user.email,
              password: user.password,
              username: user.username
            },
            {
              headers: {
                "X-Request-Timestamp": timestamp,
                "X-Access-Token": process.env.VUE_APP_API_KEY
              }
            }
          )
          .then(resp => {
            const token = resp.data.user_code;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token);
            console.log("User created successfully! " + localStorage);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  modules: {}
});
