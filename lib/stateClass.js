import TreeNode from './treeNodeClass';
import getComponentNode from './nodeFinder';
import getNodeParentName from './nodeParentFinder';
import postTree from './connect/serverPost';

class State {
  constructor() {
    this.tree = null;
    this.nodeList = [];
    this.nodeIsComponent = {};
  }

  pushToList(component) {
    const { name } = component.constructor;

    if (this.nodeList || !this.tree) {
      this.nodeList.push(new TreeNode(name));
      this.nodeIsComponent[name] = true;
    }
  }

  buildTree(component) {
    const thisNode = getComponentNode(component);

    if (!thisNode.className.toLowerCase().includes('react-scout-')) {
      thisNode.className += ` react-scout-${component.constructor.name}`;
    }

    if (this.tree === null) {
      if (this.nodeList.length === 1) {
        this.tree = this.nodeList.pop();
        delete this.nodeList;
      } else {
        this.nodeListToTree(component);
      }
    } else {
      this.addToParent(component);
    }

    postTree(this.three);
  }

  nodeListToTree(component) {
    let index;
    const currentNode = this.nodeList.find((node, i) => {
      if (node.name === component.constructor.name) {
        index = i;
        return true;
      }
      return false;
    });

    this.nodeList.splice(index, 1);

    currentNode.setParentName(this.nodeList[index - 1].name);
    this.nodeList[index - 1].children.push(currentNode);
  }

  addToParent(component) {
    const DOMNode = getComponentNode(component);
    const parentName = getNodeParentName(DOMNode);
    const parentNode = this.tree.recursiveSearch(parentName);
    const { name } = component.constructor;
    const treeNode = new TreeNode(name);

    treeNode.setParentName(parentName);
    parentNode.children.push(treeNode);
    this.nodeIsComponent[name] = true;
    postTree(this.tree);
  }

  removeFromTree(component) {
    const { name } = component.constructor;
    const child = this.tree.recursiveSearch(name);
    const parentNode = this.tree.recursiveSearch(child.parent);

    const index = parentNode.children.findIndex(node => node.name === name);

    parentNode.children.splice(index, 1);
    delete this.nodeIsComponent[name];
    postTree(this.tree);
  }
}

export default new State();
