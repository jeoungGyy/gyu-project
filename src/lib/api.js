import axios from 'axios';

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
    `http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?ServiceKey=${
      process.env.REACT_APP_WEATHER_SERVICE_KEY
    }&base_date=${year}&base_time=${hours}00&nx=61&ny=126&_type=json`
  );
}

export function movieData(repData, date) {
  // console.log('repData' + repData);
  // console.log('day' + date);
  return axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${
      process.env.REACT_APP_MOVIE_SERVICE_KEY
    }&targetDt=${date}&repNationCd=${repData}`
  );
}

export function movieWeekendData(repData, date) {
  // console.log('Week' + date);
  return axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${
      process.env.REACT_APP_MOVIE_SERVICE_KEY
    }&targetDt=${date}&repNationCd=${repData}`
  );
}

export function movieSearch(selectChoice, inputChoice, moreList) {
  return axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${
      process.env.REACT_APP_MOVIE_SERVICE_KEY
    }&${selectChoice}=${inputChoice}&curPage=${moreList}`
  );
}

export function movieActSearch(actName, moreActList) {
  return axios.get(
    `https://www.kobis.or.kr/kobisopenapi/webservice/rest/people/searchPeopleList.json?key=${
      process.env.REACT_APP_MOVIE_SERVICE_KEY
    }&peopleNm=${actName}&curPage=${moreActList}`
  );
}
