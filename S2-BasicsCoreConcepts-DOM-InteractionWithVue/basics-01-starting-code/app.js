/*

L14 Creating and Connecting Vue App Instances:

My Vue code here - data.

1. I want to use Vue features/connect Vue to my HTML code/let Vue know which part of HTML code should be controlled by Vue, i.e. everything inside of the <section> element.
I want to output my course goals within the <p></p> element. 

2. I want to control HTML code with a Vue App by using the global available Object: Vue
On that global Object I call: createApp(); 
This creates a Vue App
Store this in Variable called app which is a default JS feature.

3. Let Vue known which part of this HTML code should be controlled by that Vue App, i.e. the code within the <section> element. We do this by calling mount(); method 
on the app Object which I created with the: createApp();
mount wants a String that should hold a CSS selector which uniquely identifies the element in our DOM/ in our HTML code, which I want to control. So I use an id as I want
a unique selector - should be unique on each page. Its simply a hash symbol. This will tell Vue that I want to connect my created Vue app to the <section> of the HTML code.

4. The connection is now done and now use Vue features to interact with this controlled <section>, by passing an Object to: createApp();
using a pair of braces to configure this App.

5. One option we can set is the data option/configuration, this name is NOT upto me, it has to be: data which is a key that wants a fn as a value and for this we can use the method
short hand: data() {}
This means, the value stored in the data proporty is a fn.
This fn returns an Object and always an Object. Here I can set-up any key-value-pairs. With any keys or property names of my choice, i.e.
courseGoal: 'Finish course and learn Vue!',
This is a String value but can be of any value i.e. a Boolean, Number, Array or another Object.

L15 Interpolation and Data Binding:
We use interpolation between HTML tags.
To output data my Vue controleed HTML part, there's a special syntax/attribute only available in HTML parts controlled by Vue: double braces opening and closing. Inbetween braces
I can reference my returned data Object properties i.e. courseGoal. Then Vue will make the connection and renter on the screen thanks to the special HTML attribute. This attribute
is called Interpolation. Its the value part of the property that gets rentered: the String. Data and Interpolation the two core key features of Vue.
I can use the property: courseGoal to output or render any value i.e. String, Number, Boolean, Array, Object with key-pair-value.

L16 Binding Attributes with the "v-bind":
v-bind is another Vue's key feature. To set a value to an attribute i.e. let a link to the href attribute that is in the anchor tag.
bind means to set something. Use v-bind to set a value on an HTML tag and to an attribute, i.e. on the href attribute within an anchor tag.
directive is an instruction we give to Vue to do something.
We don't always want to use Interpolation for outputing data, i.e. we have second paragraph and part of it needs to be a link: <p>Learn more <a hef="">about Vue</a>.</p>
1. Store the link value in our Vue app instead, then add some syntax to output the stored value in HTML code. So next step we can make this more dynamic.
2. Create a second property called: vueLink with a String value which is a link that will be output in the HTML code using the double braces syntax. This don't work which I can see from inspecting
the code from the browser. The double braces syntax only available between opening and closing HTML tags as it where we would output content. So if I want to pass in a dynamic value to an attribut,
i.e. set the value to the href attribute synamically with help of Vue, I need to use a special Vue binding syntax: v-bind. For that we use the vue directive
which is an extra instruction we add in the HTML code which we can use such directives on HTML elements i.e. on the anchor element. v-bind is the attribue alternative to the interpolation syntax. 

L17 Understanding "methods" in Vue Apps:
We learned about 2 key features for outputting andusing vue-managed data in the HTML code. Now we'll make our App more dynamic. We'll randomly decide which one we want to output. We roll a nice to
decide which text we want to output as a course goal by using another option we set on this vue app Object. We've already set the data option and now we use the methods option which allow us to
define fn's which should execute when something happens i.e. a user event like a button click occurs.
To methods, we pass-in a JS Object which will be full of methods/fn's, and these fn's I can name them however I want, i.e. outputGoal but all properties I define in this methods Object need to be fn's
as they need to be callable as fn's. To do that use the method shorthand: outputGoal() {}
Inside we can calculate a random number using Math.random(); -> a built-in fn in JS, will calculate a random number between 0 and 1. Add an if-statement.
Since outputGoals is defined inside methods, we can call it inside of HTML -> <p>{{ outputGoals() }}</p>
Now every time I reload the page I'll see a different value from time to time as we calculate a new value as the outputGoals gets called. After some reloads the text changes so our app is more dynamic.

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

*/

const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");
