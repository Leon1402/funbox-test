import React from 'react';
import s from '../Element.module.css'

const Circle = (props) => {
        return <div className={`${s.circle} ${props.selectClassName()}`}>
        <span onClick={props.status==="end"? undefined: props.changeWeight}>{props.weight[props.currentWeight]}</span><br />
        <p>кг</p>
    </div>
}

export default Circle