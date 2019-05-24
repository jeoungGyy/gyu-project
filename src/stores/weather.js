import { observable } from 'mobx';
// import * as api from '../lib/api';

export default class weather {
  @observable selectedItems = [
    {
      baseDate: 20190514,
      baseTime: '0800',
      category: 'POP',
      fcstValue: 10,
      fcstTime: 1200,
      nx: 61,
      ny: 126
    },
    {
      baseDate: 20190514,
      baseTime: '0800',
      category: 'PTY',
      fcstValue: 1200,
      fcstTime: 1200,
      nx: 61,
      ny: 126
    },
    {
      baseDate: 20190514,
      baseTime: '0800',
      category: 'R06',
      fcstValue: 0,
      fcstTime: 1200,
      nx: 61,
      ny: 126
    },
    {
      baseDate: 20190514,
      baseTime: '0800',
      category: 'REH',
      fcstValue: 40,
      fcstTime: 1200,
      nx: 61,
      ny: 126
    },
    {
      baseDate: 20190514,
      baseTime: '0800',
      category: 'S06',
      fcstValue: 0,
      fcstTime: 1200,
      nx: 61,
      ny: 126
    },
    {
      baseDate: 20190514,
      baseTime: '0800',
      category: 'SKY',
      fcstValue: 2,
      fcstTime: 1200,
      nx: 61,
      ny: 126
    },
    {
      baseDate: 20190514,
      baseTime: '0800',
      category: 'T3H',
      fcstValue: 23,
      fcstTime: 1200,
      nx: 61,
      ny: 126
    },
    {
      baseDate: 20190514,
      baseTime: '0800',
      category: 'UUU',
      fcstValue: 0.1,
      fcstTime: 1200,
      nx: 61,
      ny: 126
    },
    {
      baseDate: 20190514,
      baseTime: '0800',
      category: 'VEC',
      fcstValue: 1200,
      fcstTime: 1200,
      nx: 61,
      ny: 126
    },
    {
      baseDate: 20190514,
      baseTime: '0800',
      category: 'VVV',
      fcstValue: 0.8,
      fcstTime: 1200,
      nx: 61,
      ny: 126
    }
  ];

  constructor(root) {
    this.root = root;
  }

  // @action
  // weatherList = async () => {
  //   const { date } = this.root.clock;
  //   const dateMMMM = date
  //     .toISOString()
  //     .substr(0, 10)
  //     .replace(/-/gi, '');
  //   const dateHH = date.getHours();

  //   try {
  //     const response = await api.weatherData(dateMMMM, dateHH);
  //     const data = response.data.response.body.items.item;
  //     this.selectedItems = this.selectedItems.concat(...data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
}
