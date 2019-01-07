import React, { Component } from 'react';
import Header from '../src/components/common/Header';
import Home from '../src/components/pages/Home';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}/>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
