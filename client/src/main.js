import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import naive from "naive-ui";
import { createPinia } from "pinia";
import uis from "@/components/UI";
// import styles from "@/assets/styles.module";

const app = createApp(App);
uis.forEach((component) => {
  app.component(component.name, component);
});
app.use(router).use(naive).use(createPinia).mount("#app");
