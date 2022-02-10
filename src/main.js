import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Importar los archivos CSS de Bootstrap y BootstrapVue (el orden es importante)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Haz que BootstrapVue esté disponible en todo tu proyecto
Vue.use(BootstrapVue);
// Opcionalmente, instale el plugin de componentes de iconos BootstrapVue
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
