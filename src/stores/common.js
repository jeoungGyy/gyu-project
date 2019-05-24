import { observable, action } from 'mobx';

export default class common {
  @observable page = false;
  @observable loading = false;
  @observable subLoading = false;

  constructor(root) {
    this.root = root;
  }

  @action
  loadingDelay = (push, pageName) => {
    this.loading = true;
    setTimeout(() => {
      push('/' + pageName);
      this.loading = false;
    }, 400);
  };
}
