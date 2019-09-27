import { observable, action } from 'mobx';
import * as api from '../lib/api';
import imageData from '../lib/movieImages.json';

export default class MovieStore {
  @observable.ref movieDaily = {
    dailyBoxOfficeList: []
  };
  @observable movieWeekly = {
    weeklyBoxOfficeList: []
  };
  @observable movieInSearch = {
    inputChoiceClone: '',
    movieList: []
  };
  @observable movieActNameSearch = {
    peopleList: []
  };

  @observable layer = false; // 레이어 팝업 On/Off
  @observable targetName = ''; // 한국(K)/외국(F) 영화 선택

  @observable day = null; // 달력 날짜 선택
  @observable dayText = ''; // store 일별/주말 선택(if)에 사용
  @observable dayTextChange = 'day'; // MoviePageItem 아이콘 활성화에 사용
  @observable dayWeekend = false; // 일별/주말 선택(map) - '등록된 내용이 없습니다.'에 사용
  @observable listChange = false; // 리스트 조건문(if)에 사용

  @observable selectChoice = 'movieNm'; // 검색 - 셀렉트 선택에 사용
  @observable selectChoiceNext = ''; // 영화, 감독, 배우명 셀렉트 조건문(if)에 사용
  @observable inputChoice = ''; // 검색 - 인풋에 사용
  @observable searchToggle = false; // 검색창 보이고 안보이고

  @observable moreList = 1; // 영화, 감독명 더보기 페이지 숫자에 사용
  @observable moreActList = 1; // 배우명 더보기 페이지 숫자에 사용

  constructor(root) {
    this.root = root;

    this.actMovieList();
  }

  @action
  actMovieList = async repData => {
    try {
      this.root.common.loading = true;

      if (!repData) {
        repData = '';
      }

      if (!this.day) {
        const { date } = this.root.clock;

        const dateMMMM = date
          .toISOString()
          .substr(0, 10)
          .replace(/-/gi, '');
        const dateMinus = String(Number(dateMMMM) - 1);
        this.day = dateMinus;
      }

      this.targetName = repData;

      if (this.dayText === 'day' || this.dayText === '') {
        this.dayText = 'day';
        this.dayWeekend = false;
        const response = await api.movieData(repData, this.day);
        const data = response.data.boxOfficeResult;

        imageData.map((currElement, i) => {
          let index = data.dailyBoxOfficeList.findIndex(
            infomation => infomation.movieCd === currElement.id
          );
          let selected = data.dailyBoxOfficeList[index];
          if (!selected) {
          } else {
            selected.photo = true;
          }
          return false;
        });

        this.movieDaily = data;
      } else {
        this.dayWeekend = true;
        const response = await api.movieWeekendData(repData, this.day);
        const data = response.data.boxOfficeResult;

        imageData.map((currElement, i) => {
          let index = data.weeklyBoxOfficeList.findIndex(
            infomation => infomation.movieCd === currElement.id
          );
          let selected = data.weeklyBoxOfficeList[index];
          if (!selected) {
          } else {
            selected.photo = true;
          }

          return false;
        });
        this.movieWeekly = data;
      }

      this.layer = true;
      this.listChange = false;
      this.searchToggle = false;
      this.dayTextChange = this.dayText;

      this.root.common.loading = false;
    } catch (e) {
      console.log(e);
    }
  };
  @action
  actDayChange = daySelect => {
    const dateMMMM = daySelect
      .toISOString()
      .substr(0, 10)
      .replace(/-/gi, '');
    const dateMinus = String(dateMMMM);
    this.day = dateMinus;
    this.actMovieList();
  };
  @action
  actDayLayerToggle = value => {
    this.layer = !this.layer;
    this.dayText = value;
  };
  @action
  actDayLayerClose = () => {
    this.layer = true;
  };
  @action
  actMovieSearch = () => {
    this.searchToggle = !this.searchToggle;
    this.inputChoice = '';
  };

  // 검색
  @action
  actMovieInSearch = async () => {
    this.root.common.loading = true;

    let selectChoice = this.selectChoice;
    let inputChoice = this.inputChoice;
    let moreList = 1;
    let moreActList = 1;

    if (selectChoice === 'movieInNm') {
      let inputChoice = this.inputChoice;
      const response = await api.movieActSearch(inputChoice, moreActList);
      const data = response.data.peopleListResult;
      this.movieActNameSearch = data;
    } else {
      const response = await api.movieSearch(
        selectChoice,
        inputChoice,
        moreList
      );
      const data = response.data.movieListResult;
      this.movieInSearch = data;
    }

    this.listChange = true;
    this.movieInSearch.inputChoiceClone = this.inputChoice;
    this.dayTextChange = 'film';
    this.selectChoiceNext = this.selectChoice;

    this.root.common.loading = false;
  };
  @action
  actSelectChoice = value => {
    this.selectChoice = value;
  };
  @action
  actInputChoice = value => {
    this.inputChoice = value;
  };
  @action
  actListMore = async () => {
    this.root.common.subLoading = true;

    if (this.selectChoiceNext === 'movieInNm') {
      this.moreActList++;

      let moreActList = this.moreActList;
      let inputChoice = this.inputChoice;
      const response = await api.movieActSearch(inputChoice, moreActList);
      const moreData = response.data.peopleListResult.peopleList;
      !moreData.length
        ? alert('더 이상 내용이 없습니다.')
        : (this.movieActNameSearch.peopleList = this.movieActNameSearch.peopleList.concat(
          moreData
        ));
    } else {
      this.moreList++;

      let selectChoice = this.selectChoice;
      let inputChoice = this.inputChoice;
      let moreList = this.moreList;
      const response = await api.movieSearch(
        selectChoice,
        inputChoice,
        moreList
      );
      const moreData = response.data.movieListResult.movieList;
      !moreData.length
        ? alert('더 이상 내용이 없습니다.')
        : (this.movieInSearch.movieList = this.movieInSearch.movieList.concat(
          moreData
        ));
    }

    this.root.common.subLoading = false;
  };
}
