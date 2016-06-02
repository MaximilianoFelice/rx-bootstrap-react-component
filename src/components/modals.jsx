import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rx';
var StateStreamMixin = require('rx-react').StateStreamMixin;

export default class Modal extends React.Component {

  static propTypes = {
    header: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),
    body: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),
    footer: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string])
  }

  getStateStream(){ return this.props.observeOn }

  componentWillMount = StateStreamMixin.componentWillMount

  componentWillUnMount = StateStreamMixin.componentWillUnMount

  componentDidMount() { this.props.observeOn.subscribe(_ => $(ReactDOM.findDOMNode(this.refs.ModalName)).modal()) }

  header(){ if(this.state && this.state.header) return <ModalHeader text={this.state.header()} /> }

  body(){ if(this.state && this.state.body) return <ModalBody>{this.state.body()}</ModalBody> }

  footer(){ if(this.state && this.state.footer) return <ModalFooter /> }

  render() { return (
      <div className="modal fade" tabindex="-1" role="dialog" ref="ModalName">
        <div className="modal-dialog">
          <div className="modal-content">
            {this.header()}
            {this.body()}
            {this.footer()}
          </div>
        </div>
      </div>
    )
  }
}

export class ModalHeader extends React.Component{
  render() {
    return (
      <div className="ModalHeader modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title">{this.props.text}</h4>
      </div>
    )
  }
}

export class ModalBody extends React.Component{
  render() {
    return (
      <div className="ModalBody modal-body">
        {this.props.children}
      </div>
    )
  }
}

export class ModalFooter extends React.Component{
  render() {
    return (
      <div className="ModalFooter modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    )
  }
}