L39 Module Intro:

Conditional Content & Lists:
How to render content conditionaly when certain conditions are met.
How to output a list of content i.e. a list of course goals, list of products, rendered dynamically, i.e. when list grows/reduces.

Module Content:
How to render content with conditions - tools to make sure that certain text is only shown if we have no products to list.
How to output lists of data.
A First Look Behind the Scenes of Vue.

L40 Understand the Problem:
App: My course goals -> Add Goal ->
Message: No goals have been added yet - please start adding some!

Dummy goal: no way of outputting actual goals at the moment.

If we do have goals, we want to render in the <ul> HTML code, we don't want to show the message/paragraph. So we need conditional rendering.
In the next lecture, Let see how we can render content conditionally with Vue.

L41 Rendering Content Conditionally:
Vue has a directive that should be redered conditionally and that is the: v-if directive, similar to the if-statement in JS. 1:11
Conditional rendering with v-if=""
To consume user's input/their goals, we need to write a method in our JS code.
If no goals we show the paragraph message, if we do have goals we show the unordered list.
Test: refresh browser and we see the message. Then we type in our goal and the message disappears. We don't see the goal yet as this is what we expect at the moment as we not learnt how to output
the goal value yet but we see the conditional rendering with v-if works.

L42 v-if, v-else and v-else-if:
Showing content conditionally.
v-if="..."
can have any JS expression here that will evaluate to true or false. Can also combine condition with AND or OR -> && / ||
Can also execute a method here as long as that method returns a true or false value.

Not only we want to show the paragraph condionally but also the list conditionally - only if we do have a goals. So check if goals is greater than 0 the .length on the goals Array. And only if it is > 0 then we show the list <ul><li>
Testing on UI: So when user add a goal then the paragraph disappears, and we see the list with the dummy Goal text initially.

v-else:
Needs to be used on direct neighour element of the element which has v-if.
For multiple possible conditions, we use the v-else-if condition. In case those are not mapped then the fall-back we would use: v-else for the end claws.
It is about attaching and de-attching from the DOM.
