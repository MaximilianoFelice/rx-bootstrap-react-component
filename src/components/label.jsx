import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';

export default class Label extends RxReact.Component{
  constructor(props){
    super(props);
    this.state = this.props;
  }
  static defaultProps = {observeOn: new Rx.Subject()}

  getStateStream(){ return this.props.observeOn; }

  render(){
    return <span>{this.state.text}</span>
  }
}
