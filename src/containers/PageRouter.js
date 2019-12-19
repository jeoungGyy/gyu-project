import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import MoviePage from '../components/movie/MoviePage';
import GoldPage from '../components/gold/GoldPage';
import LottoPage from '../components/lotto/LottoPage';
import ButtonPage from '../components/buttondamoa/ButtonPage';

class PageRouter extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Main} />
        <Route path="/movie" component={MoviePage} />
        <Route path="/gold" component={GoldPage} />
        <Route path="/lotto" component={LottoPage} />
        <Route path="/button" component={ButtonPage} />
      </Router>
    );
  }
}

export default PageRouter;
