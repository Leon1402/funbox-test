import React from 'react';
import s from './Description.module.css'

const Description = (props) => {

    let selectMas = props.select.map((elem, index) => <p key={index}>{elem}</p>)
    
    return <div className={s.description}>
        <p className={s.inscription}>{props.descriptionText}</p>
        <h2>Нямушка</h2>
        <h3>{props.taste}</h3>
        {selectMas}
    </div>
}

export default Description
