/*
Vue makes developing reactive and dynamic pages easier.
L21 - Understanding Event Binding:
We want to react to user inputs, events etc.
-> Learning events in Vue.js
-> Counter startS from 0, managed in JS and output in HTML code.
-> Using the data() method to return the counter which starts from 0.
-> To connect the our data in our JS file to the HTML code we use the mount() method.
-> The idea is not to put too much logic into the HTML code as the HTML is about outputing stuff.
When the Add button is pressed we want to add 1 to the counter. When the Remove button gets pressed we want to deduct one from the counter.
Vanilla JS - imparative programming: document.querySelector('button').addEventListener()
Vue.js - declarative programming: we just declare our end result. We use the v-on directive to set an event listener on the button tag as we want to react on a certain event and v-on take an argument of click.
v-on can listen to all default events i.e. click, mouseenter, mouseleave etc.
-> We just declare where we want our event listeners (v-on:click) and where we want to output values (the button tag), and which values Vue should be aware of (the 0 value of the property counter within our JS file).
Then Vue to the rest of adding and managing those listeners, updating the counter behind the scenes and detecting when the counter changes, and updating the parts of the real rendered page, where updating is needed, 
when the counter changes.

L22 Events & Methods:
Using the 'this' keyword to update our counter within our JS code. Then just call it or point to it in our HTML code. JS will do the calling for us to update the counter when the user clicks the Add or Reduce button.
So the method will run when a click event occurs.

L23 Working with Event Arguments:
If we want to add a specific number to our Add button then we need to pass an argument into our method so we need to set this in our JS and can name our parameter: num
so its dynamic. Then we update our HTML by pass-in the value as the argument we want, i.e. <button v-on:click="add(10)">Add</button>

L24 Using the Native Event Object:
We want to let user input their name and we want to listen to every keystroke and the best event to listen to on an HTML element is the: input event (a default DOM event) rather than the keyup or keydown.
The method setName() will take in the user input via the input field as long as we return the name and initialise it with empty String.
The setName will be called on every keystroke event and this should update the name (our data and it's property within the return Object).
So as the user types into the input field the paragraph below auto updates -> Vue's reactivity in action.

*/

// retun Object with various properties and its value that could be any thing from a Number to a String.
// Methods Object contains multiple methods and some with arguments(s) - most of the logic will be here not in the HTML code.

const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "", // internally stored name
      confirmedName: "", // will execute when user press Enter key
    };
  },
  methods: {
    confirmedInput() {
      this.confirmedName = this.name; // execute only when user press Enter key on name input so display what's in the input field when user press Enter key.
    },
    submitForm() {
      // event.preventDefault(); // form should not be submitted, we don't want the browser default.
      alert("Submitted");
    },
    setName(event, lastName) {
      // Listen to the event (user input in the HTML code), execute this code. Then detects the name changed and updates it -> interpolation in the HTML code.
      this.name = event.target.value + " " + lastName; // value property - we use to read what the user enter in the input field.
    },
    add(num) {
      // this.counter++;
      this.counter = this.counter + num;
    },
    reduce(num) {
      // this.counter--;
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
