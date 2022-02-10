const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      confirmedInput: "",
    };
  },
  methods: {
    // methods is a default name. This holds multiple methods and the naming is custom so I can make up the names of the methods.
    showAlert() {
      // custome method name
      alert("Vanessa is cool, Ya!"); // I made up this String
    },
    saveInput(event) {
      this.userInput = event.target.value; // target is the DOM/HTML
    },
    confirmInput() {
      this.confirmedInput = this.userInput; // The userInput save inside of the confirmedInput variable and this is connected to the same variable in the return Object above.
    },
  },
});

app.mount("#assignment");
