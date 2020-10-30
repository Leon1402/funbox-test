import React from 'react';
import './App.css';
import ElementContainer from './Element/ElementContainer';

const App = (props) => {

  let elements = [];
  for (let i = 0; i < 3; i++)
    elements.push(<ElementContainer key={i} index={i} />)

  return (
    <div className='App' >
      <div className="pattern">
        <div className="shadow"></div>
      </div>
      <div className="App-body">
        <div className="App-body__text">
            Ты сегодня покормил кота?
        </div>
        <div className="elements">
          <div className="elements__item elements__item_normal">
              <div className="elements__item-">
                
              </div>
            <div className="card">

            </div>
            <div className="sign-text">

            </div>
          </div>
          <div className="elements__item elements__item_normal">
            <div className="card">

            </div>
            <div className="sign-text">

            </div>
          </div>
          <div className="elements__item elements__item_normal">
            <div className="card">

            </div>
            <div className="sign-text">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
