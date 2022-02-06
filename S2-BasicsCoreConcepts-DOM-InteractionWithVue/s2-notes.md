Section 2: Basics & Core Concepts - DOM Interaction with Vue:

L13: Module Intro:
Explore Vue's core concepts, the essentials to work with Vue:

1. Vue + HTML = Templates: how Vue interacts with HTML and how a concept called Templates is related to that.
2. Outputting Dynamic Content: explore more options and alternatives there.
3. React to user input: done this but will explore indepth.

L14: Creating and Connecting Vue App Instances:

We want to control a part of the HTML code with an Vue app:

We want to control the section element only using Vue so in our HTML file we use the id attribute on that element and give it the value of: user goal. Then in our JS file we use the Vue global object and call the createApp which creates a Vue app. Then we store this is a variable: const app -> default.
Tell Vue app that its the section element we want to control using Vue as it has the paragraphy element that we want to manipluate through Vue. Mount this Vue Object: .mount(); and this mount wants a Sting which for us will be a CSS Selector which unquely identies the DOM/HTML file code which we want to control: #user-goal -> id's are great unique selectors. This will tell Vue that we want to connect our app to that section element in HTML code. Now we can use the Vue features to interact with this controlled section by passing an Object to createApp().
Now, set the data configuration as key-pair-value -> the data key wants fn as the value -> use the method short hand -> it means: the value stored in the data property is a fn. This fn dose one important thing - it returns an Object and always an Object: return{};
Inside of the return, I can set up any key-pair-value / any property name of my choice. The value can be anything (String, Boolean, Number, Array or an Object) like a String, I will store a String value inside the courseGoal key.
We've just configures data property in our Vue app.

L15: Interpolation and Data Binding:
How to output data with Interpolation:
The data and the interpolation are the 2 core features.

In my Vue controlled HTML part, there is a special syntax which is only available in HTML parts that are controlled by Vue -> double braces opening and closing -> here I reference my returned data Object properties, like: courseGoals. This special syntax is called interpolation which mean the value of that property will get output to the UI. Vue will auto detect this syntx and output the value for me?
This interpolation syntax is one of the key features of Vue. So thats interpolation in the data property in the Object we use for configuring our Vue app.

L16: Binding Attributes with the "v-bind" Directive:
Directive is an instruction we give to Vue to do something.
v-bind: a key feature of Vue.

Example: vueLink: 'https://vue.js.org/'
How do we output this dynamically?

If we want to pass-in a dynamic value to an attribute - where I want to set the value of the ref attribut, we use Vue Directive -> the Vue binding syntax.
We can use Vue directive on the anchor element to output a hyperlink.
The v-bind is a reserved name detected and understoold by Vue. All built-in directives start with v-
v-bind tells Vue to bind or set the value of something - of an attribut on an HTML element:

<p>Learn more <a v-bind:href="vueLink">about Vue</a></p>

L17: Understand "methods" In Vue Apps:

We've learned about 2 key features for outputing and for using Vue-managed data in the HTML code. Now make our app more dynamic.
The methods opions allows use to define fn's which should execute when something happens, i.e. when a button click occurs.
A method takes an JS Objects (not data) full of methods - but these fn's I can name them how I want, i.e. outputGoal. Where as: methods is a reserved name. We don't always want to use interpolation to outpt data, i.e.

// A method using the methods Object and the value is a fn. Inside we are using the method shorthand, just as we did with data()
// in outputGoal() method we output a randomNumber with math random(), a built-in JS fn.
// A method is a fn that is defined inside of an Object and the methods is an Object.
// Can execute or call a fn that is defined in an Object: <p>{{ outputGoal() }}</p>
// Inside the double braces, we can't use complex code i.e. if-statements but can use ternary expressions. Can write any basic JS expression and can use v-bind. So here we can execute JS
// expressions.

methods: {
outputGoal() {
const randomNumber = Math.random();
}
}

L18: Working with Data inside of a Vue App:

SUMMARY:
We have output content and bind attributes.
We can either set-up some data in data() and refe to that in our HTML code, or
we can also define methods that are called, it depends what I'm building/what my app goal is?
Now, how to use data in Vue | Vuw and how to work with its data:
The data property is the key from the key-word-value: courseGoalA: 'Finish the course and learn Vue!',
So courseGoalA is the property of the return Object.

1. Using the: 'this' keyword inside of method i.e. the outputGoal method (that is inside of the methods Object) which is possible as its inside of the Vue.createApp() global Object -> in vanilla JS this would work but in Vue we can take an advantage of this:

return this.courseGoalA;
} else {
return this.courseGoalB;
}

