import { observable, action } from 'mobx';

export default class common {
  @observable page = false;
  @observable loading = false;
  @observable subLoading = false;
  @observable random = '';
  @observable randomColor = '';

  constructor(root) {
    this.root = root;
    this.radomPage();
  }

  @action
  loadingDelay = (push, pageName) => {
    this.radomPage();
    this.loading = true;

    setTimeout(() => {
      push('/' + pageName);
      // this.loading = false;
    }, 400);
  };

  @action
  radomPage = () => {
    const name = ['a', 'b'];
    const nameChoice = Math.floor(Math.random() * name.length);
    const bgColr = ['red', 'blue', 'yellow', 'green', 'purple', 'gray'];
    const bgColrChoice = Math.floor(Math.random() * bgColr.length);
    this.random = name[nameChoice];
    this.randomColor = bgColr[bgColrChoice];
  };
}
