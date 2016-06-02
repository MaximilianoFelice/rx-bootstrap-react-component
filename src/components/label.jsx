import React from 'react';

export default class Label extends React.Component{
  render(){
    return <span>{this.props.text}</span>
  }
}