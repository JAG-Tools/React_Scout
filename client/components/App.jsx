import React from 'react';
import myD3 from './myD3Tree';
import reactComponents from './test';
import App2 from './AppSample';
export default class App extends React.Component {
    render() {
        console.log('this is my array of objs', reactComponents.getData());
        // localStorage.setItem('myStorage', JSON.stringify({aum: 'name'}));
        // myD3.test(reactComponents.getData());
        return (
        <div>
          <h1>Let's build this.....</h1>
      
        </div>)
    }
}
