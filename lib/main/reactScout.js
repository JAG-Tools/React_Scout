// Hard coded for now: meant for when this is copied over to react folder
import React from '../../cjs/react.development.js';
import wrapConstructor from '../wrappers/constructor';

const scoutComponent = wrapConstructor(React.Component);

React.Component = scoutComponent;

export default React;
export { scoutComponent as Component };
