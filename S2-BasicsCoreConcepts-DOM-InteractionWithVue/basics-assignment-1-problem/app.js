const app = Vue.createApp({
  data() {
    return {
      name: "Vanessa",
      age: 43,
      image: "https://flic.kr/p/2mU7d49",
    };
  },
  // my age in 5 years time, has access to merged properties like age due to the global Object Vue
  // Output my favourit number using a method using the fn in HTML code
  methods: {
    calcAge() {
      return this.age + 5;
    },
    favNum() {
      return Math.random();
    },
  },
});

app.mount("#assignment"); // Connect our data to HTML code using the mount method. CSS id selector must be unique per page
