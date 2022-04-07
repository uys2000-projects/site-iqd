import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "../quasar-user-options";

const store = createStore({
  state() {
    return {
      text: null,
    };
  },
  mutations: {},
});

createApp(App).use(Quasar, quasarUserOptions).use(store).mount("#app");
