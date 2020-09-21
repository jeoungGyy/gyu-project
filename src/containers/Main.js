import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Masonry from 'react-masonry-component';
import Header from './Header';
import WeatherItem from '../components/weather/WeatherItem';
import {
  FreeFonts,
  TimeLine,
  CardHistory,
  PublishV2,
  PublishV1,
} from '../components/linkpage';
import MovieItem from '../components/movie/MovieItem';
import GoldItem from '../components/gold/GoldItem';
import LottoItem from '../components/lotto/LottoItem';
import MaskItem from '../components/mask/MaskItem';
import ButtonItem from '../components/button/ButtonItem';
import TodoItem from '../components/todo/TodoItem';
import './Main.scss';

@inject('common')
@observer
class Main extends Component {
  componentDidMount() {
    setTimeout(() => this.loadingFalse(), 400);
  }
  componentDidUpdate(prevProps, prevState) {
    window.onpopstate = () => {
      let pathname = this.props.history.location.pathname.substring(1);
      const {
        history: { push },
      } = this.props;
      const { common } = this.props.common.root;
      common.loadingDelay(push, pathname);
    };
    setTimeout(() => this.loadingFalse(), 400);
  }

  loadingFalse() {
    const { common } = this.props.common.root;
    common.loading = false;
  }

  render() {
    const masonryOptions = {
      transitionDuration: 200,
      columnWidth: 250,
      gutter: 10,
      initLayout: false,
    };

    return (
      <div className="Main">
        <div>
          <Header />
          <section className="contents">
            <Masonry
              className={'list'} // default ''
              elementType={'ul'} // default 'div'
              options={masonryOptions} // default {}
            >
              <WeatherItem />
              <FreeFonts />
              <TodoItem history={this.props.history} />
              <MovieItem history={this.props.history} />
              <GoldItem history={this.props.history} />
              <ButtonItem history={this.props.history} />
              <LottoItem history={this.props.history} />
              <MaskItem history={this.props.history} />
              <TimeLine />
              <CardHistory />
              <PublishV2 />
              <PublishV1 />
            </Masonry>
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
