import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rx';
import RxReact from 'rx-react';
import BaseComponent from './base';

export default class Modal extends BaseComponent {
  constructor(props){
    super(props);
    this.state.eventStream = new Rx.Subject();
  }

  static propTypes = {
    header: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),
    body: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string]),
    footer: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.string])
  }

  componentDidMount() {
    this.props.observeOn.subscribe(() => this.triggerEvent())
  }

  componentDidUpdate() {
    this.state.eventStream
      .filter(x => x.type == "event")
      .subscribe(x => this.triggerEvent(x.name))
  }

  triggerEvent(e = 'show'){
    $(ReactDOM.findDOMNode(this.refs.ModalName)).modal(e)
  }

  header(){ if(this.state && this.state.header) return <ModalHeader text={this.state.header()} /> }

  body(){ if(this.state && this.state.body) return <ModalBody>{this.state.body()}</ModalBody> }

  footer(){ if(this.state && this.state.footer) return <ModalFooter>{this.state.footer()}</ModalFooter> }

  render() { return (
      <div className="modal fade" tabIndex="-1" role="dialog" ref="ModalName">
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
        {this.props.children}
      </div>
    )
  }
}
