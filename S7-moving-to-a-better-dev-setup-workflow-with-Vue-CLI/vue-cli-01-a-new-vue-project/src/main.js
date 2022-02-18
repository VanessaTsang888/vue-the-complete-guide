/*
I can now view my app using this address: http://localhost:8080/
keep this web server process up and running as long as I'm working on the project. Thereafter, quit with CTRL + c
To create a production build, run npm run build.

Different way of calling createApp by using this import syntax below.
xx
*/

import { createApp } from "vue"; // importing the creatApp fn from the Vue framework so we can import things like the createApp() method

import App from "./App.vue"; // create an app with a config from App.vue file. import the data property in here
import FriendContact from "./components/FriendContact.vue"; // pointing to the JS Object we export in FriendContact component file.
const app = createApp(App);

app.component("friend-contact", FriendContact);

app.mount("#app"); // Mount it to an element with an id of app -> <div> with id of app in HTML code/template.
