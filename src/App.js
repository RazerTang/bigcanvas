import React from 'react';
import './App.css';
import { fabric } from 'fabric'
import Post from './Post.js'

export default class Canvas extends React.Component {

  componentDidMount() {
    const canvas = document.getElementById('c');
    const fabricCanvas = new fabric.Canvas(canvas, { width: 1024, height: 1024, backgroundColor: '#C6CDD5' });


    fabric.util.addListener(document.body, 'keydown', function (options) {
      if (options.repeat) {
        return;
      }
      var key = options.which || options.keyCode; // key detection
      if (key === 8) {
        fabricCanvas.remove(fabricCanvas.getActiveObject());
      }
    });

    fabricCanvas.on('mouse:dblclick', (e) => {
      if (!e.target) {
        var rect = new Post(e.pointer);
        fabricCanvas.add(rect);
        fabricCanvas.setActiveObject(rect);
      } else {
      }
    });
  }

  render() {
    return (
      <div className='bcContainer'>
        <canvas className='c' id='c' />
      </div>
    )
  }
}
