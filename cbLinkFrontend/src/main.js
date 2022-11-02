import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";

const app = createApp(App).use(router);

// createApp(App).mount("#app").use(router);
app.mount("#app");
