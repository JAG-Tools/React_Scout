import sm from './main/scoutMethods';
import wrapper from './wrappers/method';

export default function (constructor) {
  const {
    componentWillReceiveProps, // getInitialState, shouldComponentUpdate,
    componentWillMount, componentDidMount, componentWillUnmount,
    /* componentWillUpdate, componentDidUpdate, render, */
  } = constructor.prototype;

  constructor
    .prototype
    .componentWillReceiveProps = wrapper(componentWillReceiveProps, sm.componentWillReceiveProps);

  constructor
    .prototype
    .componentWillMount = wrapper(componentWillMount, sm.componentWillMount);

  constructor
    .prototype
    .componentDidMount = wrapper(componentDidMount, sm.componentDidMount);

  constructor
    .prototype
    .componentWillUnmount = wrapper(componentWillUnmount, sm.componentWillUnmount);

  return constructor;
}
