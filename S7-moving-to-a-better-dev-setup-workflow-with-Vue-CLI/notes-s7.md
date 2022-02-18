SECTION 7 MOVING TO A BETTER DEV SETUP & WORKFLOW WITH VUE CLI:

L75 Module Intro:
Example app -> Friend List:
CLI Setup as now developing bigger apps - better project setup to develop Vue apps that scales.

L76 Why We Need A Dev Server:
We need a proper dev server so we don't need to double click on HTML file and see it in browser which works but not how we should test in the UI as we want to use the HTTPS protocal not the file protocal. This influences how our pages are server, which features we can use in our JS code.
Certain JS wouldn't work in that file setup. The user we target with our Vue app will be using our app with a website that will be hosted on some server - via HTTPS protocal.

1. A more realistic dev setup and want have a dev web server, which is a web server running locally on my machine so I don't need to pay for any server right now, can still test everything locally on my machine, but dev web server my HTML file via the HTTPS protocal on my machine not via the file protocal.

L77 Why we Want A Better Dev Experience:
Current State:

We want to switch as we want a better dev experience, we don't want to keep having to reload my page in browser which can become annoying and loose state.
At the moment auto completed is not available. So we need better IDE support.
Warnings on typo's. Need better support.

Wanted State:
We will split code across multiple files to make our code more readable.
Saved changes should be auto-detected and page should reload/update.
IDE should provide better auto-complete and hints.
Using modern JS features i.e. ES modules.

L78 A note About The NodeJS Version:
In the next lecture, we will use a third-party tool (Vue CLI) to create a new project. This tool, under the hood, uses NodeJS - a software which you need to download as part of the next lecture.

You will learn about the details in the next lectures but make sure that you DON'T use NodeJS version 17 for the moment! Because at the moment, due to a bug, the created project won't work with that version.

Instead, download the LTS version of NodeJS. You can download that version via this link (use the "LTS" version): https://nodejs.org/en/download/

L79 Installing & Using the Vue CLI:
A useful tool that gives us nice features from the Vue team - helps us create projects and manage projects that helps us dev more realistic and bigger apps.
To us CLI we need node.js and I've installed this.
node.js -> npm: node package manager - we will use this tool as well -> to install CLI and later extra packages.

To install CLI, use this cmd: sudo npm install -g @vue/cli
For Mac's we need the sudo at the start. Then when prompted, type in pw for my machine. Now we can generate Vue projects.

Installed CLI but received this message:
3 moderate severity vulnerabilities
Some issues need review, and may require choosing
a different dependency.

Create a new project directory: vue create vue-first-app
The features incl. Router and Vuex.
Run:  
$ cd vue-first-app
$ npm run serve -> to run testing dev server

I can now view my app using this address: http://localhost:8080/
keep this web server process up and running as long as I'm working on the project. Thereafter, quit with CTRL + c
To create a production build, run npm run build.

L80 Inspecting the Created Project:
To create a production build, run npm run build.
Going throught the directories and sub-directories. The root has a bunch of config files. The package.json file has scripts that we can use to execute like NPM run serve to start the dev server. These are pre-config's, and dependencies i.e. vue: 3.0.0.0 These are packages now available in our code.

Directories:
Leave the mode_modules directory alone.

L81 Inspecting the Vue Code & .vue Files:
-> main.js -> the main entery point Vue runs this file first.
-> .vue files (single file components) are special JS files or a special Vue CLI project feature. Allows us to write components in much nicer way - allows us to split our HTML template, the script part, and some styles into 3 different sections using tags/elements. Vue will transform this code to code that will work so we have nice way of defining <style>

CLI uses a Build Workflow.

1. Our Code -> Uses next-gen Vue-specific Syntax & Features.
2. Build Step -> Vue change to standard JS code with standard JS features that do work in the browser.
3. Then the dev or real server can show something on the screen as it only receives regular JS code.
   .vue files (single file components) are convient way to writing components and Vue code.

L82 Adding the Vetur Extension to VS Code:
I've installed Vetur. This extension will help me with Vue development in general, a must have extension for Vue developers -> a better developent experience with auto complete etc.

L83 More on .vue Files:
Contains config's for our Vue apps i.e. the template for that app or Component.
we will write components then connect them up.

L84 A New Vue Project;
Install all dependenies - node modules -> cmd -> npm install
-> run: npm run serve
-> Note that the development build is not optimized.
To create a production build, run: npm run build.

L85 Creating a Basic Vue App:
-> Note that the development build is not optimized.
To create a production build, run npm run build.

Write tags inside of the App.vue file.
Inside of <script></script> we provide the congig for our vue app -> main.js -> createApp()
Just watching the videos now as limited in time.

export the data property from the App.vue file into the main.js file -> import App from './App.vue';

L86 Adding a Component:
Combing different components together.
-> new directory in src directory: component
-> inside that create new vue file: FriendContact.vue
-> in that file: write our template and script area. Inside that write an config Object: export default {}
-> inside that add a template key to define the html code of this component in a String.
-> Write the data option with some data/content.
-> write the method option
-> Connect the btn in html code using the click listener attribue.

I have run the app in terminal: http://localhost:8080/ | npm run serve

L87 Adding Styling:
I took the styles from the section 6 module and used it in at the bottom of the App.vue file and inside <style> tag.
I've tested in UI and it workds as expected.

L88 A Small Addition:
I've fixed the issues that the instructor has flaged up as below:

Here's one thing I forgot to do in the last lecture: Make the button caption dynamic.

In the FriendContact.vue file, change the <button> from

<button @click="toogleDetails">Show Details</button>

to

<button @click="toogleDetails">{‌{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>

Also add the following font import to the <style> section in the App.vue file (right at the beginning of the style section).

@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

L89 An Alternative Setup - using "npm init" & Volar:
I've read the message from instructor and decided to stick with CLI rather than installing: npm init vue and then having to install the Volar extension.

The Vue ecosystem keeps on advancing and developing and therefore, there now are official alternatives to using the Vue CLI & Vetur.

You CAN still use those tools (and in this course, these are the tools being used - so to follow along smoothly, you might want to use them as well).

But, alternatively and 100% optionally to using the Vue CLI and Vetur, you can also use two different tools / approaches:

1. Use npm init vue instead of installing and using the Vue CLI

2. Use the Volar extension instead of Vetur

You don't have to use either of the two, but you may want to experiment with them. The Vue code you write, is of course 100% the same as shown in this course - no matter which setup you're using.

npm init vue uses an official package to help you initialize Vue projects. You get a command line wizard that walks you through project creation, comparable to what you get with the Vue CLI (though with slightly different choices and options). For a basic Vue project, you can select "No" for all options.