L18 Working with Data inside of a Vue App:
I want to output either the value of courseGoalA property or the value of courseGoalB property. To do this we use a special syntax:
-> 'this' keyword: return this.courseGoalA
Vue takes the returned data properties and merges it to the global Object the Vue app Object since they are available. Now when I reload it still works with the help of the outputGoals() method.

L19 Outputting Raw HTML Content with v-html:
We use the v-html directive to output HTML code rather than some text, i.e.
-> <p v-html="outputGoal()"></p>
I shouldn't need it too often but use it if I know what I'm doing as can introduce security issues.

So we either output data with data(); or with methods:

L20 A First Summary:
Brief sumary of what I've learnt.
All the features I've learnt is data binding: interpolation, directives syntax using v-bind and v-html.
We pass an Object to our Vue app, which we create with createApp()
and the Object data() configures the Vue app
we can set various options i.e. the data() option or the methods option.
The data() option take a fn which should return an Object full of data, which will then be available in our Vue controlled HTML code, i.e. the: vueLink value
and can also be acessed inside of methods using the 'this' keyword. They are fn's that can be called from vue controlled HTML i.e. outputGoal()

Vue uses a Declarative approach - the developer define the goal, we define a template, of the content we want to have. We markup parts which are dynamic: ie. the <section> tag, <p></p> tag etc
and it outputs values and it updates the real DOM which renders to the screen. So developers just define the final picture with the dynamic placeholders i.e. the directives and we don't define
all the steps of getting that picture onto the screen. That the Vue framework. Vue uses a Declarative approach as we just declare our goal as we don't care about the steps of getting there.

Assignment 01: Time to Practice: Data Binding:

Use the knowledge you gained in the last lectures to solve the tasks outlined in the video above. Compare your solution to mine (solution video + provided code) thereafter.

I have completed the assignment but the my image is not displaying in the UI properly as it is broken. I've treid other images from the internet still no luck.

L21 Understanding Event Binding:
Events in Vue:
We need to react to user inputs, events, make dynamic pages. Vue makes developing highly reactive and dynamic, web apps easier.
How we can listen to user events in Vue:

A counter app with data(); method to return our data, which is a number starting at 0 that mounts to the events <section> in the HTML code/holds all the markup.

To make the Add button work: add an event listener -
-> to add a click listener we use the: v-on directive
-> as we want to react on a certain event.
-> v-on takes an argument of :click
-> others include: mouseenter, mouseleave etc
-> specify the code that should run when the code ocurrs, i.e. "counter++" or "counter = counter+"
-> That means we want to add one to the counter
-> So inside of the value of the directive we can write simple JS expressions -> our HTML code.
-> Now when user clicks the Add button the counter called Result will increase by one.

When the counter has changed it reaches out to the paragraph to change the value that's displays on the UI. This is what Vue do behind the scenes for us - core asset of frameworks like Vue.
We just declare where we want to have the EventListeners, and where we want to output the value (Result: ), and which value we should be aware of. Then Vue do the rest for us incl. adding
and managing those listeners, updating the counter behind the scense. Also, detecting when the counter changes, and updating the parts of the real rendered page, where updating is needed,
when the counter changes.
Not a lot of JS code as Vue is declarative approach so we declare our end result.

L22 Events & Methods:
We've learnt how to listen to events. But we don't want to update our counter in our HTML code as this is not best practice as don't want too much logic in our HTML code. We want to update our counter in our JS code instea.
We needa special fn called a method that will get called when user clicks the Add and/or the Reduce button.
Now using methods in our JS to put our logic - best practice. Then just output it in our HTML code or point to it from HTML. We don't have to call the add() fn in our HTML, we can just point to it like this:
-> <button v-on:click="add">Add</button>
-> Best practice to keep HTML code leaner and only for outputting logic.
-> add is the name of the method which is a type of fn.
-> Vue accepts both, calling the fn: add() and pointing at it: add
-> so both syntax is allowed.

We use methods to connect them to event listeners and let Vue call them for us a certain event occurs, i.e. when user click the Add button or the Reduce button.
Example, to increment our counter, we can write a method and call it anything we want i.e. add() or addCounter or increment()
Inside that method we can update the counter with: this.counter++
Then similar with writing a method to reduce the counter: this.counter--
so in our JS code we refer to our data properties with the 'this' keyword
So we use methods to connect our logic ( i.e. the add() method ) to events ( i.e. v-on:click="add()" ), then output in HTML using interpolation, i.e. {{ counter }} with combination with event listeners: v-on:click="Add"

L23 Working with Event Arguments:
What if we want to Add a specific number or reduce a specific number to our Result?
Passing arguments to methods is possible and its easy to do.
Sometimes our methods will need to get some parameters which me as a developer want to set. We set it in the JS, call it with a value in the HTML.
The method should be written in a very generic way as we want this to be dynamic.
