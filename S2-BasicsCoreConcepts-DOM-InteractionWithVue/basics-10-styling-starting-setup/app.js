/*
L33 Dynamic Styling with Linline Styles:
Setup styles dynamically -> special style binding syntax:
1. changing data properties via clicks -> @click
2. Use Vue to highlight when a box is selected - change boarder-color when a box is selected, i.e. the first box - box A.
We can set styles either through CSS and CSSS classes, or inline styles using the style attribute which available on any HTML element but this always applies not just sometimes.
We just need to bind style to a dynamic value, we can do this with v-bind:style="border-color: red"
or just colon -> :style="..."
If we bind style dynamically we can use a special syntax supported by Vue for these specific attributes so for style and for class. Can feed an Object here:
-> :styel="{borderColor: boxASelected ? 'red' : '#ccc'}" @click="boxSelected('A')"
-> A ternary to check is boxASelected is true/is it selected, if so, then make it red.
-> so when user click on the first grey box, it will turn red.

*/

const app = Vue.createApp({
  data() {
    // our data property/config option
    return {
      // keep track of which demo div is selected. Could use boxASelected or
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  // For more complex check, i.e. if-statement where we want to return different Objects/dynamic classes, not just referring to a true or false Boolean.
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    boxSelected(box) {
      // parameter of box - an identifier for which box was selected as an input.
      if (box === "A") {
        this.boxASelected = !this.boxASelected; // To set box as inactive: if box A is true, its now NOT as its assigned to NOT true
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount("#styling");
