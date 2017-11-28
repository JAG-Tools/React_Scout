import React from 'react';
import wrapper from './scout-wrapper';

const scoutComponent = wrapper(React.Component);

React.Component = scoutComponent;

export default React;

export { scoutComponent as Component };
