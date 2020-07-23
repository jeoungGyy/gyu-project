import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import ReactSVG from '../../images/react_logo.svg';

@inject('button')
@observer
class buttonItem extends Component {
  delayPageMask = (pageName) => {
    const {
      history: { push },
    } = this.props;
    const { common } = this.props.button.root;
    common.loadingDelay(push, pageName);
  };

  render() {
    const { delayPageMask } = this;

    return (
      <li className="mask">
        <Link
          to={{
            pathname: '',
          }}
          onClick={() => delayPageMask('button')}
        >
          <div className="box">
            <div className="img">
              <img src={require('../../images/project_img9.png')} alt="" />
              <div className="round">
                <img src={ReactSVG} alt="React Logo" />
              </div>
            </div>
            <div className="summary">
              <div className="line">
                <p className="t">CSS/SVG Buttons</p>
                <p className="u">ReactApp</p>
                <p className="s">2020.06.16</p>
              </div>
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default buttonItem;
