import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import Label from './label';
import BaseComponent from "./base";
import UserEditableField from "./inputs";

export class TextareaField extends UserEditableField {
  renderField(){
    return(<Textarea observeOn={this.inputObs} {...this.state.inputProps}/>)
  }
}

export class Textarea extends BaseComponent {
  render() {
    return(
      <textarea className={this.state.className || "form-control"} {...this.state}>
        {this.state.content || this.props.children}
      </textarea>
    )
  }
}