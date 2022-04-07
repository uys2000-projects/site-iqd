<template>
  <form @submit.prevent="simulateSubmit" class="login">
    <q-input v-model="mail" label="E-mail" />
    <q-input v-model="pass" label="Pass" type="password" />

    <div class="b">
      <q-btn
        color="black"
        label="Login"
        class="absolute right"
        type="submit"
        @click="loginFunc"
      />
      <p
        v-if="loginError | loginTry"
        style="margin: 0px auto; margin-right: 0px"
      >
        {{ loginTry ? "Giriş Yapılıyor" : "Hata Var Brom" }}
      </p>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    loginError: Boolean,
    loginTry: Boolean,
  },
  emits: ["loginEvent"],
  data() {
    return {
      mail: null,
      pass: null,
    };
  },
  methods: {
    loginFunc: function () {
      this.$emit("loginEvent", [this.mail, this.pass]);
    },
  },
};
</script>
<style scoped>
.login {
  border: burlywood 2px solid;
  border-radius: 50px;
  padding: 50px 75px;
  position: relative;
  width: 60%;
  max-width: 700px;
  margin: auto;
  top: 30%;
}
.q-btn {
  margin: auto;
  margin-right: 10px;
  width: 40%;
}
.b {
  display: flex;
  width: 100%;
  height: 50px;
  flex-wrap: wrap;
}
</style>