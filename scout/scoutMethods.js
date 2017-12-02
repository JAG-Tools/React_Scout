import state from './stateClass';

const scoutCycle = {
  componentWillMount: function() {
    state.pushToList(this);
  },
  componentDidMount: function() {
    state.buildTree(this)
    // Client.pushToServer();
  },
  componentWillUnmount: function() {
    state.removeFromTree(this);
  }
}

export default scoutCycle;