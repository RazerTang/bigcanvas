import React from 'react';
import './App.css';
import BigCanvas from './canvas'
import ToolBox from './toolbox'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.selectedIndex = 0
  }

  componentDidMount() {
    //{ 'canvas':canvas } 不行?
    this.bc = new BigCanvas('canvas');

    document.addEventListener('keydown', event => {
      //屏蔽浏览器响应空格键的默认行为
      if (event.which === 32) {
        event.preventDefault();
        event.stopPropagation();
      }
    });

    //阻止触控板的放大缩小
    //设置passive = true
    //event.deltaY 放大为负 缩小为正
    window.addEventListener('mousewheel', event => {
      if (event.ctrlKey === true) {
        event.preventDefault();
        event.stopPropagation();
        this.bc.zoom(event);
      }
    }, { passive: false });

    //右键
    window.addEventListener('contextmenu', event => {
      event.preventDefault();
      event.stopPropagation();
      this.bc.rightClick(event);
    });

    this.setState({
      canvas: this.bc,
    });
  }

  render() {
    return (
      <div className='container'>
        <canvas className='canvas' id='canvas' />
        <ToolBox className='toolbox' id='toolbox' currentPostColor={this.bc ? this.bc.currentPostColor : ''} onClick={(index, color) => {
          this.bc.currentPostColor = color;
          this.setState({
            canvas: this.bc,
          });
        }} />
      </div>
    )
  }
}
