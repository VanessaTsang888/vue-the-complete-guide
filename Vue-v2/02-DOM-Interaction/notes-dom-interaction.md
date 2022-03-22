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
