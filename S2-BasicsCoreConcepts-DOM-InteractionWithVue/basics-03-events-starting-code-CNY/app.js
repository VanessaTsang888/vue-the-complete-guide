/*
Basic and Core Concepts - DOM Interaction with Vue.
1. Events & Methods:
It's best practice to write most of the logic in our Javascript code and example is updating the counter logic for this CNY app is in our Javascript code which is best practice.




*/

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
});

app.mount("#events");
