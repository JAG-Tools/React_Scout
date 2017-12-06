import state from '../stateClass';

const scoutCycle = {
  componentWillMount() {
    state.pushToList(this);
  },
  componentDidMount() {
    state.buildTree(this);
    // Client.pushToServer();
  },
  componentWillUnmount() {
    state.removeFromTree(this);
  },
};

export default scoutCycle;
