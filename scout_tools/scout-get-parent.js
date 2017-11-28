import ReactDOM from 'react-dom';
const getParent = /react-scout-(\w+)/;
let parent;

function clickHandler(e) {
  
  for (let i = 1;i < e.path.length  ; i += 1) {
    if (e.path[i].className.includes('react-scout-')) {
      parent = getParent.exec(e.path[i].className)[1];
      break;
    }
  }
}

function parentComponent(component) {
  const element = ReactDOM.findDOMNode(component);
  element.addEventListener('click', clickHandler);
  element.click();
  element.removeEventListener('click', clickHandler);
  return parent
}

export default parentComponent;