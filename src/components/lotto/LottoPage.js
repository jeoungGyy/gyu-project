import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import LottoNumber from './LottoNumber';
import LottoMap from './LottoMap';
import './LottoPage.scss';

@inject('lotto')
@observer
class LottoPage extends Component {
  delayPageLotto = pageName => {
    const {
      history: { push }
    } = this.props;
    console.log(push);
    const { common } = this.props.lotto.root;
    common.loadingDelay(push, pageName);
  };

  handleRoundSelect = e => {
    const { lotto } = this.props;
    const value = e.target.value;
    lotto.actRoundSelect(value);
  };
  handleRoundSearch = () => {
    const { lotto } = this.props;
    lotto.actLottoNumber();
  };

  render() {
    const { delayPageLotto, handleRoundSelect, handleRoundSearch } = this;
    const { lotto } = this.props;
    const { subLoading } = this.props.lotto.root.common;

    const lottoNumber = lotto.lottoNumber;

    return (
      <div className="LottoPage">
        <LottoNumber
          onLottoNumber={lottoNumber}
          onDelayPageLotto={delayPageLotto}
          onLottoRound={lotto.lottoRound}
          onRoundSelect={handleRoundSelect}
          onRoundSearch={handleRoundSearch}
        />
        <LottoMap />

        {subLoading && (
          <div className="spinner_area">
            <div className="spinner" />
          </div>
        )}

        <div className="home_btn"></div>
      </div>
    );
  }
}

export default LottoPage;
