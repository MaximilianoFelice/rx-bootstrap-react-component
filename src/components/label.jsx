import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import {getData} from '../helpers';

export default class Label extends RxReact.Component{
  constructor(props){
    super(props);
    this.state = this.props;
  }
  static defaultProps = {observeOn: new Rx.Subject()}

  getStateStream(){ return this.props.observeOn.map(getData) }

  render(){
    return <span>{this.state.text}</span>
  }
}