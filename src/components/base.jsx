import RxReact from 'rx-react';
import Rx from 'rx';

export default class BaseComponent extends RxReact.Component {
  static defaultProps = {
    observeOn: new Rx.Subject(),
    publishOn: new Rx.Subject()
  };

  getStateStream() { return this.props.observeOn; }
}
