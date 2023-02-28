# SportSee

![Capture_d_ecran_2023-01-26_134447-removebg-preview](https://user-images.githubusercontent.com/86132511/214882708-3878f866-ddca-4385-a697-226e58dba512.png)

## Model

![Capture_decran_2023-01-26_163845](https://user-images.githubusercontent.com/86132511/214882675-a282da4a-d202-499b-82fe-7f3bd8dddd91.png)

## Scenario 

You work as a developer at SportSee, a startup dedicated to sports coaching.
In full growth, the company will today launch a new version of the user profile page.
This page will in particular allow the user to follow the number of sessions carried out as well as the number of calories burned.

## Technical constraints

#### General :

- Use React to redo the profile page.
- Use of the Recharts or D3 library for the integration of graphics.
- Use of Fetch or Axios to make API calls.
- Write documentation in English
- Write a Read-me including the installation steps as well as the project prerequisites
- Use Prototypes for each component.
- Using Jsdoc to document functions outside of lifecycle methods.


## Stacks used

- React
- Vite
- Typescript
- Sass

## Justification for the choice of stacks:

#### Vite :

- Vite improves development server startup time by first dividing an application's modules into two categories: dependencies and source code.

#### TypeScript:

- Avoid hidden errors
- Easier to refactor code without breaking it significantly.
- Navigate more easily in complex and large-scale systems
- Code easier to maintain unlike JavaScript or its complexity to grow exponentially with each new line of code.

#### Sass:

- Allows you to manage style sheets dynamically, using variables, conditions, functions, loops and expressions.
- Allows you to write CSS faster.
- Create vendors automatically, which therefore makes it possible to have an identical rendering on each browser.


## Prerequisites

- Node.js


## Install Node.js

Download link: https://nodejs.dev/en/download/

## Install Backend App

To install the backend application, open a terminal (e.g. Git Bash) and navigate using the terminal to the folder: (chosen location)/back

Run the command:

`npm install`

The installation of the various dependencies should be done automatically.


## Launch the Backend application. (Once the application is installed)

`(chosenlocation)/back`

Run the command:

`npm run dev`

The application should launch, and if the previous steps worked correctly, the terminal should show you the following information:

``` bash
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app/index.js`
Magic happens on port 3000
```


## Install Frontend app.

To install the frontend application, open a new terminal, this time go to the folder

`(chosenlocation)/front`

Run the command:

`npm install`

The installation of the various dependencies of the frontend application will take place.


## Launch the Frontend application

As for the backend application, once the dependencies are installed, in the folder

`(chosenlocation)/front`

Run the command in your terminal

`npm run dev`

If the previous steps worked correctly, the terminal will display the following message:

``` bash
> sportsee@0.0.0 dev
> vite


  VITE v3.1.8  ready in 701 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
