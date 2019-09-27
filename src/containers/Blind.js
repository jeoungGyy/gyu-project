import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './Blind.scss';

@inject('common')
@observer
class Blind extends Component {
  render() {
    const { loading, random, randomColor } = this.props.common.root.common;

    return (
      <div className="blind">
        <div
          className={`move ${random} ${loading && 'active'} ${randomColor}`}
        />
      </div>
    );
  }
}

export default Blind;
