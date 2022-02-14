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

L24 Using the Native Event Object:

Event -> User input: when user types their name in the input field, we want to output that below the input field.
The directive we should use is: v-on:input on the input element. By using this directive we are telling Vue to listen to this input event on this input element.
Then executes the JS code. Then auto detects that name changed - the interpolation in the HTML.

We need a new method to take in the data and we can named the method: setName() since set name is what we want to do. 2:13

Sometimes we need to pass-in the lastName so for that instead of pointing to the method from the HTML, we need to call it and pass-in the surname.
Then in our method we need to accept it as a parameter: setName(lastName)
Then update name with what ever then user entered: this.name = event.target.value + lastName;
Since we removed the event as a parameter we need to pass it into HTML code via the value of setName -> setName($event, 'Tsang')
The $event is a built-in default to give us access to this built in default event object. Then in our JS code, we can use event as first argument in the method:
-> setName(event, lastName)

L25 Explorting Event Modifiers:
Another feature build in Vue.
Example of an event modifier: forms -> input element and a Sign Up button. The problem we have by default when we click the button the page will reload as for a form with
a submit button is to submit the form and send an HTTP request to the server serving this app. We have no server as we are running locally so the browser sends a request to
our local machine. We don't have code in place to handle this request. With frameworks like Vue we want to prevent this browser default and handle this manually in JS with help of Vue. We want to read the user input there, validate it and send it manually to a backend sever and store it in a DB. So prevent browser default of auto sending it.
There are 2 ways of doing this. We can listen to the submit event - listen to form elements: v-on submit
Then in methods, write a new method: submitForm() { }
Point to this method from the HTML form element: v-on submit"submitForm"
The submitForm() method will get executed
Inside of the submitForm() -> show an alert to display submitted.
THE PROBLEM IS THAT THE PAGE STILL RELOADS AFTER THE Submitted message displays in the UI. So we still loose our data when click the button as the Vue app restarts.
Therefore, we use the default event Object as parameter in SubmitForm() method in our JS code. We call event.preventDefault() on the method as its built in JS ->
this tells browser that the form should not be submitted, we don't want the browser default.
Vue has a nicer way for us:
Instead of using the event Object, we use the event modifier:
There are certain event modifiers to connect to events we are listening to, to change that event behavior:
after the event name add a period then write the modifier: v-on:submit.prevent="submitForm"
couple of support modifiers: prevent -> will prevent the browser default. There is stop.

To change when the event will occur:
If we want to react when user right click on the Subtract 5 button, then we add a modifier - set to right after the event name 'click'. This means we only want to react to a right click.

Key modifiers:
on input elements when listening to keyboard events, i.e. we want to update the internally stored name property but should only be updated when user press Enter key on input element. For
that we can have another data property: confirmedName which is the actual name we want to output in HTML code. So we need another event name with a event modifer on the name input:
-> v-on:keyup.enter="confirmInput"
-> Others modifiers for keyup incl ctrl, shift, page-down, all keyboard keys are possible.

L26 Locking Content with v-once:
If we ever need to lock an initial value in, i.e. the counter value at 10, then the number on first green bar will not change when user click on the Add 10 button but the second button Result will change.
A directive that we rarely need: v-once
If we want our starting counter to start at a number that is not 0, then we need to reflect that in our HTML -> <p> eleement.
So if we want to preserve the initial state and not reflect any other changes, there is a special directive you can put on to the element where you are using that dynamic value in.
Thats the v-once directive. This tells Vue any dynamic data binding like this interpolation on the p element should only be evaluated once. So if data value changes thereafter, it will not
be reflected, it will not be updated.

Assignment 2: Time to Practice: Event Binding:
See directory named: basics-assignment-2-problem
The interpolation for the first and second output is using the property name from the return Objected not the method name within methods Object.

L27 Data Binding + Event Binding = Two-Way Binding:
The combination of data binding and event handing.
We are communicating in bothe ways:
-> v-model="name"
-> easier to get user input and updating its less code, a pattern and a directive I should keep in mind.

Going back to previous counter app. Now we need a Reset button next to the existing input field. This button needs to reset the user's input or to clear the user's input.
So first we need a new custom method 'resetInput()' and inside we need to clear this input. Don't use the vanilla JS way to do this as its very hacky/explicit
JS instructions but use Vue's way. So we use the 'name' data property which is the value we are updating on every key-stroke and output it here in input by setting value
by setting a value attribute to equal to the name property with help of v-bind:
When user press the Reset Input button the paragraph 'Your Name:' also reset as the method 'resetInput' uses the name property as well as in the return Object.
This is a patter we may need in some occasions, we may have inputs where you don't just want to get the value the user entered, but also want to set the value of the input
so we can reset it with a button. So we can achieve this by listening to the input (v-on:input), also by sending the stored value back into the input by binding the
value property (v-bind:value="name"). This is a common pattern that I will need. Its so common that Vue has a shortcut for this, a special built-in directive which simplifies this.
If we bind the value and lisen to the input changes on input, we remove all of that code (value binding and the input event listening) and replace with a new directive the 'v-model'
directive which wants the data property which is the 'name' property which is now manged by Vue so its updated on the input event and the name properties value is then sent back
into the input element. So v-model is a shortcut for 'v-bind' value, and 'v-on' input.
Before:
v-bind:value="name"
v-on:input="setName($event, 'Schwarzmüller')"
After:
v-model="name"

