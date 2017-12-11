import ReactDOM from 'react-dom';

export default function getComponentNode(component) {
  return ReactDOM.findDOMNode(component);
  // Find alternative to findDOMNode => research Ref
  // https://github.com/yannickcr/eslint-plugin-react/issues/678
  // http://www.react.express/refs_and_the_dom
}
