import CommonStore from './common';
import TodoStore from './todo';
import MovieStore from './movie';
import ClockStore from './clock';
import WeatherStore from './weather';
import Gold from './gold';
import Lotto from './lotto';
import Mask from './mask';
import Exchange from './exchange';
import Capturing from './capturing';

class RootStore {
  constructor() {
    this.common = new CommonStore(this);
    this.clock = new ClockStore(this);
    this.todo = new TodoStore(this);
    this.movie = new MovieStore(this);
    this.weather = new WeatherStore(this);
    this.gold = new Gold(this);
    this.lotto = new Lotto(this);
    this.mask = new Mask(this);
    this.exchange = new Exchange(this);
    this.capturing = new Capturing(this);
  }
}

export default RootStore;
