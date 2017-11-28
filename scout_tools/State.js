import parentComponent from './scout-get-parent';

class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  setParentTo(parent) {
    this.parent = parent;
  }

  recursiveSearch(name) {
    if (this.name === name) return this;
    let result;

    for (let i = 0; i < this.children.length; i += 1) {
      let check = this.children[i].recursiveSearch(name)
      if (check !== null) {
        result = check
        break;
      };
    }
    return result || null;
  }
}

class State {
  constructor() {
    this.tree = null;
    this.nodeList = [];
    this.nodeIsComponent = {};
  }

  nodeListLength() {
    return this.nodeList ? this.nodeList.length : null;
  }

  get treeEmpty() {
    return !this.tree;
  }

  pushToList(nodeName) {
    this.nodeList.push(new TreeNode(nodeName));
    this.nodeIsComponent[nodeName] = true;

  }

  makeTree() {
    this.tree = this.nodeList.pop();
    delete this.nodeList;
    // console.log(this.tree);
  }

  moveToParentNode(nodeName) {
    let index;
    let currentElement = this.nodeList.find( (node, i) => {
      if (node.name === nodeName) {
        index = i;
        return true;
      };
      return false;
    })
    this.nodeList.splice(index, 1);
    currentElement.setParentTo(this.nodeList[index - 1].name);
    this.nodeList[index - 1].children.push(currentElement);
  }

  addToParent(component) {
    const treeNode = new TreeNode(component.constructor.name);
    const parent = parentComponent(component);
    let parentNode = this.tree.recursiveSearch(parent);

    treeNode.setParentTo(parent);
    parentNode.children.push(treeNode);
    this.nodeIsComponent[component.constructor.name] = true;
  }

  removeFromTree(nodeName) {
    debugger;
    const child = this.tree.recursiveSearch(nodeName);
    const parent = this.tree.recursiveSearch(child.parent);

    const index = parent.children.findIndex((treeNode) => treeNode.name === nodeName);

    parent.children.splice(index, 1);
    delete this.nodeIsComponent[nodeName];
  }
}

export default new State();
