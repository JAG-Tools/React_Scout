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
  },

  componentWillReceiveProps: function() {
     console.log('component Will Receive Props', this.constructor.name, this.state, this.props)
  }
}

export default scoutCycle;