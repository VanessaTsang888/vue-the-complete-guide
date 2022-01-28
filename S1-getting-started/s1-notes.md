SECTION 01: Getting Started:

1. Welcome:
   I didn't take any notes for this video as no need.

2. What is Vue:
   A JS Framework that allows us to provide rich user experiences (UX).

Framework: third party library (code) that exposes certain utility functionalities, methods, tools and a set of rules. So it's the utility functions plus the rules

JS | Framework | Reactive | Web frontends.
A JS driven UI running in the browser for our app talking to a server but its all about the browser side code.
We use Vue to build interactive and reactive web frontends so our app is very responsive to what the user does, i.e. to show validation errors below a input field, show overlays with warning messages, give users a very modern look and feel in our web app.
Vue makes it easy for us to create great UX.
Its not a server-side framework.
It feel all one unit. The only thing that is loading behind the scenes is data.

3. Different Ways of Utilising Vue:
   Use it in 2 main ways. There is no best approach as it is project dependant.
   -> To control parts of a HTML page and make that more reactive, i.e. sidebar to load elements there dynamically, or a chat overlay that user can open up which is controlled by Vue -> widgets.
   -> The other way is use Vue to control the entire frontend of a web app -> SPA apps.

4. Exploring Vue Alternatives:
   Angular, React.js or Vue.js - Similar concepts so switching is not too difficult.
   Angular:
   Complete component-based UI framework, packed with features. Uses TypeScript. Can be overkill for smaller projects.
   React:
   Lean, component-based UI library. Certain features (e.g. routing - not included out of the box) are added via community packages.
   Vue:
   Complete component-based UI framework, includes most core features. A little less popular than React & Angular.

5. Building A First App With Just with JS:
   Add Goal App without Vue so I can see why using Vue is a good idea.
   Aim:
   When click Add Goal, that goal will appear in the list below.

   6. I have joined the Academind Community and sent a message to say hello to everyone.

   7. Re-building the App with Vue:
      Add Goals app - part 2:
      Same as lecture 5 but instead of vanilla Javascript use Vue and understand the benefits.

To use vue.js for small project -> past the CDN link from the Vue website: https://v3.vuejs.org/guide/installation.html#cdn
in to my html file, just above the existing script tag/element.
Use Vue means, we can solve the same problem in a totally different way. In JS we use an imperative approach meaning we define every single step, step-by-step which is
exectuted by the browser: get access to the button, get access to the input element, get access to the list element, create a fn, add an click event handler to the button
and execute the fn when a click occurs. With Vue we define the desire end result not how we get there.

1. Create a Vue app, which takes control over our HTML code, by calling: Vue.createApp();
2. So on this global Vue Object we can call: createApp which takes a JS Object where we configure this Vue app/ setting up the kind of data we'll use in our Vue app, i.e. our
   list of goals: <ul></ul> and the data user enters and we define that data by adding a data property to this Object we pass to createApp, this has to be called: data, and holds
   a fn as a value, so its a property data that holds a fn as a value.
   In this fn we defind the data our Vue app should be aware of - here we need to return an Object and add the data we want to manage in this app, i.e. a goals Array which is
   initially empty as a key value pair, and the entered value which is initially an empty String. Now these 2 pieces of data Vue is aware of.
   Now we can connect this entered value with the special input within the HTML file, by adding a special directive on the input/ a special HTML attribute, the v-model attribute,
   this will only be understoold by Vue. By pasting the data property inside of this attribute, Vue will manage the input element for us, it will auto listen to what the user enters, and update this input element when the enteredValue data property
   gets changed.
3. For the button, we get what's stored in the enteredValue data property and add that to goals Array. So we add another key-value-pair to this Object we're passing to createApp,
   and that's the: methods key which holds an Object. Here we can define methods, fn's, that's callable from inside the HTML code, i.e. we can add the addGoal() method, reach out to goals,
   and add the current entered value. Add another special attribute to the button element in HTML file, the v-on attribute and add the event we
   want to listen for - the click event, then as the value we specify the name of the method that should be triggered/button is clicked, which is the addGoal() method. Now Vue will make sure that addGoal() will get executed when the Add Goal button is clicked. Will auto give us the currently entered value and add it as a new value to the goals Array.
4. Output our Goals in the unordered list <ul></ul> by create list items <li></li> and one for every Goal. To replicate this list item multiple times we use the
   v-for attribut in the <li> element and for the value we write: "goals in goals" to loop through all our goals in the goals Array and create one list item per goal using Vue special syntax the double braces and write the variable goal inside. Output one goal per goal entry we have in the goals Array. 5. Tell Vue where on the page this code should apply: on this created App, after the closing parentheses, we call mount() and let Vue know which part of the page should be controlled by that Vue app.
   The div with the id of app contains all the mark-p that uses the Vue features, we used the special attributes, so the div with the id app contains all this code. So its this div the Vue app will
   control this app. This is why we use the id selector the hash symbol # inside of the mount().

2:42
