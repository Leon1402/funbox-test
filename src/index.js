import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { changeDescriptionText, changeIsActive, changeWeight, subscribers } from './state';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {state} changeWeight={changeWeight} 
      changeIsActive={changeIsActive}
      changeDescriptionText={changeDescriptionText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
rerenderEntireTree();
subscribers(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default rerenderEntireTree;