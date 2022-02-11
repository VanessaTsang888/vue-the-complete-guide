/*

Assignment 3: Time to Practice Reactivity:
Task 01:
Events, methods, and computed properties in action.
Task 02:
Watcher -> timmer: watch the computed property of result() and when this changes (other than 0) we want to trigger the watcher.
Testing on the UI: keep pressing the Add 5 btn until I get 'Too much!'. After 5 seconds, Vue will change the output to 'Not there yet!' for us.


*/

const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  // this computed property depends on our number property. The value will be displayed using the paragraph in HTML code.
  // The 'number' is the dependency and when it changes then Vue will evaluate the 'number' data property in the data() config which is a method.
  // number starts at 0
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet!";
      } else if (this.number === 37) {
        return this.number;
        // if greater than 37
      } else {
        return "Too much!";
      }
    },
  },
  // watch the computed property of result() and when this changes (other than 0) we want to trigger the watcher.
  // Test: keep pressing the Add 5 btn until I get 'Too much!'. After 5 seconds, Vue will change the output to 'Not there yet!' for us.
  watch: {
    result(value) {
      const that = this;
      setTimeout(function () {
        that.number = 0; // set back to 0
      }, 5000); // in 5 seconds Will output 'Not there yet!'
    },
  },
  methods: {
    addNumber(num) {
      // using this for two different btn's
      this.number = this.number + num;
    },
  },
});

app.mount("#assignment");
