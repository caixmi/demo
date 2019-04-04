import { cube } from './math';

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack',
    '5 cubed is equal to ' + cube(5)
  ].json('\n\n');

  return element;
}

document.body.appendChild(component());
