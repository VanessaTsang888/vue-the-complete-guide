/*

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

*/
