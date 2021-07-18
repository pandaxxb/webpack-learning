import print from './print';
import _ from 'lodash';
import './style.css';

function component(){

  let ele = document.createElement('button');
  ele.innerText = 'Click me and check the console';
  ele.onclick = print;

  return ele;
}

if(module.hot){
  module.hot.accept('./print.js', function(){
    console.log('Accept the updated printMe module!')
    print()
  })
}

document.body.appendChild(component());