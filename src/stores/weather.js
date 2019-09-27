import { observable, action } from 'mobx';
import * as api from '../lib/api';

export default class weather {
  @observable selectedItems = [];

  constructor(root) {
    this.root = root;
    // this.weatherList();
  }

  @action
  weatherList = async () => {
    const { date } = this.root.clock;
    const dateMMMM = date
      .toISOString()
      .substr(0, 10)
      .replace(/-/gi, '');
    const dateHH = date.getHours();

    try {
      const response = await api.weatherData(dateMMMM, dateHH);
      const data = response.data.response.body.items.item;
      this.selectedItems = this.selectedItems.concat(...data);
    } catch (e) {
      console.log(e);
    }
  };
}
