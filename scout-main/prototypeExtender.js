import scoutMethods from './scoutMethods';

function wrapper(...args) {
  return function() {
    args.forEach( method => {
      if (method) method.apply(this);
    });
  }
}

export default function(constructor) {
  const {
    // getDefaultProps, getInitialState, componentWillReceiveProps,
    /*shouldComponentUpdate,*/ componentWillReceiveProps, componentWillMount, componentDidMount,
    /* componentWillUpdate, componentDidUpdate,*/ componentWillUnmount,
    // render
  } = constructor.prototype;

  constructor.prototype.componentWillMount = wrapper(componentWillMount, scoutMethods.componentWillMount);
  constructor.prototype.componentDidMount = wrapper(componentDidMount, scoutMethods.componentDidMount);
  constructor.prototype.componentWillUnmount = wrapper(componentWillUnmount, scoutMethods.componentWillUnmount);
 constructor.prototype.componentWillReceiveProps = wrapper(componentWillReceiveProps, scoutMethods.componentWillReceiveProps);
  return constructor;
};
