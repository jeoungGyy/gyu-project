import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import MoviePage from '../components/movie/MoviePage';
import GoldPage from '../components/gold/GoldPage';
import LottoPage from '../components/lotto/LottoPage';
import MaskPage from '../components/mask/MaskPage';
import TodoPage from '../components/todo/TodoPage';
import ExchangePage from '../components/exchange/ExchangePage';
import CapturingPage from '../components/capturing/Page';

class PageRouter extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Main} />
        <Route path="/movie" component={MoviePage} />
        <Route path="/gold" component={GoldPage} />
        <Route path="/lotto" component={LottoPage} />
        <Route path="/mask" component={MaskPage} />
        <Route path="/todo" component={TodoPage} />
        <Route path="/exchange" component={ExchangePage} />
        <Route path="/capturing" component={CapturingPage} />
      </Router>
    );
  }
}

export default PageRouter;
