import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import {without} from '../helpers';
import {InputField, Label} from '../index';

export default class Input extends RxReact.Component {
  static defaultProps = { observeOn: new Rx.Subject(), publishOn: new Rx.Subject() }
  
  getStateStream(){ return this.props.observeOn.map(x => x.data) }

  render(){return (
    <div>
      <Label text={this.props.labelText} />
      <InputField {...without("labelText", Object.assign({}, this.props, this.state) )} />
    </div>
  )}
}