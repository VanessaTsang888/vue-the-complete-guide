const app = Vue.createApp({
  data() {
    return { userInput: "", confirmedInput: "" }; // confirmedInput is for task 3.
  },
  methods: {
    showAlert() {
      // I made-up this method name so its not a default name.
      alert("Hello Vanessa");
    },
    saveInput(event) {
      // this is an keyboard event on an input element, can accept the default event Object as an argument
      // save what user enters in a variable to output in the paragraph element in the HTML code. So we need data.
      this.userInput = event.target.value; // target the HTML element which event occured - the input which has an value property which we can use to read the current value. Set the data property to whatever the user enters
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount("#assignment");
