import Vue from "vue";
import App from "./App.vue";

// Event Bus allows child to child communication.
// A new Vue instance.
export const serverBus = new Vue();

new Vue({
  el: "#app",
  render: (h) => h(App),
});
