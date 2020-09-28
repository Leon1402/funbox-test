import React from 'react';
import './App.css';
import Element from './Element/Element';

const App = (props) => {
  return (
    <div className='App'>
      <div className='upShadow'></div>
      <div className='downShadow'></div>
      <div className='content'>
        <div className='article'>
          <h1>Ты сегодня покормил кота?</h1>
        </div>

        <div className='elements'>
          <Element state={props.state}
            index={0}
            changeWeight={props.changeWeight}
            changeIsActive={props.changeIsActive}
            changeDescriptionText={props.changeDescriptionText} />

          <Element state={props.state}
            index={1}
            changeWeight={props.changeWeight}
            changeIsActive={props.changeIsActive}
            changeDescriptionText={props.changeDescriptionText} />

          <Element state={props.state}
            index={2}
            changeWeight={props.changeWeight}
            changeIsActive={props.changeIsActive}
            changeDescriptionText={props.changeDescriptionText} />

        </div>
      </div>
    </div>
  );
}

export default App;
