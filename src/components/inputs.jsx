import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import {without} from '../helpers';

export default class Input extends RxReact.Component {
  static defaultProps = { observeOn: new Rx.Subject(), publishOn: new Rx.Subject() }
  
  getStateStream(){ return this.props.observeOn.map(x => x.data) }

  render(){return (
    <input {...without('observeOn', 'publishOn', Object.assign({}, this.props, this.state))} />
  )}
}