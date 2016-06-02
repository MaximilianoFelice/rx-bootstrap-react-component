import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import {propagable, without} from '../helpers';
import Label from './label';

export class InputField extends RxReact.Component {
  constructor(props){
    super(props);
    this.state = {labelText: this.props.labelText}
  }

  static defaultProps = { observeOn: new Rx.Subject(), publishOn: new Rx.Subject() }
  
  getStateStream(){ return this.props.observeOn.map(x => x.data) }

  render(){return (
    <div>
      <Label text={this.state.labelText} />
      <Input {...without("labelText", Object.assign({}, this.props, this.state) )} />
    </div>
  )}
}

export class Input extends RxReact.Component {
  static defaultProps = { observeOn: new Rx.Subject(), publishOn: new Rx.Subject() }
  
  getStateStream(){ return this.props.observeOn.map(x => x.data) }

  render(){return (
    <input {...propagable(this.props, this.state)} />
  )}
}