import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './Blind.scss';

@inject('common')
@observer
class Blind extends Component {
  render() {
    const { loading } = this.props.common.root.common;
    return (
      <div className="blind">
        <div className={`move ${loading && 'active'}`} />
      </div>
    );
  }
}

export default Blind;
