import React from 'react';
import Rx from 'rx';
import ProgressButton from 'react-progress-button';
import {propagable} from '../helpers';
import BaseComponent from './base';
import Waypoint from 'react-waypoint';
var FuncSubject = require('rx-react').FuncSubject;

export class Button extends React.Component {

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


export class ButtonLoader extends BaseComponent{
  constructor(props){
    super(props)
    this.state.buttonRefName = this._buttonRandomRef()
  }

  componentWillMount(){
    super.componentWillMount()
    
    this.props.observeOn &&
    this.props.observeOn
      .filter( x => x.action === "change" )
      .subscribe( x => this.setState({buttonState: x.content}, () => this.fireAnimation(x.content)) )
  }

  _buttonRandomRef(){
    return `buttonLoader-${this._randomNumber()}`
  }

  _randomNumber(){
    return Math.floor(Math.random()*10000)
  }

  fireAnimation(animation){
    this.refs[this.state.buttonRefName][animation]()
  }

  render(){
    return(
      <ProgressButton 
        {...propagable(this.props, {})}
        ref={this.state.buttonRefName}
      >
        {this.props.children}
      </ProgressButton>
    )
  }
}

export class InfiniteScrollButton extends ButtonLoader{
  
  _isButtonClickeable(){
    return this.state.buttonState !== "loading" && this.state.buttonState !== "disable"
  }

  fireButtonClick = () => {
    if(!this._isButtonClickeable()) return;
    this.fireAnimation("loading")
    this.props.onClick()
  }

  render(){
    return(
      <div>
        {super.render()}
        <Waypoint 
          onEnter={this.fireButtonClick} 
          key={`waypoint-${this._randomNumber()}`} 
          fireOnRapidScroll={false} />
      </div>
    )
  }
}