let JSONfn;
if (!JSONfn) {
  JSONfn = {};
}

(function () {
  JSONfn.stringify = function(obj) {
    if (Array.isArray(obj)){
      return obj.map(e => JSONfn.stringify(e));
    }

    if (typeof obj === 'function') {
      return obj.toString();
    }

    return JSON.stringify(obj);
  };

  // JSONfn.parse = function(str) {
  //   return JSON.parse(str, (key, value) => {
  //     if (typeof value !== 'string') return value;
  //     return (value.substring(0, 8) === 'function') ? eval(`(${value})`) : value;
  //   });
  // };
}());


export default class TreeNode {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.props = {};
  }

  addProps(pObj) {
    this.props = {};
    const entries = Object.entries(pObj);
    for (let i = 0; i < entries.length; i += 1) {
      if (!pObj.hasOwnProperty(entries[i][0])) continue;
      this.props[entries[i][0]] = JSONfn.stringify(entries[i][1]);
    }
  }

  setParentName(parent) {
    this.parent = parent;
  }

  recursiveSearch(name) {
    if (this.name === name) return this;
    let result;

    for (let i = 0; i < this.children.length; i += 1) {
      const check = this.children[i].recursiveSearch(name);
      if (check !== null) {
        result = check;
        break;
      }
    }
    return result || null;
  }
}

