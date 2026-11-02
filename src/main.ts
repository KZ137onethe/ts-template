import { createApp } from "vue";
import App from "./App.vue";

const instance = createApp(App)

instance.mount("#app")

console.warn("当前vue版本：", instance.version)
