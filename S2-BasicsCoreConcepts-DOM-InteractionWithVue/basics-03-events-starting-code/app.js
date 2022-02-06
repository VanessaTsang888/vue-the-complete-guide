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



*/

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
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
