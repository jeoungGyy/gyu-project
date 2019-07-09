import { observable } from 'mobx';

export default class clock {
  @observable date = new Date();

  constructor(root) {
    this.root = root;
    // this.setIntervalTime();
  }

  // @action
  // setIntervalTime = () => {
  //   setInterval(() => {
  //     this.date = new Date();
  //   }, 1000);
  // };
}
