import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './LottoItem.scss';
import ReactSVG from '../../images/react_logo.svg';

@inject('lotto')
@observer
class LottoItem extends Component {
  delayPageLotto = pageName => {
    const {
      history: { push }
    } = this.props;
    const { common } = this.props.lotto.root;
    common.loadingDelay(push, pageName);
  };

  render() {
    const { delayPageLotto } = this;

    return (
      <li className="lotto">
        <Link
          to={{
            pathname: ''
          }}
          onClick={() => delayPageLotto('lotto')}
        >
          <div className="img">
            <img src={require('../../images/project_img7.png')} alt="" />
            <div className="round">
              <img src={ReactSVG} alt="React Logo" />
            </div>
          </div>
          <div className="summary">
            <div className="line">
              <p className="t">로또 명당</p>
              <p className="u">ReactApp, 동행복권</p>
              <p className="s">2019.09.30</p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default LottoItem;
