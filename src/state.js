let store = {
    _state: {
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
    },
    _rerenderEntireTree() {
        console.log('Нет наблюдателей')
    },
    getState() {
        return this._state;
    },
    // Метод выбора упаковки
    changeIsActive(index) {
        this._state.status[index] = this._state.status[index] === 'normal' ? 'active' : 'normal';
        this._rerenderEntireTree();
    },
    // Метод смены текста, при наведении и отвода мыши
    changeDescriptionText(index, operation) {
        this._state.currentText[index] = operation;
        this._rerenderEntireTree();
    },
    // метод смены объема упаковки
    changeWeight(index) {
        this._state.currentWeight[index] =
            (this._state.currentWeight[index] === 2) ?
                0 : this._state.currentWeight[index] + 1;
        this._rerenderEntireTree();
    },
    // Метод перерисовки UI
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }
};

export default store;