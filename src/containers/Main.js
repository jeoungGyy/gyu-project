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
import './Main.scss';

@inject('common')
@observer
class Main extends Component {
  // componentDidMount() {
  //   const { common } = this.props;
  //   console.log(common.root.common.loading);
  // }

  delayMovie = () => {
    const {
      history: { push }
    } = this.props;
    const { common } = this.props;
    common.loadingDelay(push);
    // push('/movie');
    // setTimeout(() => push('/movie'), 1000);

    // const { common } = this.props;
    // const { loading } = this.props.common.root.common;

    // if (!loading) {
    //   common.loadingDelay();
    // } else {
    //   console.log('22');
    // }
  };

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
              <TimeLine />
              <CardHistory />
              <Todo />
              <PublishV2 />
              <PublishV1 />

              <li>11111</li>
            </Masonry>
          </section>
        </div>
      </div>
    );
  }
}

export default Main;
