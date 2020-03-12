import React from 'react';
import './App.css';
import BigCanvas from './canvas'

export default class App extends React.Component {

  componentDidMount() {
    //{ 'canvas':canvas } 不行?
    let bc = new BigCanvas('mycanvas');

    document.addEventListener('keydown', (function (event) {
      //屏蔽浏览器响应空格键的默认行为
      if (event.which === 32) {
        event.preventDefault();
        event.stopPropagation();
      }
    }));

    //阻止触控板的放大缩小
    //设置passive = true
    //event.deltaY 放大为负 缩小为正
    window.addEventListener('mousewheel', event => {
      if (event.ctrlKey === true) {
        event.preventDefault();
        event.stopPropagation();
        bc.zoom(event);
      }
    }, { passive: false });
  }

  render() {
    return (
      <div className="container">
        <canvas className="mycanvas" id="mycanvas" ></canvas>
      </div>
    )
  }
}
