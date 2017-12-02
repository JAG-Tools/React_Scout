import React from 'react';
// import unlace from 'unlace';
import {reactComponents, myTreeDummy} from './test';
import myD3 from './myD3Tree';
import App2 from './AppSample';
export default class App extends React.Component {
    render() {
        // console.log(myTreeDummy)
        // let mytreesample = reactComponents.getData();
        // console.log('this is my array of objs', mytreesample);
        // localStorage.setItem('myStorage', JSON.stringify({aum: 'name'}));
        // let myjsonObj = unlace(mytreesample);
        // console.log(myjsonObj);
        let myTree = myTreeDummy;
        console.log('this is my tree in app.jsx', myTree)
        
        return (
        <div>
          
          {/* <App2 /> */}
          <div>{myD3.myTree(myTree)}</div>
        </div>)
    }
};
