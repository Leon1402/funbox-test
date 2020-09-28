let rerenderEntireTree = () => {
    console.log('asd')
}
let state = {
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
    currentWeight: [0, 0, 0],
    // статус упаковок обычная, выбранная, или закончилась
    status: ['normal', 'normal', 'end']
}
// функция смены объема упаковки
export let changeWeight = (index) => {
    state.currentWeight[index] = 
        (state.currentWeight[index] === 2) ? 0 : state.currentWeight[index] + 1;
    rerenderEntireTree();
}
// функция перерисовки UI
export let subscribers = (observer) => {
    rerenderEntireTree = observer;
}
// Функция выбора упаковки
export let changeIsActive = (index) => {
    state.status[index] = state.status[index] === 'normal' ? 'active' : 'normal';
    rerenderEntireTree();
}
// Функция смены текста, при наведении и отвода мыши
export let changeDescriptionText = (index, operation) => {
    state.currentText[index] = operation;
    rerenderEntireTree();
}
export default state;