import CommonStore from './common';
import PostStore from './post';
import MovieStore from './movie';
import ClockStore from './clock';
import WeatherStore from './weather';

class RootStore {
  constructor() {
    this.common = new CommonStore(this);
    this.clock = new ClockStore(this);
    this.post = new PostStore(this);
    this.movie = new MovieStore(this);
    this.weather = new WeatherStore(this);
  }
}

export default RootStore;
