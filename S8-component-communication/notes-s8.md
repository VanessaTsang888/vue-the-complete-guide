SECTION 8 COMPONENT COMMUNICATION;

L91 Module Intro:
Componeent communication & Re-Usable Components.
Gaining Flexibility.

Building UI with components.
How components communication works.
Different Kinds of componenet communication.

Developing components and communicating between them is important concept.

L92 Intro "Props" (Parent => Child Communication):
Custom HTML attributes are known as props. There are located inside of our custom html elements.
The point of props is that we just define once in JS code - the Component, then use it as often as we need to in HTML code - the App.vue file -> re-usable code.
Example App: Friend List:
We now need to make the buttons work so that user can Show/Hide Friend Contact Details. For this we need 'props' in our JS code - the Componeent. Then update the HTML code - the App.vue file. So its the App.vue that should pass the data/contact details into our component - the FriendContact.vue file.

Config same component with different data is core concept and we can impliment. So we use Props.
To use props inside of our component - html file we need to write some code inside of the JS code - FriendContact.vue -> Component.

JS code (FriendContact.vue -> Component):
Component file -> config object -> new key/property - the props property which takes an Array: props: [],
Specify all the propers/custom attributes we want to accept on this component i.e. name, phone, email address. Define as props like data property naming notation (lower camelcase) so we could refer to it using the 'this' keyword if we need to. This is how props in components should be defined - camel case. Only attributes in html we can use kababe case.
Don't use the same name for props as data properties or computed properties.

HTML code (App.vue)
We can output props as we output data properties via interpolation.

Now each component has its own contact details using its own button
App.vue -> friend-contact component -> data/content is here -> kababe case.

L93 Prop Behavior & Changing Props:
Info communicate from parent to child or from App.vue to <friend-contact></friend-contact> custom html element which is the friend-contact component.
So the FriendContact.vue is the child of the App.vue as this file uses the <friend-contact> Component.
We use props to communicate (pass data) from the parent to the child/from App to friend-contact.
Example: is-favorite="0"
I've updated the <h2> in the Component file with this but the Favourite text is not display on screen.

We should NOT mutate props. If we do take a prop as an initial value then change component exclusive property in stead. We not allow to change the props that's in App in the FriendConact.vue Component file. To get around this we take the received data as the initial data inside of friend contact. To do this we add new data property in our Component.
If I need to change the original data I got from the App.vue file, so where just using it as initial data and then changeing it internally is not enough. So if need to mutate then take a prop as initail value, then change the Component exclusive property instead: friendIsFavorite

L94 Validating Props:
More detailed Property definitions will make sure our props get used correctly, i.e. validator: function(value) {
return value === '1' value === '0';
}
If not used correctly, we'll get a console warning. Just defining the value type is fine for smaller apps.

L95 Supported Prop Types:
n general, you can learn all about prop validation in the official docs: https://v3.vuejs.org/guide/component-props.html

Specifically, the following value types (type property) are supported:

String

Number

Boolean

Array

Object

Date

Function

Symbol

But type can also be any constructor function (built-in ones like Date or custom ones).

L96 Working with Dynamic props:
When using v-for attributes on Components in App.vue (v-bind:v-for="friend in frineds"), we MUST use the 'key' attribute with it and bind it dynamically with a colon and pass-in value, i.e. :key="frined.id"
The other Props/attributes can be binded dynamically as well, or bind props to dynamic values, making it more reusable component.

L97 Emitting Custom Event (child => parent communication):
Communication from Component to App the parent, i.e. toggleFavourit. At the moment it's set to 'true' value.
For Component to tell App that a btn has been clicked on, we can emmit our own customer events inside of our Compnent, i.e. when toggleFavourit is triggered -> a Vue built-in method which we can call from inside of Component to emit our own custom event to listen from inside child component:
->

toggleFavorite() {
this.$emit(toggle-favorite);
},

For events always use kabab case notation/convention. Now our component is emitting our custom event - toggleFavorite
Now we can listen to it like we can listen to clicks on btn's. Now in App we can listen to it with v-on and bind this to toggleFavoritStatus() method in App:
@toggleFavorite="toggleFavoriteStatus"

Using uni-directional data flow in both directions. We using it to pass props data from App into our Component, also using it the other way rond to emit a customer event inside of our own Component with the dollar sign emit method and listen to custom event in App.vue -> @toggle-favorit="toggleFavoriteStatus" -> to then make changes to the data in App. So we can emit our own events and set our own data which is similar to working with default html elements but we control the code behind the html element. So custom events is important for Component communication.

L98 Defining and Validating Custom Events:
Let Vue know about the events our Components will emit. For props this is required. For events its recommended.

In our Component, add new property config, the emit property. Define which custom event our Component will eventually at some point emit.

-> emits()

export default {
emits: ['toggle-favorite'],
},

A feature for when working in a team to let others know about the emit fn.
