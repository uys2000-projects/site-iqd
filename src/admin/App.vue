<template>
  <login-page
    v-if="!isLogged"
    @loginEvent="loginEvent"
    :loginError="loginError"
    :loginTry="loginTry"
  />
  <adminPanel v-if="isLogged" />
</template>
<script>
import loginPage from "./components/login.vue";
import adminPanel from "./components/body.vue";

import { loginFunc } from "@/services/service-login.js";
export default {
  components: {
    loginPage,
    adminPanel,
  },
  data() {
    return {
      isLogged: false,
      loginError: false,
      loginTry: false,
    };
  },
  methods: {
    loginEvent: function (items) {
      this.loginTry = true;
      loginFunc(items[0], items[1])
        .then(() => {
          this.isLogged = true;
          this.loginError = false;
          this.loginTry = false;
        })
        .catch(() => {
          this.loginError = true;
          this.loginTry = false;
        });
    },
  },
};
</script>