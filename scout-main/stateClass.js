import TreeNode from './treeNodeClass';
import ReactDOM from 'react-dom';
import request from 'request';

const getParent = /react-scout-(\w+)/;
let parent;

function getParentName(e) {
  for (let i = 1; i < e.path.length; i += 1) {
    if (e.path[i].className.includes('react-scout-')) {
      parent = getParent.exec(e.path[i].className)[1];
      break;
    }
  }
}

const header = {
  'Content-Type': 'application/json',
}

const options = {
  url: 'http://localhost:9999/stateUpdate',
  method: 'POST',
  headers: header,
}

class State {
  constructor() {
    this.tree = null;
    this.nodeList = [];
    this.nodeIsComponent = {};
  }

  pushToList(component) {
    if (this.nodeList || !this.tree) {
      this.nodeList.push(new TreeNode(component.constructor.name));
      this.nodeIsComponent[component.constructor.name] = true;
    }
  }

  buildTree(component) {
    const thisNode = ReactDOM.findDOMNode(component);

    if (!thisNode.className.toLowerCase().includes('react-scout-')) {
      thisNode.className += ' react-scout-' + component.constructor.name;
    }

    if (!this.tree) {
      if (this.nodeList.length === 1) {
        this.tree = this.nodeList.pop();
        delete this.nodeList;
      } else {
        this.nodeListToTree(component);
      }
    } else {
      this.addToParent(component);
    }
//console.log(this.tree)
    let obj = component.props;
    console.log('obj', component.constructor.name)
    for(let key in obj) {
      console.log('this is the state', obj[key]);
    }
    console.log('props are here', component.props)

     options.body = JSON.stringify(this.tree ? this.tree : {});
   //console.log(JSON.stringify(this.tree ? this.tree : {}))
    request(options, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        // Print out the response body
        //console.log(response.body);
      } else {
        console.log(`Didn't go through!`);
      }
    });
  }

  nodeListToTree(component) {
     // console.log(component.constructor.name, component.state);
   
    let index;
    let currentNode = this.nodeList.find((node, i) => {
      if (node.name === component.constructor.name) {
        index = i;
        return true;
      };
      return false;
    })
    this.nodeList.splice(index, 1);
    currentNode.setParentName(this.nodeList[index - 1].name);
    this.nodeList[index - 1].children.push(currentNode);
  }

  addToParent(component) {
    const treeNode = new TreeNode(component.constructor.name);
    const element = ReactDOM.findDOMNode(component);

    element.addEventListener('click', getParentName);
    element.click();
    element.removeEventListener('click', getParentName);

    let parentNode = this.tree.recursiveSearch(parent);
    treeNode.setParentName(parent);
    parentNode.children.push(treeNode);
    this.nodeIsComponent[component.constructor.name] = true;
    console.log(this);
  }

  removeFromTree(component) {
    const name = component.constructor.name;
    const child = this.tree.recursiveSearch(name);
    const parent = this.tree.recursiveSearch(child.parent);

    const index = parent.children.findIndex((node) => node.name === name);

    parent.children.splice(index, 1);
    delete this.nodeIsComponent[name];
  }
}

export default new State();
