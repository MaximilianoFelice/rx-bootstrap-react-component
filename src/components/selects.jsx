import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import BaseComponent from './base';
import {isDefined, getData, propagable, propagableObsevable} from '../helpers';

export class Select extends BaseComponent {
  static defaultProps = { observeOn: new Rx.Subject(), publishOn: new Rx.Subject() }

  render(){return (
    <select {...propagable(this.props, this.state)}>
      {this.props.children}
    </select>
  )}
}