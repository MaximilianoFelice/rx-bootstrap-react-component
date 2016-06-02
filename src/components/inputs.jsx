import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import {getData, propagable, propagableObsevable} from '../helpers';
import Label from './label';

export class InputField extends RxReact.Component {
  constructor(props){
    super(props);
    this.parentSubject = new Rx.Subject();
    this.childrenObservable = this.props.observeOn.merge(this.parentSubject);
  }

  componentDidMount(){
    this.parentSubject.onNext({data: {labelProps: this.props.labelProps, inputProps: this.props.inputProps}})
  }

  static defaultProps = { observeOn: new Rx.Subject(), publishOn: new Rx.Subject() }
  
  getStateStream(){ return this.props.observeOn.map(getData) }

  render(){return (
    <div>
      <Label observeOn={propagableObsevable(this.childrenObservable, 'labelProps')} />
      <Input observeOn={propagableObsevable(this.childrenObservable, 'inputProps')} />
    </div>
  )}
}

export class Input extends RxReact.Component {
  static defaultProps = { observeOn: new Rx.Subject(), publishOn: new Rx.Subject() }
  
  getStateStream(){ return this.props.observeOn.map(getData) }

  render(){return (
    <input {...propagable(this.props, this.state)} />
  )}
}