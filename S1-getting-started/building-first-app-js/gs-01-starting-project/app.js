/*

Add Goals app - part 2:
Same as lecture 5 but instead of vanilla Javascript use Vue and understand the benefits.

*/

/*

Vanilla Javascript:
We are using the dom to make our app reactive, dynamic, interactive, we define every single step -> imperative approach:

*/

/*

// Targeting elements on the page:
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

// This fn gets executed when user clicks the button named Add Goal:
// in the fn, get access to the entered value, create a list item element, add the text content, append the list item, clear the value.
function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

// Add a click event handler to the button, execute the fn when a click occurs:

buttonEl.addEventListener("click", addGoal);

*/

/*

Using Vue is a totally different approach. To use Vue:
Install Vue: https://v3.vuejs.org/guide/installation.html#release-notes

Since this is just a small project we can use the CDN link: <script src="https://unpkg.com/vue@next"></script>

In the data fn, return two pieces of data, the goals Array and the value the user entered - initailly set to an empty String.
Also, inside this create App, we need a method key that contains an Object with our addGal fn so we can push the user's value/input into the goals Array.
Once user has clicked the button, we want to clear the input ready for user to enter their next goal.
The mount fn -> we need to tell Vue where on the page we want this feature, so we pass-in the CSS Class of id using the hash symbol then the app element thatis
in the HTML file -> <div id="app"></div>

*/

// Import Vue the global Object that's available thanks to our view CDN import within script tag in HTML file,
// A property data that holds a fn as a value.
// The enteredValue data property has to be inside of the v-model attribute that's inside of the input element within the HTML file so that Vue can manage and update the input for us when user
// changes their goal in the input field.
// Button: we get what's stored in the enteredValue data property and add that to the goals Array.
// The: methods key which holds an Object (another key-value-pair), we add the addGoal() method, reach out to goals Array, and add the current entered value by writing:
// this.goals.push(this.enteredValue);
// The 'this' keyword is connected to the data() Object that's the magic happens when the button is clicked.
// The addGoal() method will get executed whenever the button gets clicked. Then will auto give us the currently entered value, add it as a new value to the goals Array.
// we call mount() and let Vue know which part of the page should be controlled by that Vue app. The div with id of app has all the mark-up code we need so we use the id
// selector as the argument inside of mount()
// To reset the input, set the entered value to an empty Sting: this.enteredValue = '';
// Vue will reach out to the DOM and make the required update.
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");
