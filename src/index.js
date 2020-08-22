import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）
    element.innerHTML = _.join(['Hello 你好', 'webpack'], ' ');
    element.classList.add('hello');
  
    // 将图像添加到我们已经存在的 div 中
    const myIcon = new Image();
    myIcon.src = Icon;
    // element.appendChild(myIcon);

    return element;
  }

  function component2() {
    const element = document.createElement('div');
  
    // lodash（目前通过一个 script 引入）
    element.innerHTML = _.join(['Hello 你好 㗉㱘关闭昂面', 'webpack'], ' ');
    element.classList.add('hello2');
  
    // 将图像添加到我们已经存在的 div 中
    const myIcon = new Image();
    myIcon.src = Icon;
    // element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());
  document.body.appendChild(component2());