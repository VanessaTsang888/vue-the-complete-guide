SECTION 5: VUE: HEHIND THE SCENES;

I am taking notes without coding due to time limited.

L59 Module Intro:
This moduel is optional.

How Vue Works:
dont skip: refs and x2 lectures about the Vue app lifecycle.
How do the virtual DOM works to update whe users see on the screen.

L60 An Intro to Vue's Reactivity:
The How Vue Works app:

1. data() property
2. methods Object
3. Event bindings in HTML that trigger the methods
4. interpolation to output the message data.

How do Vue to this behind the scense? The auto updating. The built-in Reactivity Vue has.
The data() we define is something Vue keeps track of. Vue will merge these data properties into a global managed Object, the same object where our methods gets merged into.
Vue turns our data() Object into an reactive data Object by wrapping our properties with a JS feature called Proxies.

L61 Vue Reactivity: A Deep Dive:
JS by default is not Reactive. Vue knows when the value of a variable has changed and updates for us as uses Proxies.

L62 One App vs Multiple Apps:
We can have multiple apps, jsut use a different unique identifier and a new <section> element with that new id -> app2. Then mount it to the new global Vue Object.
-> const app2 = Vue.createApp({{...}}); app2.mount('#app2');
Styling:
In the css file -> #app: here we can add a second id to use the same styling -> #app2
Same in all the #app id's
We can't do the same for data properties and the two app's or the two JS files are not connected. Each Vue app's are stand alone not connected. So in HTML -> section we can't use data from a different app.

L63 Understanding Templates:
We can control different parts of the HTML code but We should control same part with different apps - JS code. Can't use multiple one apps to control multiple HTML parts. It's one HTML part per app only.
HTML part is also know as controlled HTML is easy to understand but the official term is Template by mounting your app. So the Template is the HTML part of the app.

Can add a template option into Vue app and it wants a String value, use back-ticks so we can write multi-line code. Inside that we can add a paragraph element. We still need to mount that app so Vue knowns where on page to add the paragraph. We don't use this much.

L64 Working with Refs:
A different way of getting a value out of an input element.
Sometimes we need to validate user input with every keystroke, but sometimes this is overkill: @input="saveInput"
Vue has a feature that allows us to retrieve values from DOM elements when we need them instaed of all the time. This features is called refs attribute. This is how we add it:
<input type="text" ref="userText">
Its a non-default HTML attribute. For the value we use any String identifer we whish, i.e. userText
ref's can be added to any HTML elements.
In the app or JS code, we use: this.$refs -> this is a built-in property. The keys are the id's we set up in our Templates i.e. userText
-> this.$refs.userText
Now Vue isn't logging the input with every keystroke but only extract it when we need it.

L65 How Vue Updates The DOM:
How it actually updates what we see on the screen/UI.
Vue updates whatever it needs to update with the virtual DOM -> which has a copy of the real DOM.
JS-based DOM Which exists only in memory.
Updates are made to the virtual DOM first, only differences are then rendered to the real DOM.

1.  Vue Instance: the Vue app
2.  Browser DOM: the HTML content rendered by the browser - what the user is able to see on screen.

L66 Vue App Lifecycle - Theory:
Vue instance lifecycle - hooks:

1. createApp({...})
2. beforeCreate() -> this phase is before the app has been fully initialised
3. Created() -> Vue knows the general app config
4. Compile template
5. beforeMount() hook is reached: before Vue is actually going to bring something to the screen.
6. mounted() | Mounted Vue Instance -> the end: now we see something on the screen.
   When Data Changed this will trigger a new Lifecycle ->
7. beforeUpdate()
8. updated() -> the update is rendered on screen.

L67 Vue App Lifecycle - Practice:
My work is in the code files.
