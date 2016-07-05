import React from 'react';
import Rx from 'rx';
import RxReact from 'rx-react';
import BaseComponent from "./base";

export class Tab extends BaseComponent {

  constructor(props){
    super(props)
    this.state.errors = false
  }

  componentWillMount(){
    super.componentWillMount()
    
    this.props.observeErrorsOn && 
    this.props.observeErrorsOn
      .subscribe( x => this.setState({errors: !(x === undefined || x === null)}) )
  }

  errorClassName(){
    return this.state.errors ? "error-tab" : ""
  }

  className(){
    return `tab-pane ${this.props.active && "active"} ${this.props.paneClassName} ${this.errorClassName()}`
  }

  render(){
    return(
      <div className={this.className()}>
        {this.props.children}
      </div>
    )
  }
}

export class Tabs extends BaseComponent {
  constructor(props) {
    super(props);

    this.state.tabs = this.props.children;

    this.state.activeTab =
      this.state.tabs.find(c => c.props.active) ||
      this.state.tabs[0];

    if(this.props.observeTransitionsOn) {
      this.props.observeTransitionsOn
        .filter( e => e.name === "previousTab" )
        .subscribe( _ => this.moveTabBackwards())

      this.props.observeTransitionsOn
        .filter( e => e.name === "nextTab" )
        .subscribe( _ => this.moveTabForwards())
    }
  }

  moveTabForwards(){
    this._moveTab(1)
  }

  moveTabBackwards(){
    this._moveTab(-1)
  }

  _moveTab(units){
    const activeIndex = this.state.tabs.findIndex( tab => tab === this.state.activeTab )
    this.setState({activeTab: this.state.tabs[activeIndex + units]})
  }

  _renderNav() {
    if (!this.state.tabs) return;

    return (
      <ul className={`nav nav-tabs ${this.props.className}`}>
        {this.state.tabs.map((t, i) =>
          this._renderNavLink(t, i)
        )}
      </ul>
    )
  }

  _renderNavLink(tab, i) {
    return ( 
      <li
        key={`tabs-nav-link-${i}-${tab.props.name}`}
        className={`${this.state.activeTab === tab && "active"} ${tab.props.className}`}>
        <a
          onClick={_ => this.setState({activeTab: tab})}
          style={{cursor: "pointer"}}>
            {tab.props.name}
        </a>
      </li>
    )
  }

  render() {
    return (
      <div>
        {this._renderNav()}

        <div className={`tab-content ${this.props.paneClassName}`}>
          {this.state.tabs.map( tab => {
            return React.cloneElement(tab, {active: tab == this.state.activeTab, key: tab.props.name})
          })}
        </div>
      </div>
    );
  }
}
