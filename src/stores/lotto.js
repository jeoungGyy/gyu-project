import { observable, action } from 'mobx';
import * as api from '../lib/api';
import roundWeek from '../lib/lottoRound.json'; //로또 회차
// import lottoAddress from '../lib/lottoAddress.json'; // 엑셀 데이터
import lotto from '../lib/lotto.json'; //로또 좌표 구한 데이터

export default class ExchangeStore {
  @observable addressCoordAdd = []; //엑셀 원본 데이터
  @observable.ref addressAdd = []; //좌표값 얻은 데이터
  @observable lottoNumber = []; //로또 정보
  @observable lottoRound = ''; //회차
  @observable lottoRoundSelect = ''; //선택된 회차
  @observable sliderValue = 2; //슬라이더 값

  constructor(root) {
    this.root = root;

    this.actLottoNumber(); //로또 1위 번호 불러오기
    // this.actLottoAddressList(); //엑셀 X, Y 좌표값 구하기
    this.actLottoList(); //좌표값 얻은 데이터
  }

  // @action
  // actLottoAddressList = async () => {
  //   try {
  //     const { kakao } = window;
  //     await kakao.maps.load(() => {
  //       const geocoder = new kakao.maps.services.Geocoder();

  //       lottoAddress.map((info, i) => {
  //         return geocoder.addressSearch(info.latlng, function(result, status) {
  //           if (status === 'OK') {
  //             let coorY = result[0].y;
  //             let coorX = result[0].x;
  //             let selected = lottoAddress[i];
  //             if (!selected) {
  //             } else {
  //               selected.y = coorY;
  //               selected.x = coorX;
  //             }
  //           } else {
  //             // lottoAddress.splice(i);
  //           }
  //         });
  //       });
  //       this.addressCoordAdd = lottoAddress;
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  @action
  actLottoList = async () => {
    try {
      this.addressAdd = await lotto;
    } catch (e) {
      console.log(e);
    }
  };

  @action
  actLottoNumber = async () => {
    try {
      this.lottoRound = roundWeek;

      if (!this.lottoRoundSelect) {
        this.lottoRoundSelect = this.lottoRound[0];
      } else {
        this.root.common.subLoading = true;
      }

      const response = await api.lottoSise(this.lottoRoundSelect);
      const data = response.data;
      this.lottoNumber = data;
      this.root.common.subLoading = false;
    } catch (e) {
      console.log(e);
    }
  };
  @action
  actRoundSelect = (value) => {
    this.lottoRoundSelect = value;
  };

  @action
  actSliderValue = (value) => {
    this.sliderValue = value;
  };
}
