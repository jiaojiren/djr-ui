import Vue from "vue";
import App from "./App.vue";

import HeimaUI from "../packages";

Vue.use(HeimaUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
