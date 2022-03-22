<!-- This is child Component. -->
<!-- Each server has  an id -->
<!-- This child has a prop so the parent Servers.vue can communicate and pass data to it. -->
<!-- This child has a serverSelected() method as we need to listen for a click event pointing to this method. -->
<!-- In the serverBus, We are the event serverSelected and we are passing-in the current server from the Array. -->
<!-- This <li> will display the id. -->
<!-- We import the serverBus from the main.js file so the two child can communicate with each other/passing data to each other. -->

<template>
  <li class="list-group-item" style="cursor: pointer" @click="serverSelected">
    Server #{{ server.id }}
  </li>
</template>

<script>
import { serverBus } from "../../main";

export default {
  props: ["server"],
  methods: {
    serverSelected() {
      serverBus.$emit("serverSelected", this.server);
    },
  },
};
</script>

<style></style>
