import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import MoviePage from '../components/movie/MoviePage';

class PageRouter extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Main} />
        <Route path="/movie" component={MoviePage} />
      </Router>
    );
  }
}

export default PageRouter;
