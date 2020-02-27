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
      let hasActivedObject = false;
      var key = options.which || options.keyCode; // key detection

      //active object可能是选中的Post or 正在输入的TextBox
      const ao = fabricCanvas.getActiveObject();
      if (ao) {
        hasActivedObject = true;
        const post = fabricCanvas.getActiveObject().data;
        if (post) {
          post.active();
        }
      }
      if (hasActivedObject) {
        return;
      }

      //在文字编辑状态是不能删除post
      if (key === 8) {
        fabricCanvas.remove(fabricCanvas.getActiveObject());
      }
    });

    fabricCanvas.on('mouse:dblclick', (e) => {
      if (!e.target) {
        var post = new Post({ x: e.pointer.x, y: e.pointer.y, canvas: fabricCanvas });
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
