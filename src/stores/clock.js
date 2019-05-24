import { observable, action } from 'mobx';

export default class clock {
  @observable date = new Date();

  constructor(root) {
    this.root = root;
    this.setIntervalTime(); // 임시
  }

  @action
  setIntervalTime = () => {
    this.date = new Date();
  };
}
