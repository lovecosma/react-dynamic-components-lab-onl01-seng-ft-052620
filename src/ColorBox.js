import React, { Component } from 'react';

export default class ColorBox extends Component {

  numberOfCalls = 0
  
  state = {
    todos: [
      
    ]
  }

  render() {
    if (this.props.opacity >= 0.2){
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )}
      else {
        return null
      }
  
  }
}

