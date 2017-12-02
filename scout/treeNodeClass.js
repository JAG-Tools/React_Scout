export default class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  setParentName(parent) {
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
