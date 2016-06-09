import RxReact from 'rx-react';
import Rx from 'rx';
import deepAssign from 'deep-assign';

export default class BaseComponent extends RxReact.Component {
  static get defaultProps() {
    return {
      observeOn: new Rx.Subject(),
      publishOn: new Rx.Subject()
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.state = deepAssign({}, this.props)
  }

  getStateStream() { return this.props.observeOn; }
}
