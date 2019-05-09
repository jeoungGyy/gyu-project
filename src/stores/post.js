import { observable } from 'mobx';

export default class PostStore {
  @observable postValue = 1;

  constructor(root) {
    this.root = root;
  }
}
