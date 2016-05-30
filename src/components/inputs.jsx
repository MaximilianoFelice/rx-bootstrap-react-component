import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';


export default class Input extends RxReact.Component {
  constructor(props){
    super(props);
    this.props.observeOn.do(console.log).subscribe(x => this.props.publishOn.onNext(x))
  }

  static defaultProps = { observeOn: new Rx.Subject(), publishOn: new Rx.Subject() }
  
  getStateStream(){ return this.props.observeOn.map(x => x.data) }

  renderProps(){
    var {observeOn, publishOn, ...others} = this.props;
    return others;
  }

  render(){return (
    <input {...this.renderProps()} />
  )}
}