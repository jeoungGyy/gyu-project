import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Masonry from 'react-masonry-component';
import Header from './Header';
import WeatherItem from '../components/weather/WeatherItem';
import {
  FreeFonts,
  TimeLine,
  CardHistory,
  Todo,
  PublishV2,
  PublishV1
} from '../components/linkpage';
import MovieItem from '../components/movie/MovieItem';
import GoldItem from '../components/gold/GoldItem';
import LottoItem from '../components/lotto/LottoItem';
import './Main.scss';

@inject('common')
@observer
class Main extends Component {
  render() {
    const masonryOptions = {
      transitionDuration: 200,
      columnWidth: 250,
      gutter: 10,
      initLayout: false
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
              <MovieItem history={this.props.history} />
              <GoldItem history={this.props.history} />
              <LottoItem history={this.props.history} />
              <TimeLine />
              <CardHistory />
              <Todo />
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
