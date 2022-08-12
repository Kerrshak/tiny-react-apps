# Planning

- [ ] Outline the functionality of your app
    To-do list
        [X]Welcome message with user greeting
            [ ]CHALLENGE
                [ ]Input to allow user to enter their name
        [X]Have a to-do list
            [X]Have checkboxes to mark when things have been completed
            [ ]CHALLENGE
                [ ]Have a button which unchecks all boxes
        [X]Add item to list
            [X]input box
            [X]add button beside input
            [X]takes data and adds it to a state
        [ ]Remove item from list
            [X]Clear list
            [ ]CHALLENGE
                [ ]Remove individual items via a checkbox selector
            
- [X] Sketch the UI of your app
- [X] Break up the UI of your app into components
- [X] Name your components
- [X] Draw out the component hierarchy
- [X] Decide on what data your application will need to hold in state - this should be minimal with no duplication of data
- [X] For each piece of state determine which components will need access to that state - either to read or update it
- [X] Place the state in a component that is high enough on the tree for all required components to be able to access it. A good general rule is `As low as possible, but as high as necessary`
- [X] Repeat this for each piece of state

## Setup

- [X] Create your app directory (e.g. with create-react-app)
- [X] Run your app
- [X] Ensure you have React DevTools running (in browser)
- [X] Create a static render of blank components as per your hierarchy
- [X] Check everything is hooked up and the component tree is rendered

## Build components

- [X] Work on each component in turn. Generally starting high up the tree and working your way down works well.
- [X] Add the required state to your components and render that state correctly. (You can change the initial state manually to check it renders the way you want for now)
- [X] Once the state is rendered correctly add any functionality that will set that state.
- [X] Repeat this for all the functionality of a component before moving on to the next.
- [ ] Once all the functionality of a component is complete you can style the component at this point or leave all your styling until the end.
- [X] Repeat this process until you have a complete app.