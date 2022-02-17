SECTION 4 COURSE PROJECT - THE MONSTER SLAYER GAME:

L50 Module Intro:
A bigger project using the concepts I've learn in previous sections of this course. Practice the core basics we've learnt:
data binding, interpolation, v-bind, event binding with v-on. How to output lists of data with v-for, We'll have conditional content with v-if, and more.

The Game:
We have various options to fight against the monster, a battle log to see what happen, i.e. how much damage we dealt.

My Strategy:

Due to time limits I will watch the lectures/videos and may be take a little notes but not doing any codeing. I will come back to any lectures that I've not done the coding for in the future when I have more time.

L51 Project Setup & First Methods:
I have download the project starting files but due to time limits I will watch the lectures/videos and may be take a little notes but not doing any codeing. I will come back to any lectures that I've not done the coding for in the future when I have more time.

Start with the ATTACK button as we impliment from top to bottom.
btn -> use some radomus: inside data method/option -> return the object that hold our data -> playerHealth: 100
-> montherHealth: 10
These are to manage the health of our 2 players.
To change the health we needs methods Object that holds multiple methods -> these are the actions we support in our Vue app: called the method: attackMonster() as that is what we are doing - attacking the monster. Inside of this method we need to calculate the damage - we use random value here: to calculate radom value use the Math.radom() method -> get random number beween 5 and 12 (points): The formula of calculating a number between 5 and 12:
-> Math.floor(Math.radom() \* (12 - 5)) + 5;
-> The attack value at which I want to reduce the monster's health:
-> const attackValue = Math.floor(Math.radom() \* (12 - 5)) + 5;

Out source the getRandomValue function outside of the Vue app -> max - min. Then use this function inside of the Vue app.
Inside of the attackMonster() at the end we call the this.attackPlayer()

L52 Updating the Health Bars:
Keep the HTML code lean and put as much of the logic in JS code as possible. This is includes the monsterBarStyles and computed properties. Then in the binded style attribute, point to these properites:
For dynamic styling, bind it -> :style="..."
The width is now dynamic:
-> monsterBarStyles() { return { width: this.monsterHealth + '%' }; },

L53 Adding a "Special Attack" :
Make This button only available every 3 rounds.

1. Write an method -> between 10 and 25 damage points. So we have the potiential to do a lot of damage.
2. Reach out to the mosterHealth and deduct the attack value from it.
3. Again the monster can attack back, so we call attackPlayer() method to make sure the player are attcked after launch a Special Attack.

Now restrict this powerful attack as player can keep pressing the SPECIAL ATTACK button which we don't want. It should only be available every 3 rounds. So when not available, btn should be disabled. To impliment this:

1. Track the number of rounds -> data property: currentRound: 0
2. When ever user do something then the round should change -> this.currentRound++ -> to implement to increment by 1.
3. Disable btn if the current round is not dividable by 3 to make sure that we can only use it every 3 rounds.
4. Set disable directive to be dynamic so use v-bind -> :disabled="..." -> set to true or false which should be derived base on the current round. Use the moduler operator in JS to divide by 3 and find out what the remainder of this divsion is. We'll disable it if the division of 3 is not leave a remainder of 0.
5. :disabled="currentRound % 3 !== 0"
6. We'll disable it if the division of 3 is not leave a remainder of 0.
7. Write a computed property named mayUseSpecialAttack() and put the logic inside this. Then in the HTML code (in the disabled attribute as the value) just point to this property. Inside this method, point to currentRound by using the 'this' keyword as we done before.
8. Now, user only has access to the SPECIAL ATTACK btn, every 3 rounds.

L54 Adding a "Heal" Functionality:
The HEAL button. May be as the Player we took too much damage and we want to heal ourselves. So we need to impliment an functionality for that as well.

1. methods -> add a healPlayer() method as the HEAL functionality/button should heal the player not the monster.
2. Inside of the method, we calculate a healValue to get a random value between 2 boundaries. Since the monster hits us at 8 and 15, we want to get a heal value of 8 and 20:
   -> const healValue = getRandomValue(8, 20);
3. Reach out to the playerHealth and add that calculated heal value:
   -> this.playerHealth += healValue;
   But we start at 100 playerHealth so we shouldn't be able to heal over that. To prevent that from happening, we can add a if-statement inside of healPlayer() method. Check if playerHealth + healValue would exceed 100.
   -> this.playerHealth += healValue;
4. If so, set playerHealth to 100, so we can't go higher than that:
   -> this.playerHealth = 100;
   Only if playerHealth + healValue don't exceed 100, then (else block) add the full healValue to the playerHealth
5. Now we have the healPlayer method, we add it to the button element by using a click listener and point to that new method.
6. Now that we've healed ourselves, the monster can attack the player. To impliment this by calling the attachkPlayer() funtion: this.attackPlayer();
   Now we have all the actions and the bar changes appropriately but how to the Game end? We want to make sure either Player or monster wins or its a draw.

   L55 Adding a "Game Over" Screen:
   Check who won and who lost:
   Don't repeat code -> DRY -> add a watcher -> watch option: watch playerHealth property and the monsterHealth property. Inside the playerHealth:

watch: {
playerHealth(value) {
if (value <= && this.monsterHealth <= 0) {
// its a draw
} else if (value <= 0) {
// Player lost
}
}
}

