# React Recipe

1. Create a design for your React application. Identify the components you'd need for your application.
2. Within the `src` folder, create a new folder for each component you identified in Step 1. Each folder should contain the JS, CSS, and test files for that component. Use Pascal-casing to name your folder and file names.
3. In each JS file, bootstrap each component with some static data. Use the `rcc`/`rfc`/`rconst` shortcuts.
4. For each component, take a look at your design to decide what data needs to be stored within state versus props. Any part of the component that changes when the user interacts with the app needs to be stored in state. Any part of the component that needs to be customizable should be stored in props.
- i. Add state/props to your component.
- ii. Replace the JSX in your component with values from either the state or the props, as appropriate. 
- iii. Build out the functionality of the component, including any event handlers. 
- iv. At this point, you might have to "lift state up" to the parent component, if your components need to share data between them.
- v. Repeat step 4 until all components are completed.
5. Once the app is working properly, add CSS to each component's CSS file to style your application.

## Notes on App

**Components:**
- The parent component is the **App** that wraps everything together & has other components nested

- Visualize what we have with a tree (component hierarchy)

![Simple setup](img/simple-setup.png)

1. **Game:**
* Each game would consist of two *teams* (Russiavile Racoons look similiar so we can create 1 component)

2. **Scoreboard**

3. **Team**