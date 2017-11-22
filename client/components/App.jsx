import React from 'react';
import unlace from 'unlace';
import reactComponents from './test';
import myD3 from './myD3Tree';
import App2 from './AppSample';
export default class App extends React.Component {
    render() {
        let mytreesample = reactComponents.getData();
        console.log('this is my array of objs', mytreesample);
        // localStorage.setItem('myStorage', JSON.stringify({aum: 'name'}));
        // let myjsonObj = unlace(mytreesample);
        // console.log(myjsonObj);
        // console.log(myD3.test());
        return (
        <div>
          <h1>Let's build this.....</h1>
          <App2 />
        </div>)
    }
}
