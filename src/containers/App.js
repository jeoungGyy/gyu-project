import React, { Component } from 'react';
// import DevTools from 'mobx-react-devtools';
import PageRouter from './PageRouter';
import Blind from './Blind';

class App extends Component {
  render() {
    return (
      <>
        <PageRouter />
        <Blind />
        {/* {process.env.NODE_ENV === 'development' && <DevTools />} */}
      </>
    );
  }
}

export default App;
