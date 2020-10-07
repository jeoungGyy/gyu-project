import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@inject('exchange')
@observer
class ExchangeItem extends Component {
  delayPageMove = (pageName) => {
    const {
      history: { push },
    } = this.props;
    const { common } = this.props.exchange.root;
    common.loadingDelay(push, pageName);
  };

  render() {
    const { delayPageMove } = this;

    return (
      <li className="exchange">
        <Link
          to={{
            pathname: '',
          }}
          onClick={() => delayPageMove('exchange')}
        >
          파일 업로드 테스트
        </Link>
      </li>
    );
  }
}

export default ExchangeItem;
