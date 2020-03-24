import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import ReactSVG from '../../images/react_logo.svg';
import './MaskItem.scss';

@inject('mask')
@observer
class MaskItem extends Component {
  delayPageMask = pageName => {
    const {
      history: { push }
    } = this.props;
    const { common } = this.props.mask.root;
    common.loadingDelay(push, pageName);
  };

  render() {
    const { delayPageMask } = this;

    return (
      <li className="mask">
        <Link
          to={{
            pathname: ''
          }}
          onClick={() => delayPageMask('mask')}
        >
          <div className="box">
            <div className="round left">
              <img src={ReactSVG} alt="React Logo" />
            </div>
            <div className="round right">
              <img
                src={require('../../images/movie_openapi.png')}
                alt="Open API"
              />
            </div>
          </div>
          <div className="summary">
            <div className="line">
              <p className="t">공적 마스크 재고 확인</p>
              <p className="u">ReactApp, 공공데이터 Open API</p>
              <p className="s">2020.03.11</p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default MaskItem;
