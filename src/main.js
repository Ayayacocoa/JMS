import Vue from "vue";
import App from "./App.vue";

import { axios_instance } from "./util/axios";

Vue.config.productionTip = false;


Vue.prototype.$axios = axios_instance;

new Vue({
  render: h => h(App)
}).$mount("#app");
