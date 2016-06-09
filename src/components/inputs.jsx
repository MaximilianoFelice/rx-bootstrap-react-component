import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
//import {isDefined, getData, propagable, propagableObsevable} from '../helpers';
import {isDefined} from '../helpers';
import Label from './label';
import BaseComponent from "./base";

export class InputField extends BaseComponent {
  constructor(props){
    super(props);

    this.labelObs =
      this.props.observeOn
        .map(state => state && state.labelProps)
        .merge(new Rx.BehaviorSubject(this.state.labelProps))
        .filter(isDefined);

    this.inputObs =
      this.props.observeOn
        .map(state => state && state.inputProps)
        .merge(new Rx.BehaviorSubject(this.state.inputProps))
        .filter(isDefined);

    this.errorsObs =
      this.props.observeOn
        .map(state => state.errors)
        .merge(new Rx.BehaviorSubject(this.state.errors))
        .filter(isDefined)
        .map(errors => { return {errors} })
  }

  render() {
    return (
      <div>
        <Label observeOn={this.labelObs}/>
        <Input observeOn={this.inputObs}/>
        <InputErrors observeOn={this.errorsObs}/>
      </div>
    )
  }
}

export class Input extends BaseComponent {
  render() { return <input{...this.state}/>; }
}

export class InputErrors extends BaseComponent {
  renderErrorMessage(str, i) {
    return (
      <span 
        key={`error-message-${i}`}
        className="help-block"
      >{str}</span>
    );
  }

  render() {
    const errors =
      isDefined(this.state.errors) &&
      this.state.errors.map(this.renderErrorMessage);

    return <div>{errors}</div>;
  }
}
