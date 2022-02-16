/*
Assignment 5: Conditional Content & Lists;
Lists and conditional content:

Directives: v-if, v-show and v-for
*/

const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: "", // this is the user's input task value
      tasks: [], // the user's task value they add into the input field will be stored in this Array
      taskListIsVisible: true, // T3: conditional rendering. Initially we want to show the task list on the screen. This works with the method 'toggleTaskList()'. We need this so we can switch between true and false using the second button
    };
  },
  // T3 BONUS: Also update the button caption 'Hide/Show List' so that When this button is pressed, the button should display Hide List or Show List. Allow user to toggle between the two.
  computed: {
    buttonCapText() {
      return this.taskListIsVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue); // Reach out to our tasks Array. Also, This will push the user's task value input in to the tasks Array
    },
    removeTask(inx) {
      this.tasks.splice(inx, 1); // using the splice() method to find the element at this index and remove it from the tasks array.
    },
    // Switch between true and false on the data property of 'taskListIsVisible'
    toggleTaskList() {
      this.taskListIsVisible = !this.taskListIsVisible; // set taskListIsVisible to what its currently not using the exclamation mark. Ensure if taskListIsVisible is true then its now set to false and the other way. So we switch between true and false
    },
  },
});

app.mount("#assignment");
