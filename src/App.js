import React from 'react';
import './App.css';
import { fabric } from 'fabric'

export default class Canvas extends React.Component {

  componentDidMount() {
    const canvas = document.getElementById('c');
    const fabricCanvas = new fabric.Canvas(canvas, { width: 1024, height: 1024, backgroundColor: '#C6CDD5' });
    var rect = new fabric.Rect({
      top: 0,
      left: 0,
      width: 100,
      height: 200,
      fill: 'red'
    });
    fabricCanvas.add(rect);
  }

  render() {
    return (
      <div className='bcContainer'>
        <canvas className='c' id='c' />
      </div>
    )
  }
}
