import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import InputAnimation from './inputAnimation/InputAnimation';
import AnimationCheckbox from './animationCheckbox/AnimationCheckbox';
import HoverBtn from './hoverBtn/HoverBtn';
import AnimationBtn from './animationBtn/AnimationBtn';
import Colors from './colors/Colors';
import BoxAnimation from './boxAnimation/BoxAnimation';
import CustomRadio from './customRadio/CustomRadio';
import Emoticon from './emoticon/Emoticon';

import './Page.scss';

@inject('capturing')
@observer
class Page extends Component {
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
      <Router>
        <div className="CapturingPage">
          <header>
            <h1>Modern Style</h1>
            <div className="lists">
              <Link to="/capturing/">인풋 애니메이션</Link>
              <Link to="/capturing/animationCheckbox">애니메이션 체크박스</Link>
              <Link to="/capturing/hoverBtn">버튼:hover</Link>
              <Link to="/capturing/animationBtn">애니메이션 버튼</Link>
              <Link to="/capturing/colors">색상표</Link>
              <Link to="/capturing/boxAnimation">박스 애니메이션</Link>
              <Link to="/capturing/customRadio">커스텀 라디오</Link>
              <Link to="/capturing/emoticon">애니메이션 이모티콘</Link>
            </div>

            <Link
              to={{
                pathname: '',
              }}
              onClick={(e) => delayPageCapturing('', e)}
            >
              메인
            </Link>
          </header>
          <main>
            <Switch>
              <Route exact path="/capturing/" component={InputAnimation} />
              <Route
                path="/capturing/animationCheckbox"
                component={AnimationCheckbox}
              />
              <Route path="/capturing/hoverBtn" component={HoverBtn} />
              <Route path="/capturing/animationBtn" component={AnimationBtn} />
              <Route path="/capturing/colors" component={Colors} />
              <Route path="/capturing/boxAnimation" component={BoxAnimation} />
              <Route path="/capturing/customRadio" component={CustomRadio} />
              <Route path="/capturing/emoticon" component={Emoticon} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default Page;
