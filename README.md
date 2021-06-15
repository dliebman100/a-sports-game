# React Basics Lab: A Sports Game

In this lab, you will build a simple sports game. This lab will exercise your comfort level with JSX, Both stateful and stateless ReactJS components, working with props, and leveraging local state within a stateful component.

To get started you need to get everything set up so we are able to run our React application. You will be using `create-react-app` to set up the application.

## Setup

Follow these instructions to set up a new project with `create-react-app`.

1. Navigate to the directory where you'd like to store your new project.

2. Set up a new project called `a-sports-game` by running the following command:

```
$ npx create-react-app a-sports-game
```

3. Change into the `a-sports-game` directory:

```
$ cd a-sports-game
```

4. Start the application:

```
$ npm start
```

5. Your browser should open to http://localhost:3000 (Links to an external site.).

Take a look at the component inside `src/App.js`. This is a stateless functional component. **App** is a common name used for this default component. We render this default component component to display the entire application. You will **compose** a few components together inside the **App** component.

In a typical React application, `ReactDOM.render()` only renders this component. All other components will render through this component either referenced directly in this component or as children of components referenced directly in this component.

**_Note:_** For this exercise, the `src` folder and `App.js`/`App.css` files are the only places where you will have to create the React components/CSS files and write code. You will **NOT** have to edit the other files in the `create-react-app` project.

**_Note on styling your components:_** You're welcome to style the application however you want, as long as the required functionality works properly (see below). You're encouraged to focus on building the functionality first before spending time on styling your components. To keep your CSS code well-organized, create a separate CSS file for each component. For example, if you have a `Team.js` file to store the `Team` component, then store the corresponding CSS code in a file titled `Team.css`. Store both files within a subfolder, `Team`, within the `src` folder.

Here's the completed example of the game you will be building: https://murmuring-waters-10401.herokuapp.com/

Let's start building our game.

### The Team Component

Usually, in a sports game, we want our favorite Team to win. In order to play this game, you are going to need to create teams so they can compete for the win. Below is an outline of the functionality our `Team` component should include.

Here's a sample design (again, you can style the Team component however you like)

<img src="https://i.ibb.co/hLwmH6w/Screen-Shot-2021-06-06-at-12-47-55-PM.png" alt="Screen-Shot-2021-06-06-at-12-47-55-PM" border="0">

- Create a stateful **Team** component that accepts a **name** and a path to a **logo** for the team as a prop
- This component should display the team name (e.g., `Russiaville Raccoons`) and the logo (e.g., the image of the raccoons) provided through props
- The Team component should also display some stats about the team.
  - It should display the number of **Shots** taken
  - It should display the **Score** for the team
  - Let's display a **Shot Percentage** metric. This should be shots attempted divided by shots scored. This metric should only display if a shot has been taken. This should not be visible if the team has not attempted to make a shot.
- The Team component should have a **Shoot** button. We don't score every time we shoot so let's discuss the shoot buttons functionality.
  - When a shot is taken the **Shots Taken** count should always increase
  - There should be a random chance that the **Score** counter increases.
- Make sure to render and test your **Team** component functionality as you add new features. To get you started, here are some data you can use to test your Team component:

```js
const raccoons = {
  name: "Russiaville Raccoons",
  logoSrc:
    "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/raccoon.png",
};

const squirrels = {
  name: "Sheridan Squirrels",
  logoSrc:
    "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/squirrel.png",
};

const bunnies = {
  name: "Burlington Bunnies",
  logoSrc:
    "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/bunny.png",
};

const hounds = {
  name: "Hammond Hounds",
  logoSrc:
    "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/hound.png",
};
```

### Setup our battle of the sports teams

Let's add some extra functionality to our sports game. You will add the **Game Component** next. The **Game Component** will consist of two `Team` components, representing the visitors team and the home team, which are facing off in competition.

<img src="https://i.ibb.co/g7qPxvG/Screen-Shot-2021-06-06-at-1-01-32-PM.png" alt="Screen-Shot-2021-06-06-at-1-01-32-PM" border="0">

- Create a **Game Component** that accepts a **venue** name as a prop.
- Update the default **App** component that is currently displaying your teams to display the **Game** component instead. The default **App** component should only render the **Game** component instead of rendering the **Team** component as before.
- Update the **Game** component to display "Welcome to" followed by the name of the **venue** passed in as a prop.
- Your app should still render the default component with `ReactDOM.render()`, commonly named **App**.
  - The Game component should display the venue name for the game and two **Team** components, with one component representing the visitors team and the other representing the home team.
  - Each team should function as before but now conditionally display a **Shot Percentage** metric if a shot has been taken by the team.
- Think about what would happen if we added another **Game** component to our App. We could change the **Venue** name but we can only create new games with the same teams. What could we modify in the **Game** and **Team** components to allow us to have unique teams for each game we include in our default App component?
- Use your knowledge of HTML and CSS to make the page look like more like a game where two teams, home and visiting, are facing off in competition
- Verify both teams are displayed and keeping track of their stats
- You **DO NOT** have to build the `RESET GAME` button yet, as that's part of the next section.
- (Optional) Add functionality to make a sound play when a team shoots and a different sound when a team scores. The resources below should help accomplish this.
  - https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
  - https://www.freesoundeffects.com/free-sounds/sports-10098/

## Reset Game Button (Lifting State Up)

The challenge here is to add a **Reset Game** button to the **Game** component and a counter displaying the number of resets. To build this feature, you will need to apply a concept called lifting state up. Here are the resources to help you learn about this concept:

- Watch this [45-minute course](https://app.pluralsight.com/course-player?clipId=e0b02401-4ed7-4106-82fd-af01c6792bfb), which walks you through how to build a Github Cards App. Pay special attention to the "Initializing and Reading the State" video.
- [Official React Doc](https://reactjs.org/docs/lifting-state-up.html)

Don't worry, we will still go through this concept together as a class. The goal of this exercise is to get comfortable with teaching yourself your new things, now that you have a basic understanding of React.

<img src="https://i.ibb.co/Pm1rKrc/Screen-Shot-2021-06-06-at-1-18-55-PM.png" alt="Screen-Shot-2021-06-06-at-1-18-55-PM" border="0">

When the **Reset Game** button is pressedm the team stats should reset and the reset counter should increase by 1.

Building out the Reset Game Button will require you to "lift state up". Here's the [pluralsight video](https://app.pluralsight.com/course-player?clipId=846d24be-6429-47d9-9a66-88a55d3b2ff9) on this concept if you need a refresher. The official [React documentation](https://reactjs.org/docs/lifting-state-up.html) also provides great insight into the topic.

Here are the general steps:

- Modify the **Game** component to be the source of the truth for the games state. Our **Game** component will manage 2 teams, home and visiting, and their stats during the game. Update the **Game** component to keep track of the reset counter in its state. Its state should also keep track of the home and visiting team stats, and that state is passed to the **Team** component as props.
- Convert the **Team** component to a stateless functional component. Everything that relied on state before inside the **Team** component should now rely on passed in props from the **Game** component.
- Since all the game data will be tracked by the **Game** components state, the method used when clicking the shoot button for a team should also be passed in as a prop. This method needs to update state in each **Team** component.

These changes allow us to share state with all the components concerned by moving stat up to the closest common ancestor (i.e., `Game`) of the components that rely on it.

## Extra Credit

Create a Scoreboard component that displays the HOME and VISITING team scores.

<img src="https://i.ibb.co/s3W7Y2y/Screen-Shot-2021-06-06-at-1-25-27-PM.png" alt="Screen-Shot-2021-06-06-at-1-25-27-PM" border="0">
