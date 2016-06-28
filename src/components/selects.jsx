import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import BaseComponent from './base';
import {isDefined, getData, propagable, propagableObsevable} from '../helpers';
import {UserEditableField} from "./inputs";

export class SelectField extends UserEditableField {
  renderField(){
    return(
      <Select observeOn={this.inputObs} {...this.state.inputProps}>
        {this.props.children}
      </Select>
    )
  }
}

export class Select extends BaseComponent {
  render(){return (
    <select {...propagable(this.props, this.state)}>
      {this.props.children}
    </select>
  )}
}