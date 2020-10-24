import React from 'react';
import Element from './Element';



class ElementContainer extends React.Component {
    state = {
        currentText: 0,
        currentWeight: 0,
        taste: [
            'с фуа-гра',
            'с рыбой',
            'с курой'
        ],
        status: 'normal',
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
    }

    changeCurrentText = (index) => {
        this.setState({ currentText: index });
    }
    changeCurrentWeight = () => {
        if (this.state.currentWeight === 2)
            this.setState({ currentWeight: 0 })
        else
            this.setState({ currentWeight: this.state.currentWeight + 1 })
    }
    selectElement = () => {
        if (this.state.status === 'normal')
            this.setState({ status: 'active' })
        else if (this.state.status === 'active')
            this.setState({ status: 'normal' })
    }

    render() {
        return <Element index={this.props.index} {...this.state}
        taste={this.state.taste[this.props.index]}
        selectElement={this.selectElement}
        changeCurrentWeight={this.changeCurrentWeight}
        changeCurrentText={this.changeCurrentText}
        signText={this.state.signText[this.props.index]}/>
    }
}
export default ElementContainer
