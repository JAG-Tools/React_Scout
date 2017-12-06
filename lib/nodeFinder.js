import ReactDOM from 'react-dom';

export default function getComponentNode(component) {
  return ReactDOM.findDOMNode(component); // Find alternative to findDOMNode => research Ref
}
