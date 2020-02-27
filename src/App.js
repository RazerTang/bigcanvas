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

      if (fabricCanvas.getActiveObject()) {
        const post = fabricCanvas.getActiveObject().data;
        if (post) {
          post.active();
        }
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
    // fabricCanvas.getActiveObject().toGroup();

    // fabricCanvas.on({
    //   'touch:gesture': function () {
    //   },
    //   'touch:drag': function () {
    //     alert('move');
    //   },
    //   'touch:orientation': function () {
    //   },
    //   'touch:shake': function () {
    //   },
    //   'touch:longpress': function () {
    //   }
    // });

    // fabricCanvas.on('mouse:up', (e) => {
    //   alert('up');
    // });


    // let textbox = new fabric.Textbox('Lorum ipsum dolor sit amet', {
    //   left: 50,
    //   top: 50,
    //   width: 150,
    //   fontSize: 20
    // });
    // let group = new fabric.Group([textbox]);
    // fabricCanvas.add(group);
  }


  render() {
    return (
      <div className='bcContainer'>
        <canvas className='c' id='c' />
      </div>
    )
  }
}
