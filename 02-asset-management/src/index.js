import _ from 'lodash';
import "./asset/style.css";//导入style
import beauty from "./asset/beauty.png";//导入图片

function component() {
  var element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
  //使用style
  element.classList.add("hello");

  //使用图片
  let myImage = new Image();
  myImage.src = beauty;
  element.appendChild(myImage);//插入到div中

  return element;
}
document.body.appendChild(component());