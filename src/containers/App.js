import React from 'react';
import DevTools from 'mobx-react-devtools';
import PageRouter from './PageRouter';

const App = () => {
  return (
    <div>
      <PageRouter />
      {process.env.NODE_ENV === 'development' && <DevTools />}
    </div>
  );
};

export default App;
