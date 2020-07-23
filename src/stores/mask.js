import { observable, action } from 'mobx';
// import * as api from '../lib/api';
import dataList from '../lib/mask.json';

export default class ExchangeStore {
  @observable.ref maskList = [];
  @observable changeHa = 37.51126602153574;
  @observable changeGa = 127.04823318422497;
  @observable inputChoice = '';

  constructor(root) {
    this.root = root;

    this.actMaskList();
  }

  @action
  actMaskList = async () => {
    try {
      // const response = await api.maskNumber(this.changeHa, this.changeGa);
      // const data = response.data;
      // this.maskList = data.stores;
      this.maskList = dataList;
    } catch (e) {
      console.log(e);
    }
  };

  // @action
  // actAddrChange = async (ha, ga) => {
  //   try {
  //     this.maskList = [];
  //     const response = await api.maskNumber(ha, ga);
  //     const data = await response.data;

  //     this.changeGa = ga;
  //     this.changeHa = ha;
  //     this.maskList = data.stores;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // @action
  // actInputChoice = (value) => {
  //   this.inputChoice = value;
  // };
}
