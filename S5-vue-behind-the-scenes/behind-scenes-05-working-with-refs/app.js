/*
L64 Working with Refs:
A different way of getting a value out of an input element.
Sometimes we need to validate user input with every keystroke, but sometimes this is overkill: @input="saveInput"
Vue has a feature that allows us to retrieve values from DOM elements when we need them instaed of all the time. This features is called refs attribute. This is how we add it:
<input type="text" ref="userText">
Its a non-default HTML attribute. For the value we use any String identifer we whish, i.e. userText
ref's can be added to any HTML elements.
In the app or JS code, we use: this.$refs -> this is a built-in property. The keys are the id's we set up in our Templates i.e. userText
-> this.$refs.userText
Now Vue isn't logging the input with every keystroke but only extract it when we need it.

*/

const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    //  $ref is built-in property - isn't logging the input with every keystroke but only extract it when we need it
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
  // add like a method. In reality I will only need some of these hooks.
  beforeCreate() {
    console.log("beforeCreate()"); // check this in browser dev tools
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log(beforeUnmount());
  },
  unmounted() {
    console.log(unmounted());
  },
});

app.mount("#app");

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

// ....

const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, handler);

proxy.message = "Hello!!!!";

console.log(proxy.longMessage);