In the HTML add a second <section> element to output a String of 'Game Over!' -> <h2>.
Use conditional content -> v-if+"winner" attribute (with v-else-if and else) and its value. Also, <h3> elements and three sets of these elements.
We need a watcher -> watch property in JS code.

L56 Finishing the Core Functionality:

Bars for monster and player - set to 0%:
-> write a new computed property for both the monster and player:
monsterBarStyles() -> and inside the braces write an if-statement to check if the monterHealth is less than 0 then set the width to 0% as a String value.
-> monsterBarStyles() {
if (this.monsterHealth < 0) {
return { width: '0%' }
}
}

Otherwise we return the dynamically calculated health - actual value.
Do the same for the player -> computed property -> playerBarStyle()
So if we the player wins, the Monster Health will be 0 as the bar will be empty.

To Restart The Game:
Add a btn in Game Over box, below the h3 text: Start New Game
For this we need a new method as we need new action which we can trigger from inside our HTML code. The position of this method don't matter but best to write it at the top as Start New Game sounds like it should be at the beginning. Inside this method startGame() we need to reset all the parameters of all the data() properties:
startGame() {
this.playerHealth = 100;
this.monsterHealth = 100;
this.winner = null;
this.currentRound = 0;
},

HTML code:
in the btn add a click listener to listen for a button click and point to the startGame method property.
<button @click="startGame">Start New Game</button>

SURRENDER Button:
To impliment this feature we need the functionality of...
We need a new method for the btn to do something when user click the btn.

1. write new method - we want to set the winner to equal to monster, as if player surrenders the monster wins.
2. On the SURRENDER Button, we bind it to a click listener to the newly added surender method:
   <button @click="surrender"></button> 3. Test in UI: when we click on the btn, player loose and the messag of Start New Game will display.
3. However, We can still click ATTACK and the health bar still updates. So we need to disable all the game action btn's if the game is over or remove controls entirely:
   We do have a Game Over container - the first <section class="container" v-if="winner">
   Since this is a direct neighbour of the second <section id="controls"> -> we can make this display if we don't have a winner - with not winner - if winner is false:
   -> <section id="controls" v-if="!winner"> or
   -> <section id="controls" v-else">
   So only display this section if we don't have a winner yet. If we do have a winner we don't display the game controls.
   Test in UI: if we click SURRENDER Button, then the game controls are gone and we have to click the Start New Game btn to bring them back.
   Thats the core functionalty is completed now. Just need to develop the Battle Log feature.

L57 Adding a Battle Log:
There are many way to implement such a log.
Log that we can add messages that keep track of which action occured, who started this action, and which value was connected to this action, i.e. how much damage was dealth.

1. Write new method - addLogMessege() since this is what we are going to do.
2. Needs to take x3 parameters - who did something, what happened (did we attack?, did we heal?), the value (how much damage was dealt, how much did we heal for): who, what, value.
3. we want to add new log message to a growing list of logMessages, which can be output in Battle Log box on screen. So we need a data() property, an Array of messages which can change and vue tracks to be aware of changes so that it updates the UI when it changed:
   -> logMessage: []
   -> methods -> startGame() -> set back to empty when we start new game
   -> addLogMessage -> add a new log message to this Array when ever this method is called. Add it at the top so the latest message is always the first one in the Array. The unshift() Array method add something at the begining of an Array whereas push() adds it at the end of Array. A log message is an Object so we add an Object inside of the unshift() method. Inside here add the 3 pices of info/3 keys so we know who did the action, what type of action it was and what the value of the action was. This is how we add log messages. Example, a new log message should be added when we attack the monster:
   attackMonster() -> write -> this.addLogMessage() -> set the who to player as the player attacked the monster, set the what to attack, set the value to attackValue.

   addLogMessage(who, what, value) {
   this.logMessages.unshift({
   actionBy: who,
   actionType: what,
   actionValue: value
   });
   },

   this.addLogMessage('player', 'attack', attackValue);

   write that in both attackMonster() and attackPlayer() methods. 5:13
   Now output these messages:

   1. HTML -> section element - id="log" -> ul element: should render a bunch of list items. Since we are outputing a list of data and want to write semantically correct, ofter we'll use v-for attribute on list items, it allows us to repeat this <li> element and create it as often as needed:
      <li v-for="logMessages" ></li>
      Go through the logMessages with the 'in' keyword and then get access to every single log message. Repeated list item:
      <li v-for="logMessage in logMessages" ></li>
      Use interpolation to output the message
         <li v-for="logMessage in logMessages" > {{ logMessage.actionBy }} - {{ logMessage.actionType }} - {{ logMessage.actionValue }}</li>
   use the styles:
   using the styles from the styles.css file -> use the class attribute in HTML code and the value is the css id in the css file. Don't out source to a computed property. Can use a method to pass logMessage.actionBy.
   use a span elements to hold the values -> if logMessage.actionBy is player then print Player, otherwise it will be the Monster.
   <span>{{ logMessage.actionBy === 'player' ? 'Player' :  }}  </span>
   <span v-if="logMessage.actionType === 'heal'"> </span>
   <span class="log--heal">{{ logMessage.actionValue }}</span>
   <span v-else>
      attacks and deals <span class="log--damage">{{ logMessage.actionValue }}</span>
   </span>

   Now once game is over, we can inspect the log. This is the finished game.
