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
            taste={props.state.taste[1]}
            weight={props.state.weight}
            currentWeight={props.state.currentWeight[1]}
            changeWeight={props.changeWeight}
            index={1}
            changeIsActive={props.changeIsActive}
            status={props.state.status[1]}
            signText={props.state.signText[1]}
            descriptionText={props.state.currentText[1]}
            changeDescriptionText={props.changeDescriptionText} />

          <Element state={props.state}
            taste={props.state.taste[2]}
            weight={props.state.weight}
            currentWeight={props.state.currentWeight[2]}
            changeWeight={props.changeWeight}
            index={2}
            changeIsActive={props.changeIsActive}
            status={props.state.status[2]}
            signText={props.state.signText[2]}
            descriptionText={props.state.currentText[2]}
            changeDescriptionText={props.changeDescriptionText} />

        </div>
      </div>
    </div>
  );
}

export default App;
