import { observable } from 'mobx';

export default class ExchangeStore {
  @observable test = [];

  constructor(root) {
    this.root = root;
  }
}