Test in UI and will get same behaviour as before but with less code. This is the concept of two-way-binding as we are communicating in both directions. We are listening to an event coming out
of the input element and at sametime we are writing the value back to the input element through its value attribute or through its value property. This makes getting user input and updating it
much easier as need to write less code by using the v-model="" directive.

L28 Methods used for Data Binding: How It Works:

What We Know (Thus Far):

1. DOM Interatcion: Templates & Data Binding.
2. Event Handling.

Now learn Advanced Reactivity:
We learnt methods with events. Now to learn better alternative to methods for certain use cases. Last lecture we did Two-way binding but to do that we had to remove our lastName.
The way we set our lastName wasn't ideal anyway and this alternative way is better as we can impliment a full name in a different way. First add new method at the top
(the order of these methods is not important):

-> new method 'outputFullname()'
-> Not going to use it to bind it to an event but use it to call it from the <p></p> element: Your Name: {{ outputFullname() }}
-> So I want to get back full name in the paragraph element, so insert inside of the interpolation part of the HTML code.
-> So we want to return this.name + a blank space + my lastName which is hardcoded as a String.
-> We need the 'this' keyword as we are refering to the 'name' property in the return Object inside of the data() method.

Since we are using a return here, we can add a if-statement to check if this name is currently empty, then return an empty String so that we only add our lastName if the name is
NOT empty. Only add lastName if user enter something in the input field i.e. their first name. 3:42
Now, when user enters their first name, that will output as well as the lastName and when we delete our input all the output will be deleted. This is what we expect.
There is a better way to do this, as when we change the counter in the UI Vue do something behind the scense -vue tries to find out where on the page/HTML where to update the
rendered page - the problem is that the outputFullname() will be re-executed by Vue, whenever something changes as Vue can't know what this method does, it dosn't known if the
counter gets used in there? For that reason Vue will re-execute any method anywhere on this page between curly braces or with v-bind or with the v-HTML, so any non-event bound
method will be re-executed by Vue, when anything on this screen changes. We know that outputFullname don't use the counter. From a performance perspective, that's not so good.
We can see this by writing a console.log('Running again...') just below the method name. When we press the Add 10 btn or the Subtrct 5 btn in the console tab we see the Running again...
message. This is why methods are not the best solution for outputting some dynamically calculated value like this.

L29 Introducing Computed Properties:
Computed Properties are like methods with one important difference, Vue will be aware of their dependencies and only re-execute them if one of them changed.
Computed is the third big configuration option for the app we created. The first one is data(), the second one is methods, the third one is computed and we can add this anywhere in
this config object: Vue.createApp({
here..
});

We'll add it between data() and methods, but the position don't matter.
When we add it, it's not an name we can choose as its one of the key options supported by Vue - a default keyword name.
Computed like methods wants an object. So we pass an Object as a value to computed, then we define a bunch of methods, just like in methods, but these methods will be called and executed differently. So here we add a fullname() method as we going to use this like a data property, not like a method, even though it is a method, we name our computed properties
as we would name our data properties i.e. counter: 0,
Inside we want to return a value that eventually should be yielded by that computed property, use the code in the outputFullname() method.
Now we can use the fullname() in our HTML code -> paragraph as the interpolation, pointing at the method not executing the method so without the parenthesis. So we use it just like
we use the data properties (like variables) like the counter within the HTML, we don't use them like fn's.
Now test in UI and will find same behavior but now when check in developer tools and reload, we find that if we change the counter we don't see Running again...
Before, with a method we did see it Running again...
So this is what we expect. We only see it when we type in the input field.
So with computed properties Vue is aware of the dependencies of the computed properties in this cases the 'name' is a dependency and it will cache the computed property value and only
re-calculate and re-valueate it only if any of its dependencies - the name property changed. Thats the main difference. Its better to use computered properties rather than methods for
outputting values in most cases.

