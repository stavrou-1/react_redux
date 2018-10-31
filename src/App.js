import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/countReducer';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Counter count={0}/>
    </div>
  </Provider>
)

export default App;
