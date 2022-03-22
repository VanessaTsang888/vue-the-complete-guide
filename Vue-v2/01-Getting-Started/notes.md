Vue.js version 2 - trainning:

Getting Started 01 - Intro:

Vue.js is used to develop from widgets to drop-in an existing app, to medium apps where we control the whole page, re-render various parts making it very reactive, to big enterpise level apps -> Single Page Apps (SPA Apps) -> on the FE looks like multi-page app but its actual one page app -> parts of the app will render in the browser so no need to reach out to the server making the app reactive - better user experience.

Why not Angular or React.js?
Small and fast framework with many features. Feature-Rich: with Computed Properties, Events, Watchers, Directives, Reactivity, Outputting Data, Forms, Dynamic Styles, Defeloper Tools etc
Even with Router extension (fits nicely in this framework), Vue still stays very lean and small (providing fast loading time), its a very focused and to-the-point framework, fast at runtime hence the very reactive user experience.

Getting Started 02 - First app:
Its simple to create my first app.
-> Take a look at the official docs: https://vuejs.org/guide/introduction.html
-> vuejs.org/v2/guide/installation.html
-> https://vuejs.org/guide/quick-start.html
CDN: https://vuejs.org/guide/best-practices/production-deployment.html#without-build-tools
https//unpkg.com/vue/dist/vue.js

-> jsfiddle.net
Use to write simple js code.
Import vue.js to use all its features:

html file:

<script src="https//unpkg.com/vue/dist/vue.js"></script>

Javascript file:
// import the vue Object - a new vue instance - control code and render to screen:
// The argument is an JS object.
// The element property that Vue reconise is: el and this takes a String as a value to state which part of HTML code should be undercontrol of this Vue instance so that we can change it through this Vue instance.

new Vue ({
el: ''
})

continue from 3:00
