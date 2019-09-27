import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import GoldPageChart from './GoldPageChart';
import GoldPageBuy from './GoldPageBuy';
import GoldPageSell from './GoldPageSell';
import GoldPageSearch from './GoldPageSearch';
import GoldCalculator from './GoldCalculator';
import './GoldPage.scss';

@inject('gold')
@observer
class GoldPage extends Component {
  delayPageMove = (pageName, e) => {
    e.preventDefault();
    const {
      history: { push }
    } = this.props;
    const { common } = this.props.gold.root;
    common.loadingDelay(push, pageName);
  };

  // 날짜
  handleEndDay = value => {
    const { gold } = this.props;
    gold.actEndDay(value);
  };
  handleDaySearch = value => {
    const { gold } = this.props;
    gold.actDaySearch();
  };

  // 금시세 계산
  handleGoldValue = e => {
    const { gold } = this.props;
    gold.actGoldValue(e.target.value);
  };
  handleBuyGoldValue = e => {
    const { gold } = this.props;
    gold.actBuyGoldValue(e.target.value);
  };
  handleGoldToggleTrue = () => {
    const { gold } = this.props;
    gold.actGoldToggleTrue();
  };

  render() {
    const {
      delayPageMove,
      handleEndDay,
      handleDaySearch,
      handleGoldValue,
      handleBuyGoldValue,
      handleGoldToggleTrue
    } = this;
    const { gold } = this.props;

    const buyList = gold.goldBuy.map((info, index) => {
      return (
        <GoldPageBuy
          key={index}
          date={info.date}
          g24k_b={info.g24k_b}
          g24k_b_ch={info.g24k_b_ch}
        />
      );
    });

    const sellList = gold.goldSell.map((info, index) => {
      return (
        <GoldPageSell
          key={index}
          date={info.date}
          g24k_s={info.g24k_s}
          g18k_s={info.g18k_s}
          g14k_s={info.g14k_s}
          g24k_s_ch={info.g24k_s_ch}
          g18k_s_ch={info.g18k_s_ch}
          g14k_s_ch={info.g14k_s_ch}
        />
      );
    });

    const goldBuy = String(gold.todayBuySise).replace(
      /(\d)(?=(?:\d{3})+(?!\d))/g,
      '$1,'
    );
    const goldSell = String(gold.todaySellSise).replace(
      /(\d)(?=(?:\d{3})+(?!\d))/g,
      '$1,'
    );

    return (
      <div className="GoldPage">
        <h2>금 시세표</h2>

        <GoldPageSearch
          onEndDay={handleEndDay}
          onDaySearch={handleDaySearch}
          onGoldToggleTrue={handleGoldToggleTrue}
        />
        <GoldCalculator
          onGoldValue={handleGoldValue}
          onBuyGoldValue={handleBuyGoldValue}
          onGoldToggleTrue={handleGoldToggleTrue}
          marginGoldValue={gold.marginGoldValue}
          buyTotal={gold.buyTotal}
          sellTotal={gold.sellTotal}
          marginSellTotal={gold.marginSellTotal}
          calculatorToggle={gold.calculatorToggle}
        />

        <div className="sise">
          <div className="sise_left">
            <p className="st">순금 살때</p>
            <p className="sb">
              {goldBuy}
              <span>원</span>
            </p>
          </div>
          <div className="sise_right">
            <p className="st">순금 팔때</p>
            <p className="sb">
              {goldSell}
              <span>원</span>
            </p>
          </div>
        </div>
        <GoldPageChart
          onDate={gold.goldChart.date}
          onBuy={gold.goldChart.g24k_b}
          onSell={gold.goldChart.g24k_s}
        />

        <p className="right">단위: 원, 3.75g(1돈)</p>

        <div className="glist">
          <div className="gleft">
            <h4>살때</h4>
            <ul>{buyList}</ul>
          </div>
          <div className="gright">
            <h4>팔때</h4>
            <ul>{sellList}</ul>
          </div>
        </div>

        <div className="home_btn">
          <p>
            자료제공:{' '}
            <a
              href="http://www.koreagoldx.co.kr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              한국금거래소
            </a>
          </p>
          <Link
            to={{
              pathname: ''
            }}
            onClick={e => delayPageMove('', e)}
          >
            메인
          </Link>
        </div>
      </div>
    );
  }
}

export default GoldPage;
