/*
L27 Data Binding + Event Binding = Two-Way Binding:

Going back to previous counter app. Now we need a Reset button next to the existing input field. This button needs to reset the user's input or to clear the user's input.
So first we need a new custom method 'resetInput()' and inside we need to clear this input. Don't use the vanilla JS way to do this as its very hacky/explicit 
JS instructions but use Vue's way. So we use the 'name' data property which is the value we are updating on every key-stroke and output it here in input by setting value
by setting a value attribute to equal to the name property with help of v-bind:
When user press the Reset Input button the paragraph 'Your Name:' also reset as the method 'resetInput' uses the name property as well as in the return Object.
This is a patter we may need in some occasions, we may have inputs where you don't just want to get the value the user entered, but also want to set the value of the input
so we can reset it with a button. So we can achieve this by listening to the input (v-on:input), also by sending the stored value back into the input by binding the 
value property (v-bind:value="name"). This is a common pattern that I will need. Its so common that Vue has a shortcut for this, a special built-in directive which simplifies this.
If we bind the value and lisen to the input changes on input, we remove all of that code (value binding and the input event listening) and replace with a new directive the 'v-model'
directive which wants the data property which is the 'name' property which is now manged by Vue so its updated on the input event and the name properties value is then sent back
into the input element. So v-model is a shortcut for 'v-bind' value, and 'v-on' input. 
Before:
       v-bind:value="name"
        v-on:input="setName($event, 'Schwarzmüller')"
After:
  v-model="name"        

Test in UI and will get same behaviour as before but with less code. This is the concept of two-way-binding as we are communicating in both directions. We are listening to an event coming out
of the input element and at sametime we are writing the value back to the input element through its value attribute or through its value property. This makes getting user input and updating it
much easier as need to write less code by using the v-model="" directive.

L28 Methods used for Data Binding: How It Works:
Now learn Advanced Reactivity:



*/

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    outputFullname() {
      // Instead of Two-way binding we can do this to set our lastName and impliment a full name. However, when user uses the counter btn all methods on the page will get executed - not good for performance.
      console.log("Running again...");
      if (this.name === "") {
        // lastName will only be output when user inputs something like their first name.
        return ""; // return different values based on different values and name.
      }
      return this.name + " " + "Tsang"; // We want to output our full name using this new method.
    },
    setName(event, lastName) {
      this.name = event.target.value; // whatever the user enters with every keystroke in 'name'
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    // document.querySelector('input').value = '';
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
