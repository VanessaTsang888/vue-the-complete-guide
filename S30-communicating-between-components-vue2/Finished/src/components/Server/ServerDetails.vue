<!-- 

This is the conent displayed on the right hand column - the id and the status of the selected server which will be displayed when user clicks on a server.
The button below will change the status of the current server from what it is to Normal.
Again, we import the serverBus Object to communicate with the other child - Server.vue 
When we display the Servers components, they are initially are set to null. Then when user click on the Change to Normal, the status will change to Normal.
Using the created() hook to the Event Bus to allow the two child components to communicate or pass data to each other - listening for the click event of 
serverSelected by pointing to that method. For the second arguement we are passing in a Callback fn and using the sever that we initially set to null to set
that to server.


-->

<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a Server</p>
    <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
    <hr />
    <button @click="resetStatus">Change to Normal</button>
  </div>
</template>

<script>
import { serverBus } from "../../main";

export default {
  data: function () {
    return {
      server: null,
    };
  },
  methods: {
    resetStatus() {
      this.server.status = "Normal";
    },
  },
  // This hook is needed to use Event Bus which allows the two child components to communicate with each other, via the parent component. We need the Callback fn as the second argument
  // in the body of that fn we point to the server that we return from the data Object, and set it to server.
  created() {
    serverBus.appServer("serverSelected", (server) => {
      this.server = server;
    });
  },
};
</script>

<style></style>
