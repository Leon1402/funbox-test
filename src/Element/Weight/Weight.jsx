import React from 'react';
import { useState } from 'react';
import './Weight.css'

const Weight = (props) => {
    let [weight, changeWeight] = useState(['0,5', '2', '5']);

    let onWeightChange = (e) => {
        e.stopPropagation();
        props.changeCurrentWeight(props.currentWeight)
    }

    return <div className={`element-weight ${props.selectClassName()}`}>
        <span className='element-weight__span' onClick={props.status === "end" ? null : onWeightChange}>
            {weight[props.currentWeight]}
        </span><br />
        <p>кг</p>
    </div>
}

export default Weight