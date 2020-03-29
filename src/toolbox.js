import React from 'react';
import './App.css';

class ToolBoxItem extends React.Component {
    render() {
        return (
            <div className='toolbox-attr' style={this.props.style} onClick={() => this.props.onClick && this.props.onClick(this.props.index, this.props.attrColor)}>
                {this.props.currentPostColor === this.props.attrColor ? <input className='toolbox-checkbox' type='checkbox' checked /> : null}
            </div>
        )
    }
}

export default class ToolBox extends React.Component {
    render() {
        return (
            <div className='toolbox-container'>
                <ToolBoxItem {...this.props} style={{ backgroundColor: '#FFF09A' }} index={0} attrColor='#FFF09A' />
                <ToolBoxItem {...this.props} style={{ backgroundColor: '#FF968D' }} index={1} attrColor='#FF968D' />
                <ToolBoxItem {...this.props} style={{ backgroundColor: '#C4F9F4' }} index={2} attrColor='#C4F9F4' />
                <ToolBoxItem {...this.props} style={{ backgroundColor: '#B191E6' }} index={3} attrColor='#B191E6' />
            </div>
        );
    }
};
