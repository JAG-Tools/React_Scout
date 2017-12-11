import React from 'react';
import constructorWrapper from './constructorWrapper'; // actual wrapper for React.Component constructor

const scoutComponent = constructorWrapper(React.Component);

React.Component = scoutComponent;

export default React;

export { scoutComponent as Component };
