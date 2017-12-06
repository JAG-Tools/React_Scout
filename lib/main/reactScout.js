import React from 'react';
import wrapConstructor from '../wrappers/constructor'; // actual wrapper for React.Component constructor

const scoutComponent = wrapConstructor(React.Component);

React.Component = scoutComponent;

export default React;

export { scoutComponent as Component };
