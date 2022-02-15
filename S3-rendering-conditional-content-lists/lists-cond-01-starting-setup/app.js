/*
L40 Understand the Problem:
Using conditional rendering with v-if directive to output the message when the app runs at the start.


*/

const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue); // current goal value to my goal Array.
    },
  },
});

app.mount("#user-goals");
