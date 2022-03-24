02 DOM Interaction:

Tools:
https://jsfiddle.net
https://jsfiddle.net/smax/q2s3fpku/

dom interaction 02 - basics:

Vue.js creates a template based on our html code, stores that interally, then uses this template to create the real html code which then is rendered as the dom. This allows us to use templates like this:

<div id="app">
  <p>{{ title }}</p>
</div>

There is a layer in the middle and this layer is the Vue instance which takes our html code, creates a template, renders this template (i.e entering the title above) then outputs the final html code which gets rendered on to the screen.

DOM Interaction 03: template syntax and the vue instance:

We learnt how to output a single data field of our Vue instance. Data stored in the data property can be output using interpolation (two sets of braces between a set of html tag) as we have to access all properties in the data Object like this:

new Vue({
el: "#app",
data: {
title: 'Hello World!'
}
})

We can use the methods key, to store some methods of this Vue instance. In the body We can write a method called sayHello which is a function that returns a String value of Hello!

new Vue({
el: "#app",
data: {
title: 'Hello World!'
},
methods: {
sayHello: function() {
return 'Hello!'
}
}
})

DOM Interaction 04: vue instance proxies:

Vue proxies the properies, i.e. title
and so that by calling 'this' keyword anywhere within Vue instance will give us access to the proxied properies. So we can call the title property from inside of the sayHello() to access the title in the data Object as behind the scense Vue creates an easy access for us to access these properties. So we call a function to access our title property:

new Vue({
el: "#app",
data: {
title: 'Hello World!'
},
methods: {
sayHello: function() {
return this.title;
}
}
})

DOM Interaction 05: attribute binding:

Output the link property in the html code:
We can't use interpolation (braces) in any html element attribute. Can only use interpolation in place where we normally use text (between a pair of html element).
Can still bind a link dynamically by using the v-bind directive -> bind the href attribute, we pass an argument to this diretive by adding a colon, then the argument we do pass is the name of the attribute. Then insie the quote marks we pass-in the value of the link property and without the interpolation as we are already in Vue template language. Now it binds the link to Google dynamically due to the v-bind directive.

<div id="app">
  <p>{{ sayHello }} - <a v-bind:href="link">Google</a></p>
</div>

new Vue({
el: "#app",
data: {
title: 'Hello World!',
link: 'http://google.com'
},
methods: {
sayHello: function() {
return this.title;
}
}
})

DOM Interaction 06: understanding directives:

An instruction we place in our code. There are not many built-in directives. We can write our own directives or custom directives.
v-bind tell Vue -> bind something to my data which is stored in the Vue instance. To pass an argument to directive by using a colon then the argument we want to pass, and the argument it do expects is the attribute you want to bind, .i.e href of the link. Then between the quotes the property, or function or what ever we want, the link property from the Vue instance in this case. This allows us to pass dynamic data to html attributes.

DOM Interaction 07: only rendering once with v-once:

v-once directive adding on an html element keeps the initial value (i.e. the value in the title property) and will not be updated if it changes later on.
Example, if later in a method we change the title property from Hello World! to Hello, then this will NOT work as this directive keeps the initial value and not adjust once over-written. In our future app, we may need this behaviour and v-once makes it easy to stick to the initial value and not use any other value this property may take in a later point of time. See my 01 Starting Code files for my example of only rendering once with v-once directive.

DOM Interaction 08 output raw html:

Output a full link as HTML -> as text form.
this default behaviour is great to prevent any Cross-side scripting attacks.
By default Vue dont render html elements, it only renders text, most of the time that is what we want. So if you got some html content and you know the source where its coming from is safe or you did sanitise it before outputing it, then we may want to output the html code and not just a text. think of a blog post that has some editing inside of it, for this case we can loose the interpolation and use another directive which would be place on an element where is want to the html code. This direct is: v-html -> <p v-html></p>
This allows us to pass the name of the property here which hold the html code or the value. Now we see the link. This directive tell Vue to actualy render the html code and not escape it but use this carefully as it do expose us to Cross-side attacks as if they is some content that you can't control what's placed inside of it. This is how to output html code through Vue.

DOM Interaction 09: Event Directive:
v-bind allows us to bind somthing in our Template to pass data to it, then
v-on directive we listen to something to receive something to our Template, and we want to receive an Event. v-on take an argument and the name of the argument is the name of the Event we want to listen to, i.e. click.
but can use any DOM Event for a button i.e. mouse-enter, mouse-leave, whatever DOM Events are on a button. Then pass an value the code we want to execute when button is clicked, i.e. a function -> increase.
Now, when we click the button on the screen the counter will increase by each click.

DOM interaction: 10 Using The Event Object:
We can listen to the default events object created by JS DOM which holds info, i.e. for click event it holds info of where the click happend. We want to access this info as we need to output the data. When user hover over the coordinates on the screen they update.

HTML code:

<p v-on:mouseove="updateCoordinates">Coordinates: {{ x }} / {{ y }}</p>

JS code:
data: {
x: 0,
y: 0
},
medthods: {
updateCoordinates: function(event) {
this.x = event.clientX;
this.y = event.clientY;
}
}
