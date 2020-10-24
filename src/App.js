import React from 'react';
import './App.css';
import ElementContainer from './Element/ElementContainer';

const App = (props) => {

  let elements = [];
  for (let i = 0; i < 3; i++)
    elements.push(<ElementContainer key={i} index={i} />)

  return (
    <div className='App'>
      <div className='shadow-element-top'></div>
      <div className='shadow-element-bottom'></div>
      {/*upShadow, downShadow  элементы необходимые для прорисовки верхнейи нижней тени соответственно*/}
      <div className='content'>
        <header className='header'>
          <h1>Ты сегодня покормил кота?</h1>
        </header>
        <div className='content-elements'>
          {elements}
        </div>
      </div>
    </div>
  );
}

export default App;
