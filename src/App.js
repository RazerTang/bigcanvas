import React from 'react';
import './App.css';
import BigCanvas from './canvas'

export default class App extends React.Component {

  componentDidMount() {
    //{ 'canvas':canvas } 不行?
    let bc = new BigCanvas('mycanvas');

    document.addEventListener('keydown', (function (event) {
      //mac metaKey
      //pc ctrKey
      if (event.metaKey === true) {
        event.preventDefault();
        if (event.which === 187) {
          bc.zoomOut();
        } else if (event.which === 189) {
          bc.zoomIn();
        }
      }
    }));

    //阻止触控板的放大缩小
    //设置passive = true
    //event.deltaY 放大为负 缩小为正
    window.addEventListener('mousewheel', event => {
      if (event.ctrlKey === true) {
        event.preventDefault()
        bc.zoom(event);
      }
    }, { passive: false });
  }

  render() {
    return (
      <div class="container">
        <canvas id="mycanvas" ></canvas>
      </div>
    )
  }
}
