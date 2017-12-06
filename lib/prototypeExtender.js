import scoutMethods from './main/scoutMethods';
import wrapper from './wrappers/method';

export default function (constructor) {

  const {
    // getDefaultProps, getInitialState, componentWillReceiveProps,
    /* shouldComponentUpdate, */ componentWillMount, componentDidMount,
    /* componentWillUpdate, componentDidUpdate, */ componentWillUnmount,
    // render
  } = constructor.prototype;

  constructor.prototype
    .componentWillMount = wrapper(componentWillMount, scoutMethods.componentWillMount);

  constructor.prototype
    .componentDidMount = wrapper(componentDidMount, scoutMethods.componentDidMount);

  constructor.prototype
    .componentWillUnmount = wrapper(componentWillUnmount, scoutMethods.componentWillUnmount);

  return constructor;
}
