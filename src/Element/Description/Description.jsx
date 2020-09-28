import React from 'react';
import s from './Description.module.css'

const Description = (props) => {

    let currentText = () => {
        if (props.currentText === 0)
            return <p className={s.inscription}>Сказочное заморское яство</p>
        else
            return <p className={s.inscription + ' ' + s.active}>Котэ не одобряет?</p>
    };
    let selectMas = props.select.map((elem, index) => {
        if (Number.isInteger(elem))
            return <b key={index}>{elem}</b>
        else
        return <span key={index}>{elem}<br/></span> 
});

return <div className={s.elementDescription}>
    {currentText()}
    <h2>Нямушка</h2>
    <h3>{props.taste}</h3>
    <div>{selectMas}</div>
</div>
}

export default Description
