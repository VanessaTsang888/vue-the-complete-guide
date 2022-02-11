const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    counter(value) {
      if (value !== 0) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
        this.counter = 0;
      }
    },
  },
  methods: {
    output37() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter > 37) {
        return "Too much!";
      } else {
        return this.counter;
      }
    },
    addBtn1(num) {
      this.counter = this.counter + num;
    },
    addBtn2(num) {
      this.counter = this.counter + num;
    },
  },
});

app.mount("#assignment");
