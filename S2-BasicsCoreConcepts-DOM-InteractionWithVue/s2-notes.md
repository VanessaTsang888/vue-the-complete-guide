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
