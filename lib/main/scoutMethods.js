import state from '../stateClass';
import React from '../../cjs/react.development.js';

const sm = {
  componentWillReceiveProps(nextProps) {
    if (!nextProps) return;
    state.updateProps(this, nextProps);
  },
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

export default sm;
