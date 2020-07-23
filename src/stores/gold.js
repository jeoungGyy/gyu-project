import { observable, action, computed } from 'mobx';
import * as api from '../lib/api';

export default class goldStore {
  @observable date = new Date();
  @observable.ref goldChart = []; //API 원본 - 차트에 사용
  @observable goldBuy = []; //살때 시세 - 데이터 뿌리는 값
  @observable goldSell = []; //팔때 시세 - 데이터 뿌리는 값
  @observable endDay = undefined; // 날짜 선택한 곳에 사용
  @observable dayScope = 20; // 시세 뿌려지는 개수
  @observable todayBuySise = null; //오늘 순금 살때 가격 - 그람 계산기 및 그날 가격이 필요한 곳에 사용
  @observable todaySellSise = null; //오늘 순금 팔때 가격 - 그람 계산기 및 그날 가격이 필요한 곳에 사용
  @observable todayBuySisePrep = null; //오늘 순금 살때 차익
  @observable calculatorToggle = false; //그람 계산기 토글
  @observable buyGoldValue = null; //그람 계산기 사고,팔떄 인풋 벨류
  @observable marginGoldValue = null; //그람 계산기 차익 인풋 벨류

  constructor(root) {
    this.root = root;

    this.actGoldList();
  }

  @action
  actGoldList = async () => {
    try {
      this.root.common.loading = true;

      const response = await api.goldSise(this.endDay, this.dayScope);
      const data = response.data.date.map((info) => ({
        date: info,
      }));
      const g24k_b = response.data.g24k_b.map((info) => ({ g24k_b: info }));
      const g24k_b_ch = response.data.g24k_b_ch.map((info, index) => ({
        ...data[index],
        ...g24k_b[index],
        g24k_b_ch: info,
      }));

      const g24k_s = response.data.g24k_s.map((info) => ({ g24k_s: info }));
      const g18k_s = response.data.g18k_s.map((info) => ({ g18k_s: info }));
      const g14k_s = response.data.g14k_s.map((info) => ({ g14k_s: info }));
      const g24k_s_ch = response.data.g24k_s_ch.map((info) => ({
        g24k_s_ch: info,
      }));
      const g18k_s_ch = response.data.g18k_s_ch.map((info) => ({
        g18k_s_ch: info,
      }));
      const g14k_s_ch = response.data.g14k_s_ch.map((info, index) => ({
        ...data[index],
        ...g24k_s[index],
        ...g18k_s[index],
        ...g14k_s[index],
        ...g24k_s_ch[index],
        ...g18k_s_ch[index],
        g14k_s_ch: info,
      }));

      this.goldBuy = g24k_b_ch;
      this.goldSell = g14k_s_ch;
      this.goldChart = response.data;
      this.todayBuySise === null && (this.todayBuySise = g24k_b[0].g24k_b);
      this.todaySellSise === null && (this.todaySellSise = g24k_s[0].g24k_s);
      this.todayBuySisePrep = g24k_b_ch[0].g24k_b_ch;

      this.root.common.loading = false;
    } catch (e) {
      console.log(e);
    }
  };

  @action
  actEndDay = (value) => {
    const endDay = value.toISOString().substr(0, 10).replace(/-/gi, '');
    const endDayNumber = Number(endDay);
    this.endDay = endDayNumber;
  };
  @action
  actDaySearch = () => {
    this.dayScope = 150;
    this.actGoldList();
    this.root.common.loading = false;
  };

  @action
  actGoldToggleTrue = () => {
    this.calculatorToggle = !this.calculatorToggle;
  };
  @action
  actGoldValue = (value) => {
    value ? (this.buyGoldValue = parseInt(value)) : (this.buyGoldValue = 0);
  };
  @action
  actBuyGoldValue = (value) => {
    this.marginGoldValue = value;
  };

  @computed
  get buyTotal() {
    return (this.buyGoldValue * this.todayBuySise) / 3.75;
  }
  @computed
  get sellTotal() {
    return (this.buyGoldValue * this.todaySellSise) / 3.75;
  }
  @computed
  get marginSellTotal() {
    return this.marginGoldValue * (this.buyGoldValue / 3.75) - this.sellTotal;
  }
}

// const store = new goldStore();

// autorun(() => {
//   console.log(store);
// });
