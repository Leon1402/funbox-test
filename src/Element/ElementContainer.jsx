import React from 'react';
import { connect } from 'react-redux';
import { changeTextOverAC, selectElementAC, changeWeightAC } from '../redux/reduxStore';
import Element from './Element';

let mapStateToProps = (state) => {
    return {
        status: state.status,
        select: state.select,
        currentWeight: state.currentWeight,
        taste: state.taste,
        currentText: state.currentText,
        signText: state.signText,
        weight: state.weight
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        // функция смена объема упаковки
        changeWeight: (index) => {
            dispatch(changeWeightAC(index));
        },
        // меняем упаковку на выбранную и наоборот
        selectElement: (index) => {
            dispatch(selectElementAC(index));
        },

        // Функции отвечающие за смену текста активной упаковке при наведеннии на нее и ухода
        changeTextOver: (index) => {
            dispatch(changeTextOverAC(index, 1));
        },
        changeTextEnter: (index) => {
            dispatch(changeTextOverAC(index, 0));
        }
    }
}
const ElementContainer = connect(mapStateToProps, mapDispatchToProps)(Element);
console.log(ElementContainer)
export default ElementContainer
