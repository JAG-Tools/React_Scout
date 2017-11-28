import state from './State';
import Client from './react-scout-client';
import Tag from './scout-element-tagger';

Client.add(state);

const scoutCycle = {
  // getDefaultProps: function() {

  // },
  // getInitialState: function() {

  // },
  // componentWillReceiveProps: function() {

  // },
  // shouldComponentUpdate: function() {

  // },
  componentWillMount: function() {
    if (state.nodeListLength() || state.treeEmpty) {
      state.pushToList(this.constructor.name);
    }
  },
  componentDidMount: function() {
    Tag(this);

    if (state.treeEmpty) {
      if (state.nodeListLength() === 1) {
        state.makeTree();
      } else {
        state.moveToParentNode(this.constructor.name);
      }
    } else {
      state.addToParent(this);
    }
    console.log(JSON.stringify(state.tree));
  },
  // componentWillUpdate: function() {

  // },
  // componentDidUpdate: function() {

  // },
  // render: function() {

  // },
  componentWillUnmount: function() {
    state.removeFromTree(this.constructor.name);
  }
}

export default scoutCycle;