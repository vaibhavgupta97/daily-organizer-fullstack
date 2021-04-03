import React from 'react';
import ReactDOM from 'react-dom';
//import {store} from "./store";
import {Main} from './components/Main';

//console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>

    <h1>Hello</h1>
    <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

