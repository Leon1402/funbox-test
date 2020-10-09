import React from 'react';
import './App.css';
import ElementContainer from './Element/ElementContainer';

const App = (props) => {

  let elements = [];
  for (let i = 0; i < props.elementsCount; i++)
    elements.push(<ElementContainer key={i} index={i} />)
  return (
    <div className='App'>
      <div className='upShadow'></div>
      <div className='downShadow'></div>
      {/*upShadow, downShadow  элементы необходимые для прорисовки верхнейи нижней тени соответственно*/}
      <div className='content'>
        <div className='article'>
          <h1>Ты сегодня покормил кота?</h1>
        </div>
        {/* Элемент для отображения упаковок.
компонента Element отрисовывает упаковку  */}
        <div className='elements'>
          {elements}
        </div>
      </div>
    </div>
  );
}

export default App;
