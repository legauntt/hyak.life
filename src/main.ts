import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css";

const app = createApp(App);

app.use(router);

app.mount("#app");

// Vue.filter("capitalize", function(value: string) {
//   if (!value) return "";
//   value = value.toString();
//   return value.charAt(0).toUpperCase() + value.slice(1);
// });

// Vue.use(Toasted);

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
