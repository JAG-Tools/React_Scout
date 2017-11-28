import ReactDOM from 'react-dom';

export default function(component) {
  const thisNode = ReactDOM.findDOMNode(component);

  if (!thisNode.className.toLowerCase().includes('react-scout-')) {
    thisNode.className += ' react-scout-' + component.constructor.name;
  }
}