L30 Working with Watchers:
We can use a watcher as an alternative to a computed property and example is the 'name' watcher that is connected to the 'name' data property within the data() method which is also one of the
configuration of this Vue app.
The 'name' watcher can take multiple arguments i.e. new value and old value. 4:40
We use if-statement to ensure fullname is empty if value is empty/if user not entered anything in the input field.
We need to update the fullname when either the name or lastName changes.
The problem is watchers is that if we add a lastName to our data() method/config then we need to write a new watcher which is a lot more code compared to the computed alternative.
With computed, if we want to use two dependencies, we just reference two dependencies.
A case for using watcher is if we want to watch out for the counter when it exceeds above 50, and if so set counter to 0, using logic like if-statement.
Another case is HTTP request which we want to send if certain data changes, or timers which you want to set if certain values change.
If we just want to calculate some output value dynamically, then use computed property.
I tested and found that the two input fields not working as expected. Prateek from the Q&A of this course advised me that I have a name conflict with 'fullname'. So I watched the video from the start taking note of that conflict and found out that I had to comment out the fullname from the data property and the lastName property with its value from the if-statement that's inside of the computed Object/config.

L31 Methods vs Computed Properties vs Watchers:
Methods:

1. Use with event binding OR data binding.
2. Data binding: Method is executed for every 're-render' cycle of the component.
3. Use for events or data that really needs to be re-evaluated all the time.

Computed:
Otherwise, we use computed properties

1. Use with data binding.
2. Computed properties are only re-evaluated if one of their 'used values' changed.
3. Use for data that depends on other data.

Watch:

1. Not used directly in template.
2. Can watch any property incl. computed properties. Allows us to run any code in reaction to some changed data e.g. send Http request etc timer, store something in local storage etc
3. use for any non-data update we want to make. Out of the 3, this is the lest used.

L32 v-bind and v-on Shorthands:

A shorthand for adding event listeners a bit easier:

Before:
For listening to a click event: v-on:click
For listening to an input change: v-bind:input
After:
@click
@input

We can still add modifiers -> .enter and everything we did before.
If I use it then be consistent with it.

For binding an attribute dynamically: v-bind:value="..." -> shortend to: :value="..."
No shorthand for v-model="..."

Assignment 3: Time to Practice Reactivity:
Completed but I forgot that computed property is for dependancy change -> changed counter to number which become the dependency and when this change (from 0 to greater than 37) then in 5 seconds
then Vue will change from 'Too much!' to 'Not there yet!'.
How:

1. write the global Vue app and connect to the HTML.
2. write the event listener on both btn's.
3. write the first config which is the data() method at top of the Vue app.
4. write the methods Object and the method() inside of that.
5. write the computed property with the 'number' property inside as the dependancy.
6. watch for the result() computed property, and when user press any of the Add btn's so that the number is greater than 37, then in 5 seconds Vue will change the output to 'Not there yet!' -> less than 37.

L33 Dynamic Styling with Linline Styles: 7mins:
Dynamically in reaction to something, i.e. a click by user. Change data properties through clicks.
Example, we want to highlight the div the user has clicked on.
Keep track of which demo div is selected. Could use boxASelected.

1. Create 3 data properties with 3 different names: boxASelected, boxBSelected, boxCSelected.
2. Initailly they are all set to false - grey -> boarder-none.
3. we can use click listeners on any HTML elments i.e. div's not just on buttons
4. Its the v-bind:style="..." or just colon :style that makes the styling dynamic.
5. A special Vue feature for styong class is: pass-in an Object to :style="..." -> css property name, i.e. borderColor -> lower cameral case naming convention.
   Check if box A is selected:

   L34: Adding CSS Classes Dynamically:
   Add dynamic styling and dynamic class in Vue:
   Inline styles over-rule other styles and often causes problems. In modern wed development and CSS, we dont use inline style often.
   Therefore, we use css classes dynamically.
   Vue has special sytnax for class attribute for binding with v-bind so we can add properties where property names reflect your css classes, and the values of those properties are tue or false result that indicates whether that class should be added.
   So we add demo as the property name and set to true. Add active and set the value of active to boxASelected. So the active class is added to this div if boxASelected is true. Simplify it as we always add the demo class, so remove it and put it in a separate class above.
   To deselect a box we use toggle -> set as inactive :
   To allow users to toggle/deselect and not just mark box active:
   -> method -> instead of declare box to true we declare as the opposite with the Not opporator: !this.boxASelected;
   -> if box A is true, its now NOT as its assigned to NOT true
   -> Do the same to the other boxes.

L35 Classes & Computed Properties:
It's ok to have class binding in HTML code is but If we have more complex code and need to find out if a class (i.e. active) should be added or not, then we can use computed properties. Then we just create a new computed property and add the class binding logic inside it, using the 'this' keyword since we are inside of our Vue app.

Then in HTML -> v-bind class, it will take-in the value of the computed property name of: boxSelected

L36 Dynamic Classes: Array Syntax:
We can have multiple class attributes, where we have multiple class assignments, we can work with one and pass-in an Array rather than an Object where, and the Object can be one
of multiple elements, other elements could be demo as a String.
Multiple dyamic classes to one at the same div by using an Array.
