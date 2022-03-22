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

dom interaction 03: template syntax and the vue instance:

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

dom interaction 04: vue instance proxies:
