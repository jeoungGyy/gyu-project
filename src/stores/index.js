import CommonStore from './common';
import PostStore from './post';
import MovieStore from './movie';
import ClockStore from './clock';
import WeatherStore from './weather';
import Gold from './gold';
import Lotto from './lotto';
import Mask from './mask';

class RootStore {
  constructor() {
    this.common = new CommonStore(this);
    this.clock = new ClockStore(this);
    this.post = new PostStore(this);
    this.movie = new MovieStore(this);
    this.weather = new WeatherStore(this);
    this.gold = new Gold(this);
    this.lotto = new Lotto(this);
    this.mask = new Mask(this);
  }
}

export default RootStore;
