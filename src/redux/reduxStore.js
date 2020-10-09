import { createStore } from "redux";

const CHANGE_IS_ACTIVE = 'CHANGE_IS_ACTIVE';
const CHANGE_DESCRIPTION_TEXT = 'CHANGE_DESCRIPTION_TEXT';
const CHANGE_WEIGHT = 'CHANGE_WEIGHT';

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
            'Головы щучьи с чесноком, да свежайшая сёмгушка',
            'Печалька, с рыбой закончился.'],

        ['Чего сидишь? Порадуй котэ, ',
            'Филе из цыплят с трюфелями в бульоне.',
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
    switch (action.type) {
        case 'CHANGE_IS_ACTIVE': // сделать упаковку активной
            return {
                ...state,
                status: state.status.map((s, i) => {
                    if (i === action.index)
                        return s === 'normal' ? 'active' : 'normal';
                    return s
                })
            }
        case 'CHANGE_DESCRIPTION_TEXT': //смена текста, при наведении и отвода мыши
            return {
                ...state,
                currentText: state.currentText.map((c, i) => {
                    if (i === action.index)
                        return action.operation;;
                    return c
                })
            };
        case 'CHANGE_WEIGHT': //смена объема упаковки
            return {
                ...state,
                currentWeight: state.currentWeight.map((c, i) => {
                    if (i === action.index)
                        return c === 2 ?
                            0 : c + 1;
                    return c
                })
            }
        default:
            return state;
    }
}

export const selectElementAC = (index) => ({ type: CHANGE_IS_ACTIVE, index: index });
export const changeTextOverAC = (index, operation) =>
    ({ type: CHANGE_DESCRIPTION_TEXT, index: index, operation: operation });
export const changeWeightAC = (index) => ({ type: CHANGE_WEIGHT, index: index });

let store = createStore(reducer);

export default store;