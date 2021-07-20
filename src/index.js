// import print from './print';
// import _ from 'lodash';
import './style.css';
// import { cube } from './math';

function component(){

  let ele = document.createElement('div');
  // ele.innerText = '5 cubed is equal to ' + cube(5);
  ele.innerText = `we are in ${process.env.NODE_ENV} mode!`;
  // ele.onclick = print;

  return ele;
}

// if(module.hot){
//   module.hot.accept('./print.js', function(){
//     console.log('Accept the updated printMe module!')
//     print()
//   })
// }

document.body.appendChild(component());