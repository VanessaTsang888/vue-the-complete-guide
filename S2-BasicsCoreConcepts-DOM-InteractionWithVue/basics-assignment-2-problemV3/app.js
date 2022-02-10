/*
10-02-2022, 12:20 - 12:55
I am retaking this assignment as I didn't do as well the first time round.

1. Write the app structure and connect to the HTML code.
2. Task 01: In the HTML code, write the directive/special attribute that listens for click event. In the JS code, write a methods Object and inside it write the show alert method to output
an alert which is my custom message that I can make up myself. Update the directive attribute with the value of that showAlert method so we are just pointing at that method.
3. Write another method inside of methods Object named saveInput as we need to save the user's input to output it in the <p> element. This method needs an argument of a event Object.
At the top of the global Vue Object, write a data() method and inside a return Object with a key-pair-value of userInput but initialise it with an empty String. In the savInput method 
use this variable to connect the method saveInput to the variable using the 'this' keyword and to assign this to the user's value that is inside of the target (DOM/HTML) that is inside 
of the event so that the value is stored inside of the variable.
4. Copy/past the special attribute from the first input element into the second input element. Write a new custom method named confirmInput() within the methods Object. In the return 
Object write a second property named confirmedInput and initialise it with empty String. In the confirmInput method use this 'this' keyword to point the confirmedInput property as we need 
to access its value which is the empty String. Assign this to the userInput using the 'this' keyword. Update the value within the special attribute in the second input element with the new method confirmInput.
5. Update the <p> element with the confirmedInput property that is inside of the return Object.


*/

const app = Vue.createApp({
  data() {
    return { userInput: "", confirmedInput: "" };
  },
  methods: {
    showAlert() {
      alert("Vanessa is learning Vue.js - Ya!");
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
    confirmInput() {
      this.confirmedInput = this.userInput;
    },
  },
});

app.mount("#assignment");
