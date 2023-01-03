import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
//import sw from "./sw";

const app = createApp(App);

app.use(createPinia());
//app.use(sw);
app.use(router);

app.mount("#app");
