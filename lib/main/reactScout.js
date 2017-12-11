import React from '../../cjs/react.development.js';// meant for when this is moved to react folder
import wrapConstructor from '../wrappers/constructor';

const scoutComponent = wrapConstructor(React.Component);

React.Component = scoutComponent;

export default React;
export { scoutComponent as Component };
