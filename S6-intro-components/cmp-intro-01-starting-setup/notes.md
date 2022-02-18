SECTION 6 INTRO COMPONENTS:

L69 Module Intro:
Explore Vue Components - a example app to show why we need to use components on some apps.
Components are super concept in Vue.

In this module:

1. What and Why?
2. Working with Componeents.

The Friend List App:
Example app to explore the concept of components.

1. HTML code -> there is 2 friends list items so a <li> per friend.
2. JS code/app.js file.
3. We want to move the data from HTML code to the Vue code/JS code.
4. We don't want to hard code the <li> into the HTML code but we want to render them dynamically with Vue.js
5. Now impliment this using the knowledge we have so far.

JS code:
Write a friends Array with 2 Objects one for each friend in the data() config Object.

Only show the details when the button user click on it:

1. HTML code: delete one of the <li>
2. Write a v-for on the <li> to go through all the friend in the friends data property.
3. in the HTML code use the 'key' attribute and the click listener attribute and interpolation to output friend data from the friends Array.
4. Now we have less code in the HTML Template.
5. Tested and the app works as expected but the SHow Details button is not working and this is where we need to use the Components concept to develop this to the best practice.
6. If we don't use Components then we would need a method for each button and this is repeating code (not best practive) as in future we'll be adding more friends to this app.
7. Or we could pass-in parameters into the method toggleDetails() but this is not good either as then we'll need more and more data properties and we should keep our code DRY.

L71 Intro Components:
A Vue Component is just an App that belongs to another app. Components are reusable pieces of HTML with connected data and logic.
Components are great when you have blocks of code which you reuse in different parts of your page. For our example app we need to create multiple <li> so this is a good case for using Components.
How to create a new component:

1. We call a component on a main Vue app. Components are like mini apps. So they can have data, methods etc.
   app.component();
2. This component method needs two things - a identifier: my own html tag i.e. friend-contact ->
   app.component('friend-contact'); -> html element name/id
3. second parameter is a config object
   Since a Component is a mini app we need a Template. Add this template config option at the top of the global Vue app.
4. For the value write a multi line String - use back ticks.
5. In HTML can now use our custom <friend-contact> HTML element inside of the <ul> element.
6. Now we can simply repeat our custom element very time we need to add a new frined to our app and each button works stand alone. Just add the data of a new friend in the data config option, then duplicate the custom element in the HTML code.
7. This shows us how easily replicate and encapsulated piece of HTML code with attached data and logic (method).
8. Components are reusable pieces of HTML with connected data and logic.
9. Components helps us encapsulated content and logic into small reusable pieces of HTML.
10. In the HTML we can add as many components as we want just by duplicating our custom element <friend-contact></friend-contact>

L72 The Why: Binding Complex User Interfaces with Components:
Example app: Remember Me.
The entire UI is developed by combining components which makes it easier to structure the code base of complex apps and keep it manageable. By slitting our code, our logic, and our all of our templates and what's on the screen into smaller reusable pieces.

L73 Multiple Vue Apps vs Multiple Components:
You might recall lecture 3 ("Different Ways of Using Vue"): You can use Vue.js to control parts of (possibly multiple HTML) pages OR you use it to build so-called "Single Page Applications" (SPAs).

If you control multiple, independent parts of HTML pages, you will often work with multiple Vue apps (i.e. you create multiple apps by calling createApp() more than once).

On the other hand, if you're building a SPA, you typically work with just one "root app" (i.e. createApp() is only used once in your entire codebase) and you instead build up a user interface with multiple components.

You absolutely are allowed to also use components in cases where you have multiple Vue apps but you typically won't use multiple Vue apps if you build one big connected user interface.

Why?

Because Vue apps are independent from each other - they can't really communicate with each other. You might find "hacks" to make it work but there's no great "official" way of sharing data between apps, updating something in app A in case something happens in app B etc.

Components on the other hand - as you will learn soon - DO offer certain communication mechanisms that allow you to exchange data between them. Hence you can build one connected UI if you work with one root app that holds multiple components.

You'll see that in the lectures and throughout the entire course, especially in the course projects of course!
