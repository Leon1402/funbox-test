import { createStore } from "redux";

const CHANGE_IS_ACTIVE = 'CHANGE_IS_ACTIVE';
const CHANGE_DESCRIPTION_TEXT = 'CHANGE_DESCRIPTION_TEXT';
const CHANGE_WEIGHT = 'CHANGE_WEIGHT';
const GET_ID = 'GET_ID';

let initState = {
    // описание выбранной порции
    select: [
        [10, ' порций', ' мышь в подарок'],
        [40, ' порций', 2, ' мыши в подарок'],
        [100, ' порций', 5, ' мышей в подарок', ' заказчик доволен']
    ],
    // Номер текущего текста, меняющегося в активной упаковке
    currentText: [0, 0, 0],
    // Начинки
    taste: [
        'с фуа-гра',
        'с рыбой',
        'с курой'
    ],
    // Подпись под упаковкой с различными начинками
    signText: [
        ['Чего сидишь? Порадуй котэ, ',
            'Печень утки разварная с артишоками.',
            'Печалька, с фуа-гра закончился.'],

        ['Чего сидишь? Порадуй котэ, ',
            'Филе из цыплят с трюфелями в бульоне',
            'Печалька, с рыбой закончился.'],

        ['Чего сидишь? Порадуй котэ, ',
            'Печень утки разварная с артишоками.',
            'Печалька, с курой закончился.'],
    ],
    // Список всех доступных объемов порции
    weight: ['0,5', '2', '5'],
    // текущий выбранный объем упаковок
    currentWeight: [0, 1, 2],
    // статус упаковок обычная, выбранная, или закончилась
    status: ['normal', 'active', 'end'],
    elementsCount: 3
};

const reducer = (state = initState, action) => {
    let index = action.index
    switch (action.type) {
<<<<<<< HEAD
        case 'CHANGE_IS_ACTIVE': // сделать упаковку активной
            stateCopy.status = [ ...state.status];
            stateCopy.status[index] =
                state.status[index] === 'normal' ? 'active' : 'normal';
            return stateCopy;
        case 'CHANGE_DESCRIPTION_TEXT': //смена текста, при наведении и отвода мыши
            stateCopy.currentText = [...state.currentText]
            stateCopy.currentText[index] = action.operation;
            return stateCopy;
        case 'CHANGE_WEIGHT': //смена объема упаковки
            stateCopy.currentWeight = [...state.currentWeight]
            stateCopy.currentWeight[index] =
                (state.currentWeight[index] === 2) ?
                    0 : state.currentWeight[index] + 1;
            return stateCopy;
        case 'GET_ID': //смена объема упаковки
            stateCopy.id = state.id + 1;
            return stateCopy;
=======
        case 'CHANGE-IS-ACTIVE': // сделать упаковку активной
            return {
                ...state,
                status: state.status.map((s, i) => {
                    if (i === index)
                        return s === 'normal' ? 'active' : 'normal';
                    return s
                })
            }
        case 'CHANGE-DESCRIPTION-TEXT': //смена текста, при наведении и отвода мыши
            return {
                ...state,
                currentText: state.currentText.map((c, i) => {
                    if (i === index)
                        return action.operation
                    return c;
                })
            }
        case 'CHANGE-WEIGHT': //смена объема упаковки
            return {
                ...state,
                currentWeight: state.currentWeight.map((c, i) => {
                    if (i === index)
                        return c === 2 ? 0 : c + 1;
                    return c;
                })
            }
>>>>>>> 23c591849a5946eb3e24a7b7b74f9b1093d1e3a5
        default:
            return state;
    }
}

export const selectElementAC = (index) => ({ type: CHANGE_IS_ACTIVE, index: index });
export const changeTextOverAC = (index, operation) =>
    ({ type: CHANGE_DESCRIPTION_TEXT, index: index, operation: operation });
export const changeWeightAC = (index) => ({ type: CHANGE_WEIGHT, index: index });
export const getIdAC = () => ({type:GET_ID})

let store = createStore(reducer);

export default store;