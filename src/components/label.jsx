import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import BaseComponent from './base';

export default class Label extends BaseComponent{
  render() {
    return <label>{this.state.text}</label>;
  }
}
