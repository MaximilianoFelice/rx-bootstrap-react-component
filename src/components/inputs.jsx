import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';

export default class Input extends RxReact.Component {
  static defaultProps = {
    observeOn: "hola"
  }
  
  getStateStream(){ return this.props.observeOn }

  render() {
    return (
      <div className="input">
        Element
      </div>
    )
  }
}