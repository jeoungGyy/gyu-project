import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import ReactSVG from '../../images/react_logo.svg';
import './GoldItem.scss';

@inject('gold')
@observer
class GoldItem extends Component {
  delayPageMove = pageName => {
    const {
      history: { push }
    } = this.props;
    const { common } = this.props.gold.root;
    common.loadingDelay(push, pageName);
  };

  render() {
    const { delayPageMove } = this;
    const { gold } = this.props;

    const todayGoldBuySise = String(gold.todayBuySise).replace(
      /(\d)(?=(?:\d{3})+(?!\d))/g,
      '$1,'
    );
    const todayGoldBuyPrep = (
      <span className="small">
        ({' '}
        {gold.todayBuySisePrep > 0 ? (
          <span className="red">▲</span>
        ) : gold.todayBuySisePrep < 0 ? (
          <span className="blue">▼</span>
        ) : (
          <span className="etc">-</span>
        )}{' '}
        {gold.todayBuySisePrep})
      </span>
    );
    const todayGoldSellSise = String(gold.todaySellSise).replace(
      /(\d)(?=(?:\d{3})+(?!\d))/g,
      '$1,'
    );

    return (
      <li className="gold">
        <div className="box">
          <p className="title">순금 시세</p>
          <p className="ts">Gold 24K 3.75g</p>
          <div className="table_box">
            <table>
              <colgroup>
                <col className="col" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>살때</th>
                  <td>
                    {todayGoldBuySise}원 {todayGoldBuyPrep}
                  </td>
                </tr>
                <tr>
                  <th>팔때</th>
                  <td>{todayGoldSellSise}원</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="round left">
            <img src={ReactSVG} alt="React Logo" />
          </div>
        </div>

        <Link
          to={{
            pathname: ''
          }}
          onClick={() => delayPageMove('gold')}
        >
          <div className="summary">
            <div className="line">
              <p className="t">한국금거래소 금시세표</p>
              <p className="u">ReactApp, 한국금거래소</p>
              <p className="s">2019.07.24</p>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default GoldItem;
