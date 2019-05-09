import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main';
import WeatherItem from '../components/weather/WeatherItem';

class PageRouter extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Main} />
        <Route path="/weather" component={WeatherItem} />
      </Router>
    );
  }
}

export default PageRouter;
