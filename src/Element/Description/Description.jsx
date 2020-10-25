import React from 'react';
import { useState } from 'react';
import './Description.css'

const Description = (props) => {

    let setCurrentText = () => {
        if (props.currentText === 0)
            return <p>Сказочное заморское яство</p>
        else
            return <p className={'active'}>Котэ не одобряет?</p>
    };

    let [select, changeSelect] = useState([
        [10, ' порций', ' мышь в подарок'],
        [40, ' порций', 2, ' мыши в подарок'],
        [100, ' порций', 5, ' мышей в подарок', ' заказчик доволен']
    ])

    // создается массив JSX с необходимым форматированием текста(Числа выделены жирным)
    let selectMas = select[props.currentWeight].map((elem, index) => {
        if (Number.isInteger(elem))
            return <b key={index}>{elem}</b>
        else
            return <span key={index}>{elem}<br /></span>
    });

    return <div className='element__description'>
        {setCurrentText()}
        <h2>Нямушка</h2>
        <h3>{props.taste}</h3>
        <div>{selectMas}</div>
    </div>
}

export default Description
