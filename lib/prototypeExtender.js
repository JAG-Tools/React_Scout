import scoutMethods from './main/scoutMethods';
import wrapper from './wrappers/method';

export default function (constructor) {
  const newConstructor = Object.create(constructor.prototype, constructor);

  const {
    // getDefaultProps, getInitialState, componentWillReceiveProps,
    /* shouldComponentUpdate, */ componentWillMount, componentDidMount,
    /* componentWillUpdate, componentDidUpdate, */ componentWillUnmount,
    // render
  } = constructor.prototype;

  newConstructor.prototype
    .componentWillMount = wrapper(componentWillMount, scoutMethods.componentWillMount);

  newConstructor.prototype
    .componentDidMount = wrapper(componentDidMount, scoutMethods.componentDidMount);

  newConstructor.prototype
    .componentWillUnmount = wrapper(componentWillUnmount, scoutMethods.componentWillUnmount);

  return newConstructor;
}
