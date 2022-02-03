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

*/

const app = Vue.createApp({
  data() {
    return {};
  },
});

app.mount("#user-goal");
