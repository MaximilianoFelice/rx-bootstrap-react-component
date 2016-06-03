import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import {isDefined, getData, propagable, propagableObsevable} from '../helpers';
import Label from './label';

export class InputField extends RxReact.Component {
  static defaultProps = {
    observeOn: new Rx.Subject(),
    publishOn: new Rx.Subject()
  }

  constructor(props){
    super(props);

    this.parentSubject = new Rx.Subject();
    this.childrenObservable = this.parentSubject.merge(this.props.observeOn);

    this.labelObs = this.childrenObservable.map(x => { return { data: x.data.labelProps }});
    this.inputObs = this.childrenObservable.map(x => { return { data: x.data.inputProps }});

    //this.labelObs = this.childrenObservable.map(getData).map(x =<)
    //this.labelObs = propagableObsevable(this.childrenObservable, 'labelProps').do(x => console.log(x))
    //this.inputObs = propagableObsevable(this.childrenObservable, 'inputProps');
  }

  componentDidMount(){
    this.parentSubject.onNext({data: {
      labelProps: this.props.labelProps,
      inputProps: this.props.inputProps
    }})
  }
  
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
