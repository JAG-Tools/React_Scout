import React from 'react';
// import unlace from 'unlace';

//connnect to app.jsx and import d3 function from apjsx
//call 
const reactComponents = {};

reactComponents.getData = function() {
let nodeList = [];  
let mytree;

class TreeNode {
  constructor(name) {
    this.label = name;
    this.children = [];
  }
}

React.Component.prototype.componentWillMount = function() {
  
  nodeList.push(new TreeNode(this.constructor.name));
  // console.log(` Will Mount: ${this.constructor.name}`)
  this.componentDidMount = function() {
  //  console.log('hello')
    for (let i = 0; i < nodeList.length; i += 1) {
      if (nodeList.length === 1) {
    
        // mytree = nodeList.pop();
        break;
      }
      if (nodeList[i].label === this.constructor.name) {
        nodeList[i - 1].children.push(nodeList[i])
   
        nodeList.splice(i, 1);
      }
    }
    // console.log(` Did Mount: ${this.constructor.name}`)
    if (this.constructor.name === 'App') {
      console.log(mytree);
    }    
  }
 }
 return nodeList;
}


let myTreeDummy = [{"name":"App","children":[{"name":"HeaderX","children":[{"name":"ImageHeaderX","children":[],"parent":"HeaderX"},{"name":"AppTitleHeaderX","children":[],"parent":"HeaderX"}],"parent":"App"},{"name":"AppIntro","children":[],"parent":"App"},{"name":"FooterX","children":[{"name":"ImageFooterX","children":[],"parent":"FooterX"},{"name":"AppTitleFooterX","children":[],"parent":"FooterX"}],"parent":"App"}]}]


 const Component = React.Component;
 
//  export default Component;
 export { React, Component, myTreeDummy};

  
