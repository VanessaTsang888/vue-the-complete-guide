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

L29 Introducing Computed Properties:
This is the third big configuration option similar to methods but difference is we treat the methods inside the computed property as a property (a variable) as we did in data() method.
Computed properties only get executed when any of its dependencies changes i.e. the 'name' property. Therefore, if user press one of the counter btn's then the 'fullname' property within
the computed Object don't get executed or re-calculated and re-valuated meaning better performance. We can test this in the developer tools in the UI.
So we only want to recalcuate a value when a dependancie has changed and that is when we use Computed Properties. Only use methods when we have events and want to trigger certain methods
when an event occurs, we still bind events to methods. We don't bind events to computered properties which we only use for outputting something i.e. full name.



*/

const app = Vue.createApp({
  data() {
    return {
      counter: 0, // data property with value of number 0
      name: "",
      lastName: "",
      fullname: "",
    };
  },
  // latest value of the watch property is passed-in auto by Vue. Can accept two arguments, new value and old value.
  // name watcher
  // connect this name data property method to one within the data() method above. Not going to return anything as not going to use this watcher anywhere in HTML to use a return value. Instead we run logic when the name changes.
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000); // after 2 seconds reset the counter
        this.counter = 0;
      }
    },
    // name(value) {
    //   // ensure fullname is empty if value is empty
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName; // update fullname
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // 2) Watch for changes in "result" and reset the value to 0 after 5 seconds

    // },
  },
  computed: {
    fullname() {
      console.log("Running again...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName; // can reference two dependencies - pointing at name and lastName -> less code compared to watcher config.
    },
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
