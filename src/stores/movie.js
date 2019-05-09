import { observable } from 'mobx';

export default class MoveStore {
  @observable moveValue = 1;

  constructor(root) {
    this.root = root;
  }
}
