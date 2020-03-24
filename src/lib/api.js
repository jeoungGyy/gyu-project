import axios from 'axios';

const headers = {
  withCredentials: true
};

/* 날씨 */
export function weatherData(year, hours) {
  // console.log(hours);
  if (hours >= 11 && hours < 14) {
    hours = '11';
  } else if (hours >= 14 && hours < 17) {
    hours = '14';
  } else if (hours >= 17 && hours < 20) {
    hours = '17';
  } else if (hours >= 20 && hours < 23) {
    hours = '20';
  } else if (hours >= 23 && hours < 24) {
    hours = '20';
  } else {
    hours = '08';
  }
  // console.log(hours);
  return axios.get(
    `https://cors-anywhere.herokuapp.com/http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?ServiceKey=${process.env.REACT_APP_WEATHER_SERVICE_KEY}&base_date=${year}&base_time=${hours}00&nx=61&ny=126&_type=json`,
    { headers }
  );
}

/* 영화 */
export function movieData(repData, date) {
  return axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_SERVICE_KEY}&targetDt=${date}&repNationCd=${repData}`
  );
}

export function movieWeekendData(repData, date) {
  return axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${process.env.REACT_APP_MOVIE_SERVICE_KEY}&targetDt=${date}&repNationCd=${repData}`
  );
}

export function movieSearch(selectChoice, inputChoice, moreList) {
  return axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${process.env.REACT_APP_MOVIE_SERVICE_KEY}&${selectChoice}=${inputChoice}&curPage=${moreList}`
  );
}

export function movieActSearch(actName, moreActList) {
  return axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=${process.env.REACT_APP_MOVIE_SERVICE_KEY}&peopleNm=${actName}&curPage=${moreActList}`
  );
}

/* 금시세 */
export function goldSise(endDay, dayScope) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/http://gold.abcb.kr/gold.php?sd=${endDay}&day=${dayScope}`,
    { headers }
  );
}

/* 로또시세 */
export function lottoSise(round) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${round}`,
    { headers }
  );
}

/* 마스크 재고 수량 */
export function maskNumber(Ha, Ga) {
  return axios.get(
    `https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${Ha}&lng=${Ga}`
  );
}
