import wrapper from './scout-lifecycle-wrapper-function';
import scoutCycle from './scout-scoutCycle';

export default function(constructor) {
  const {
    // getDefaultProps, getInitialState, componentWillReceiveProps,
    /*shouldComponentUpdate,*/ componentWillMount, componentDidMount,
    /* componentWillUpdate, componentDidUpdate,*/ componentWillUnmount,
    // render
  } = constructor.prototype;

  constructor.prototype.componentWillMount = wrapper(componentWillMount, scoutCycle.componentWillMount);
  constructor.prototype.componentDidMount = wrapper(componentDidMount, scoutCycle.componentDidMount);
  constructor.prototype.componentWillUnmount = wrapper(componentWillUnmount, scoutCycle.componentWillUnmount);

  return constructor;
};
