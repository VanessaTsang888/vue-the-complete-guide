const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      // friends Array with 2 Objects one for each friend. This friends data property holds an Array and we are looping through these 2 Array elements now which is inside of the v-for directive in HTML code/Template.
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
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
