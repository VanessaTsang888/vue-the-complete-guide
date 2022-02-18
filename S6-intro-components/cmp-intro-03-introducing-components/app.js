/*
L71 Intro Components:
A Vue Component is just an App that belongs to another app. Components are reusable pieces of HTML with connected data and logic.
Components are great when you have blocks of code which you reuse in different parts of your page. For our example app we need to create multiple <li> so this is a good case for using Components.
How to create a new component:

1. We call a component on a main Vue app. Components are like mini apps. So they can have data, methods etc.
   app.component();
2. This component method needs two things - a identifier: my own html tag i.e. friend-contact ->
   app.component('friend-contact'); -> html element name/id
3. second parameter is a config object
   Since a Component is a mini app we need a Template. Add this template config option at the top of the global Vue app.
4. For the value write a multi line String - use back ticks.
5. In HTML can now use our custom <friend-contact> HTML element inside of the <ul> element.
6. Now we can simply repeat our custom element very time we need to add a new frined to our app and each button works stand alone. Just add the data of a new friend in the data config option, then duplicate the custom element in the HTML code.
7. This shows us how easily replicate and encapsulated piece of HTML code with attached data and logic (method).
8. Components are reusable pieces of HTML with connected data and logic.

*/

const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
    };
  },
});
// Back-ticks -> for multiline Strings. A component needs a template as its a mini app.
app.component("friend-contact", {
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenzo",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
