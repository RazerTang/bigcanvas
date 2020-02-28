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

      //active object可能是选中的Post or 正在输入的TextBox
      //需要区分ao是group还是textbox
      //1.选择group，按delete键则删除
      //2.选择的是textbox,按delte键则是删除文字
      const ao = fabricCanvas.getActiveObject();
      if (ao) {
        const type = ao.get('type');
        console.log(type);
        if (type === 'textbox') {
          //直接触发文本框的编辑,开始输入文字
        } else if (type === 'group') {
          //删除group
          if (key === 8) {
            fabricCanvas.remove(ao);
          }
          //触发文本框的编辑，开始输入文字
          else {
            const post = ao.data;
            post.active();
          }
        } else if (type === 'activeSelection') {
          if (key === 8) {
            fabricCanvas.getActiveObjects().forEach((obj) => {
              fabricCanvas.remove(obj)
            });
          }
        }
      }
    });

    fabricCanvas.on('mouse:dblclick', (e) => {
      if (!e.target) {
        new Post({ x: e.pointer.x, y: e.pointer.y, canvas: fabricCanvas });
      } else {
      }
    });

    //选择的时候会误判进入这个状态，导致post的背景色设置不上
    //TODO 
    fabricCanvas.on({
      'object:moving': function (e) {
        e.target.opacity = 0.5;
        console.log('moving');
      },
      'object:modified': function (e) {
        e.target.opacity = 1;
        console.log('modified');
      }
    });
  }

  render() {
    return (
      <div className='bcContainer' >
        <canvas className='c' id='c' />
      </div>
    )
  }
}
