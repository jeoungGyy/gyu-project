import axios from 'axios';

const headers = {
  withCredentials: true,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

/* 날씨 */
export function weatherData(year, hours) {
  // console.log(hours);
  if (hours >= 11) {
    hours = '11';
  } else if (hours >= 14) {
    hours = '14';
  } else if (hours >= 17) {
    hours = '17';
  } else if (hours >= 20) {
    hours = '20';
  } else if (hours >= 23) {
    hours = '20';
  } else {
    hours = '08';
  }
  return axios.get(
    `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=${process.env.REACT_APP_WEATHER_SERVICE_KEY}&numOfRows=10&pageNo=1&base_date=${year}&base_time=${hours}00&nx=61&ny=126&dataType=JSON`,
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
export function goldSise2() {
  return axios.get(
    'https://cors-anywhere.herokuapp.com/http://api.koreagoldx.co.kr/api/price/diamond/list',
    {
      headers,
    }
  );
}

/* 로또시세 */
export function lottoSise(round) {
  return axios.get(
    `https://cors-anywhere.herokuapp.com/https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=${round}`,
    { headers }
  );
}

/* 마스크 재고 수량(사용 안함) 
export function maskNumber(Ha, Ga) {
  return axios.get(
    `https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=${Ha}&lng=${Ga}`
  );
}*/

/* Todo 읽기 */
export function todoList() {
  return axios.get('/api/todos', { headers });
}
/* Todo 쓰기 */
export function todoWrite(writeDdata) {
  return axios.post('/api/todos', writeDdata, { headers });
}
/* Todo 삭제 */
export function todoDelete(id) {
  return axios.delete(`/api/todos/${id}`, { headers });
}
/* Todo 수정 */
export function todoPatch(id, patchDdata) {
  return axios.patch(`/api/todos/${id}`, patchDdata, { headers });
}

/* 로그인 */
export function authLogin(loginData) {
  return axios.post('/api/auth/login', loginData, { headers });
}
/* 로그인 체크 */
export function authCheck() {
  return axios.get('/api/auth/check', { headers });
}
/* 로그아웃 */
export function actAuthLogout() {
  return axios.post('/api/auth/logout', { headers });
}
