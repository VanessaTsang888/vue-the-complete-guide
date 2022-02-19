<!-- 
Inside script tag write an config Object: export default {}
Inside that add a template key to define the html code of this component in a String.

Within the script tag/element, in the data() opetion write our data/content here.

-->

<template>
  <li>
    <!-- Checking isFavorite equal to 1. If so then output some text. Otherwise don't. -->
    <h2>{{ name }} {{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2>
    <!-- This interpolation will make the btn dynaic: if detailsAreVisible is true then hide it, otherwise show it. This is the toggle method -->
    <button @click="toggleFavorite">
      Toggle Favorite
      <!-- {{ detailsAreVisible ? "Hide" : "Show" }} -->
    </button>
    <button @click="toggleDetails">
      Show Details
      {{ detailsAreVisible ? "Hide" : "Show" }}
    </button>

    <!-- use v-if to check if detailsAreVisible is true and only show this if it is true. We define once here then can use as many times we need to in App.vue -> in the custom html element -> custom attributes are the props. -->
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
//  this component  have 3 props (the custom attributes) in which it wants to receive and can be set when used as an HTML element.
// Props: We define once here then can use as many times we need to in App.vue -> in the custom html element -> custom attributes are the props.
export default {
  props: ["name", "phoneNumber", "emailAddress", "isfavorite"],
  data() {
    return {
      detailsAreVisible: false, // make btn work and toggle the <li>
      // dummy friends property
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      friendIsFavorite: this.friendIsFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible; // set detailsAreVisible to what they currently not
    },
    toggleFavorite() {
      if (this.friendIsFavorite === "1") {
        this.friendIsFavorite = "0";
      } else {
        this.friendIsFavorite = "1";
      }
    },
  },
};
</script>
