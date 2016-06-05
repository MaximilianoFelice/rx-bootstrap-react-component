import RxReact from 'rx-react';
import Rx from 'rx';

export default class BaseComponent extends RxReact.Component {
  static defaultProps = {
    observeOn: new Rx.Subject(),
    publishOn: new Rx.Subject()
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.state = this.props
  }

  getStateStream() { return this.props.observeOn; }
}
