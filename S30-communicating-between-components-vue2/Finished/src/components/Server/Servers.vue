<!-- 

This is the parent component.
In the template tag/element we use the Server component and loop through each Server child component in the Servers parent component. We are making the server dynamic by using
the v-bind or the colon. 



-->

<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-for="server in servers" :server="server"></app-server>
    </ul>
  </div>
</template>

<script>
//  This is one of the child component that this parent component communicates with or passes data to.
import Server from "./Server.vue";
//  The data that we are going to display will get returned from the data() Object
export default {
  data: function () {
    return {
      servers: [
        { id: 1, status: "Normal" },
        { id: 2, status: "Critical" },
        { id: 3, status: "Unknown" },
        { id: 4, status: "Normal" },
      ],
    };
  },
  components: {
    appServer: Server,
  },
};
</script>

<style></style>
