let rerenderEntireTree = () => {
    console.log('asd')
}
let state = {
    select: [
        ['10 порций', 'мышь в подарок'],
        ['40 порций', '2 мыши в подарок'],
        ['100 порций', '5 мышей в подарок', 'заказчик доволен']
    ],
    descriptionText: [
        'Сказочное заморское яство',
        'Котэ не одобряет?'],

    currentText: [
        'Сказочное заморское яство',
        'Сказочное заморское яство',
        'Сказочное заморское яство'
    ],
    taste: [
        'с фуа-гра',
        'с рыбой',
        'с курой'
    ],
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
    weight: ['0,5', '2', '5'],
    currentWeight: [0, 0, 0],
    status: ['normal', 'normal', 'end']
}

export let changeWeight = (index) => {
    state.currentWeight[index] = 
        (state.currentWeight[index] === 2) ? 0 : state.currentWeight[index] + 1;
    rerenderEntireTree();
}
export let subscribers = (observer) => {
    rerenderEntireTree = observer;
}
export let changeIsActive = (index) => {
    state.status[index] = state.status[index] === 'normal' ? 'active' : 'normal';
    rerenderEntireTree();
}
export let changeDescriptionText = (index, operation) => {
    if (operation)
        state.currentText[index] = state.descriptionText[0];
    else
        state.currentText[index] = state.descriptionText[1];
    rerenderEntireTree();
}
export default state;