import state from '../stateClass';

const scoutCycle = {
  componentWillMount() {
    state.pushToList(this);
  },
  componentDidMount() {
    state.buildTree(this);
  },
  componentWillUnmount() {
    state.removeFromTree(this);
  },
};

export default scoutCycle;
