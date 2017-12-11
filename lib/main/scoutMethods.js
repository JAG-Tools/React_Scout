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
  getDefaultProps() {
    console.log('component Will Receive Props', this.constructor.name, this.state, this.props)
  }
};

export default scoutCycle;
