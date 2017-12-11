const parentPattern = /react-scout-(\w+)/;
let parent;

function findParentNode(e) {
  for (let i = 1; i < e.path.length; i += 1) {
    if (e.path[i].className.includes('react-scout-')) {
      [, parent] = parentPattern.exec(e.path[i].className);
      break;
    }
  }
}

export default function getNodeParentName(element) {
  element.addEventListener('click', findParentNode);
  element.click();
  element.removeEventListener('click', findParentNode);

  return parent;
}
