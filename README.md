# React_Scout
CSNY_1 Production project for Aum, Javi and Gustavo


##Technologies

Node, d3, css, jquery, html, commander, fs-extra

##Background

React has become one of the most prolific front end frameworks and now powers some of the largest apps on the web. As these applications scale, components, props and state, as well as their relationship to one another can become difficult to map and understand. While React provides a robust debugging experience as well as various tools to assist in this endeavour (think React dev tools), we found that this ecosystem lacked a visual and more user friendly element.

React Scout helps to deal with this by giving developers a live, interactive graphical tree to display the component structure of any React application. The app displays the prop routes as they are being passed down the component hierarchy and also gives an idea of what the state is like at any given point in the lifecycle of the application. It also provides a timeline feature which allows one to rewind to any point in the application’s lifecycle to see how user interaction affects the state of the component hierarchy and the app itself.

##How it works

React Scout leverages the lifecycle hooks provided by React in order to build its visual representations at run time. Wrapper functions are added to React Lifecycles in order trace components. React scout takes advantage of every state change and gathers all the component instances into a tree object. After this creation,  React scout now passes the object to a D3 library to render all of its hierarchy into Graphical Tree.  It is powered by Node and uses ES6. It is a CLI tool and as such only requires that it be npm installed and ran from the command line. You then run your app as you normally would. React Scout save the data from client’s app in a JSON string in the local storage, at every state change the storage is updated. The D3 function is called every time local storage is updated. The tree is re-rendered on every update. Follow the steps below to use our tool. 

Make sure you have the latest version of Node installed
Install React Scout globally by running npm install -g react-scout
Run the tool by then navigating to the top directory in your project and typing in react-scout begin
Open up your application in whichever way you normally would
When done, in your command line (and in the same directory) type react-scout done

The developer will see a split screen with the target application on left and the react scout tree representing said application on the right. The developer is able to resize the window division in order to view either the application or the visualization more clearly.



##Technical challenges

Developers need to be able to plug our tool into their application in development mode without the hassle of importing it into every component file. To achieve this React-Scout ensures that the user would have a minimally invasive way to use the tool. A way that would easily merge into their current workflow and only work when needed. Tracing all of React’s complex interactions without depending on internals and without requiring that the user add any additional code to their app. Making sure that the user could comfortably view the application as well as react-scouts visuals without requiring more screen real estate or extra windows. Tracking props as they passed through components so that the user has some idea of app internals.  Implementation of timeline feature in order to allow user to rewind and fast forward through user interaction cases and application state changes

##Team responsibilities:

Saurabh Aum Dutta- Engineer. Created algorithm to wrap React lifecycle hooks to extract developer’s React application’s components and props. Created interactive tree graph utilizing D3 to display React component and child nodes. Improved performance by implementing D3’s diffing algorithm to only render altered data.
 
Gustavo Santana- Engineer. Traced all component instances from developer application and props. Wrapped JavaScript functionality on React lifecycle methods. Produced npm package, application running commands and browser invocation. Integrated D3, html and css modules for this tool
 
Javier Olaya- Engineer. Render all components that are associated to each other with the D3 library by serializing react objects into a JSON  for use in D3 tree-graph in order to visualize real-time component hierarchical. Leveraged localstorage to persist cache and of client-side state component tree object state by using custom made functions wrapped into react lifecycle in order to request available tree object graphical rendering. 

##Current Goals

We are currently working on a full rewrite of the main algorithms involved in getting data for the visualizations. We have also began to give some thought to cleaner and nicer looking graphics now that we are done looking at different methods of visualizing. This is all expected to be implemented for the following major (algorithm rewrites) and minor (graphical adjustments) updates.