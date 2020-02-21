import React from 'react';
import './App.css';

export default class Canvas extends React.Component {
  componentDidMount() {
    const canvas = this.refs.bigcanvas
  }
  render() {
    return (
      <div className='bcContainer'>
        <canvas className='bigcanvas' id='bigcanvas' ref="bigcanvas" />
      </div>
    )
  }
}
