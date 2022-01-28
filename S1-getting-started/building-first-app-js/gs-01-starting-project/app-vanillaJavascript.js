/*


Add Goals app:
With just JS without Vue:
In HTML file, we import our app.js file where we write some JS code to:
-> fetch user input when the button is clicked
-> create a new list item
-> and that to the list items Goal

// Get access to input to get access to the users entered value,
// Get access to button so we can list to click events on the button,
// Get access to the unordered list to add new list items.

Create three constants inside of app.js


*/

// button
// use DOM to select the only button we have on the page
// Point to that DOM element, to that JS object representation of that button element, is stored in that buttonEl variable.
const buttonEl = document.querySelector("button");

// Do the same for the input element:
const inputEl = document.querySelector("input");

// Do the same for the list element:
const listEl = document.querySelector("ul");

// The second argument needs to be the function that should be executed when the click occurs. For that we define a new function called addGoal which will be
// triggered on a click, so in the buttonEl function we just point at it not execute it by writing its name so the function is executed for us when a click occurs.
// Inside the function we want to get what ever the user enters as their goal.
// Inside fn, we want to get what ever the user enters.
// Create a new list item element by calling document create element, a built-in method provided by the browser, to create new dom elements programmatically with JS.
// Provide li to create a list item, then use that to set its text content, so the text between the opening and closing text, of that list item, equal to the entered value.
// Reach out to our overall list - the listEl, call appendChild, and append our listItemEl which we just created.
// Reload/refresh the page, now user can add a new goal.
// To allow user to reset/clear the input so they can add new goal without having to delete the previous one by using the inputEl.value to equal an empty string.
//
function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement("li");
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = "";
}

// Add a click Lister with JS to the button by reaching out to the buttonEl and calling addEventListener, where we then listen to the click event by passing
// click as a string, as a first argument.
// The second argument needs to be the fn that should be executed when the click occurs, so define that fn above. We don't execute it here just point at it.
// so the fn is executed when a click occurs-> get the enter value by reaching out to the input element and the value property inside that element to extract the
// value the user enters into this input: inputEl.
buttonEl.addEventListener("click", addGoal);
