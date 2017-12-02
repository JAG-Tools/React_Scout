import React from 'react';
// import unlace from 'unlace';
// import {reactComponents, myTreeDummy} from './test';
// import tree from './../../../test-app-1/src/server/server.js'
import myD3 from './myD3Tree';
import App2 from './AppSample';
export default class App extends React.Component {
    // have state object, on then change the setstate 
    getDataRenderTree(){
    let myTree = fetch("http://localhost:9999/stateRetrieve")
            .then(  function(response) {return response.json() })
            .then(function(json){ console.log('this is the data', json);myD3.myTree([json]); return json  } )
            .catch(function(error) {console.log("error is: ", error) });
            console.log("myTree:",myTree )
            
    }
    
    render() {
        
       
        //console.log('this is my tree in app.jsx', myTree)
        
        return (
        <div>
          
          {/* {<App2 />} */}
          <div>{this.getDataRenderTree()}</div>
        </div>)
    }
};
