// Put this in the script section in JSFiddle
// In a local setup, you need to merge this and the index.html file into one file
/*
10. The deault event object:
The clientX and the clientY are default properties name of the event object.

11: event custom args:
step is our own event custom arguement
    increase: function (step, event) {
      this.counter += step;
    },


*/
new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: "http://google.com",
    x: 0,
    y: 0,
  },
  methods: {
    sayHello: function () {
      this.title = "Hello";
      return this.title;
    },
    increase: function (step, event) {
      this.counter += step;
    },
    updateCoordinates: function (event) {
      this.x = event.clientX; // clientX is the default properties name of the event object.
      this.y = event.clientY;
    },
    dummy: function (event) {
      event.stopPropagation();
    },
  },
});
