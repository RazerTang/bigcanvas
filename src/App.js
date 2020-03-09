import React from 'react';
import './App.css';
import BigCanvas from './canvas'

export default class App extends React.Component {

  componentDidMount() {
    const canvas = document.getElementById('c');
    const container = document.getElementById('bcContainer');
    //{ 'canvas':canvas } 不行?
    let bc = new BigCanvas(canvas);

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
      }
    }, { passive: false });
  }

  render() {
    return (
      <div className='bcContainer' id='bcContainer' >
        <canvas className='c' id='c' />
      </div>
    )
  }
}
