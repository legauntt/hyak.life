import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/global.css";

const app = createApp(App);

app.use(router);
app.mount("#app");

if ("serviceWorker" in navigator) {
  // remove service-worker for legacy clients
  navigator.serviceWorker
    .register("/service-worker.js", { scope: "/" })
    .then((registration) => {
      // registration worked
      registration.unregister().then((boolean) => {
        // if boolean = true, unregister is successful
      });
    })
    .catch((error) => {
      // console.error(error);
    });
}
