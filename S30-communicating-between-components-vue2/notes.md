SECTION 30 COMMUNICATION BETWEEN COMPONENTS VUE 2:

443 Understanding Unidirectional Data Flow:

Generally if we want to reach out from one child to another child, this don't work as our communication is Unidirectional which means it only travels from parent to children or from children to the parent. Instead, we have to take the route that our parent gives us some method we can execute (pass callback as prop). When we execute that method provided by parent (it was provided by a prop), this will run in the parent. Alternatively, we use a custom event to which the parent listens. Then parent can pass the updated data to the other child. This is uni-directional data.

444 Communicating with Callback Functions:

On The User Component app, we used Props to get data from parent to child, and a custom event to do the other way. The callback mentioned on previous lecture is another option.

1. write a resetName() method inside the methods Object inside parent, and set name to equal to Max, so its the same resetName method as in the child component but now in parent.
2. In parent, Pass another prop to <app-user-detail> component, a resetFn which is a pointer to resetName() method:
   -> <app-user-detail
   :resetFn="resetName"
   > </app-user-detail>
3. Since we are passing that, we set up a new prop in my UserDetail Component, and I would have the resetFn in the props Object.
4. Duplicate the Rest Name btn but execute the resetFn not the resetName() fn:
   -> <button @click="resetFn()">Reset Name</button>

So nothing wrong with custom evetns but this callback is an alternative to that. Now, you can see this Reset Name btn also works but without using custom event and with callback method. So to communicate between parent and child, the options are: props + custom events or with props + passing a callback as a prop which actually executes a method in the parent but now by passing it as a prop makes it executable from the child. Next we will get data from one child to another child.

445 Communication between Sibling components:
We've passed data from parent to child and the other way round and we saw two different ways of doing that, with a custom event or using a callback. Now, we want to get some data from one child to another.

446 Using an Event Bus for Communication:
The third method is using a central class or Object to pass the data.
In the UserDetail.vue file:

1. A new lifecycle hook - the created() is a hook using ES6:
   -> created() {...}
2. Use this hook to setup a listener to this event. This listener should keep running from the beginning of this component on, therefore created is the place where I want to set it up as the component is now created, now can register this listener:
   -> add the import of the eventBus there, top of <script> element.
   -> inside of hook, setup eventBus on, and this will now listen to events emitted on the Vue instance created and stored in the eventBus in main.js
   created() { eventBus.$on(); }
   -> For the argument, pass-in a String 'ageWasEdited' as that's the name in the UserEdit Component -> inside of the methods Object. The second argument is always a callback which should get executed whenever such an event occurs, using ES6 syntax with arrow fn, this callback will get executed automatically.
   -> in the body, access existing vue instance wth 'this' keyword and set userAge to age:
   -> this.userAge = age;
   Now in UI, click Edit Age and it will update the User Age in the UserDetail Component to reflex the age on the UserEdit Component which is 30. Important! its not taking the route over the user Component - parent. This is how we can implement a communication between children without having to take the route using the parent. We are managing state of a property across multiple Components can quickly get very complicated, if you have more complex structure, user component in different places, update a property in different places etc. Later will learn Vuex which make state management easy.

447 Centralizing Code in an Event Bus:
We can use the eventBus Vue instance to store some centralised code we want to access from different places in your app like here where we emit this event:

method: {
changeAge(age) {
this.$emit('ageWasEdited', age);
}
}
});

So we don't need to duplicate code but store centrally, you don't need to emit events all the time. Code here can be accessible from anywhere in our app, as long as we import it and then access the methods we provide on this bus i.e. eventBus.changeAge(this.userAge);
and the same would be true for data you provide there, i.e. data: {},
and data inside this Object we can also access from all over our app. So its fine to use new Vue instance to centralise certain tasks, submit data, transport data across your application and therefore outsource certain pieces of your code into such a central place.

Assignment 15: Component Communication:
App: Server Status:
Make the servers talk to each other.

Servers component -> we have a separate component for each <li> item, we loop through the separate component with v-for loop, pass the current index/number to this server.
Now create an Array of servers Object in the Servers component within <script> tags.
First set up an Object that holds all these Servers: a default Object with some data. Data shall be a fn returning an Object that holds our data. servers is a property should be an Array of multiple JS Objects, where each Object has a server id, and a status:

export default {
data() {
return {
servers: [
{ id: 1, status: 'Normal'},
{ id: 2, status: 'Critical'},
{ id: 3, status: 'Unknown'},
{ id: 4, status: 'Normal'},
]
};

}
}

I need to loop through the servers, create new component for <li> items, by the id and the status to that to be able to click this component and load the server in ServerDetails where we have a btn to change the status back.

Solution:
Using Props, custom events, eventBus to communicate across Components and manage your state and pass data.

1. Servers -> parent: list items
2. Server -> child: each individual server
3. ServerDetail -> child: on the right column to display the id and the status.

<!-- 

This is the conent displayed on the right hand column - the id and the status of the selected server which will be displayed when user clicks on a server.
The button below will change the status of the current server from what it is to Normal.
Again, we import the serverBus Object to communicate with the other child - Server.vue 
When we display the Servers components, they are initially are set to null. Then when user click on the Change to Normal, the status will change to Normal.
Using the created() hook to the Event Bus to allow the two child components to communicate or pass data to each other - listening for the click event of serverSelected by pointing to that
