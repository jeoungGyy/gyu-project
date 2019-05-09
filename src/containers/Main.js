import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';
import Todo from './Todo';
import './Main.scss';

class Main extends Component {
  render() {
    const masonryOptions = {
      transitionDuration: 200
    };
    return (
      <div className="Main">
        <header className="header">
          <h1>퍼블리셔 작업 폴더</h1>
        </header>
        <section className="contents">
          <Masonry
            className={'list'} // default ''
            elementType={'ul'} // default 'div'
            options={masonryOptions} // default {}
          >
            <li>
              <Link to={{ pathname: '/weather' }}>
                <div className="img">111</div>
                <div className="summary">
                  <p>22222</p>
                  <p>2019.01.02</p>
                </div>
              </Link>
            </li>
            <li>11111</li>
            <li>11111</li>
            <li>11111</li>
            <li>11111</li>
          </Masonry>
        </section>
        <Todo />
      </div>
    );
  }
}

export default Main;
