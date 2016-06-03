import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import {isDefined, getData, propagable, propagableObsevable} from '../helpers';
import Label from './label';

export class InputField extends RxReact.Component {
  constructor(props){
    super(props);
    this.parentSubject = new Rx.Subject();
    var aux = this.parentSubject.merge(this.props.observeOn);
    this.childrenObservable = aux;
    this.labelObs = aux.do(console.log).map(x => x.data[field]).filter(isDefined).map(x => {data: x});
    // this.labelObs = propagableObsevable(this.childrenObservable, 'labelProps').do(x => console.log(x))
    this.inputObs = propagableObsevable(this.childrenObservable, 'inputProps');
  }

  componentDidMount(){
    this.parentSubject.onNext({data: {labelProps: this.props.labelProps, inputProps: this.props.inputProps}})
  }

  static defaultProps = { observeOn: new Rx.Subject(), publishOn: new Rx.Subject() }
  
  getStateStream(){ return this.props.observeOn.map(getData) }

  render(){return (
    <div>
      <Label observeOn={this.labelObs} />
      <Input observeOn={this.inputObs} />
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