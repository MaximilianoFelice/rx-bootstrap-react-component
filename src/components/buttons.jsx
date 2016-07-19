import React from 'react';
import Rx from 'rx';
import {propagable} from '../helpers';
var FuncSubject = require('rx-react').FuncSubject;

export default class Button extends React.Component {

  constructor(props){
    super(props);

    this.buttonClicked = FuncSubject.create();
    this.buttonClicked.subscribe(this.props.onClick);
  }

  static defaultProps = {
    onClick: event => console.log(`I was clicked, but I had no default behaviour. I'm: ${event.target}`),
    className: "",
    as: "default"
  }

  content() { return this.props.text || this.props.children }

  render() {
    return (
      <button {...propagable(this.props, this.state, ["as", "text"])} 
        className={`btn ${this.props.className} btn-${this.props.as}`} 
        onClick={this.buttonClicked} 
        type={this.props.type} 
      >
        {this.content()}
      </button>
    )
  }
};