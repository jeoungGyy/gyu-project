import React, { Component } from 'react';
import MaskMap from './MaskMap';
import './MaskPage.scss';

class MaskPage extends Component {
  render() {
    return (
      <div className="MaskPage">
        <MaskMap />
      </div>
    );
  }
}

export default MaskPage;
