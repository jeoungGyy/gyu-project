import PostStore from './post';
import MovieStore from './movie';

class RootStore {
  constructor() {
    this.post = new PostStore(this);
    this.movie = new MovieStore(this);
  }
}

export default RootStore;
