import React from 'react';
import { changeTextOverAC, selectElementAC } from '../redux/reduxStore';
import { changeWeightAC } from '../redux/reduxStore';
import Element from './Element';


const ElementContainer = (props) => {
    let index = props.index;
    let state = props.store.getState()
    let changeWeight = () => {
        props.store.dispatch(changeWeightAC(index));
    }

    // меняем упаковку на выбранную и наоборот
    let selectElement = () => {
        props.store.dispatch(selectElementAC(index));
    }
    // Функции отвечающие за смену текста активной упаковке при наведеннии на нее и ухода
    let changeTextOver = () => {
        props.store.dispatch(changeTextOverAC(index, 1));
    }
    let changeTextEnter = () => {
        props.store.dispatch(changeTextOverAC(index, 0));
    }

    // Добавляем новый класс к элементам, для смены стилей при смене выбора упаковки
    return <Element 
        status={state.status}
        select={state.select}
        currentWeight={state.currentWeight}
        taste={state.taste}
        currentText={state.currentText}
        signText={state.signText}
        index={props.index}
        weight={state.weight}
        changeWeight={changeWeight}
        selectElement={selectElement} 
        changeTextOver={changeTextOver}
        changeTextEnter={changeTextEnter}/>
}

export default ElementContainer
