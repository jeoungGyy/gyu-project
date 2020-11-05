import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import ReactSVG from '../../images/react_logo.svg';

@inject('capturing')
@observer
class Item extends Component {
  delayPageCapturing = (pageName) => {
    const {
      history: { push },
    } = this.props;
    const { common } = this.props.capturing.root;
    common.loadingDelay(push, pageName);
  };

  render() {
    const { delayPageCapturing } = this;

    return (
      <li className="mask">
        <Link
          to={{
            pathname: '',
          }}
          onClick={() => delayPageCapturing('capturing')}
        >
          <div className="box">
            <div className="img">
              <img src={require('../../images/project_img10.png')} alt="" />
              <div className="round">
                <img src={ReactSVG} alt="React Logo" />
              </div>
            </div>
            <div className="summary">
              <div className="line">
                <p className="t">모던 스타일 갈무리</p>
                <p className="u">ReactApp</p>
                <p className="s">2020.10.14</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default Item;
