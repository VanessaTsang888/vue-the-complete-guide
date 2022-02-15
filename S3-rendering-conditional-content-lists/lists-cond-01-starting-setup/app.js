/*
L40 Understand the Problem:
Using conditional rendering with v-if directive to output the message when the app runs at the start.


*/

const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "", // this data property is the actual value the user enters in the input field
      goals: [], // this is the Array that the user's value get put inside
    };
  },
  methods: {
    addGoal() {
      // this method is used as the value of the directive of the click listener inside of the button element in HTML code. So when user click the button their goal value is added to the goals Array
      this.goals.push(this.enteredGoalValue); // current goal value to my goal Array.
    },
    removeGoal(inx) {
      // Remove a goal at this index
      this.goals.splice(inx, 1); // using the splice() method to find the element at this index and remove it from the goals array.
    },
  },
});

app.mount("#user-goals");
