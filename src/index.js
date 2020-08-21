import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());