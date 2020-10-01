import React from 'react';
import './App.css';
import Element from './Element/Element';

const App = (props) => {
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
          <Element store={props.store}
            index={0}/>

          <Element store={props.store}
            index={1}/>

          <Element store={props.store}
            index={2}/>

        </div>
      </div>
    </div>
  );
}

export default App;
