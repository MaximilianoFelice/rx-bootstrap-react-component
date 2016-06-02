import React from 'react';
import RxReact from 'rx-react';

export default class Label extends RxReact.Component{

  getStateStream(){ return this.props.observeOn.map(getData) }

  render(){
    return <span>{this.state.text}</span>
  }
}