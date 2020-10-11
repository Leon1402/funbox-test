import { connect } from 'react-redux';
import { changeTextOverAC, selectElementAC, changeWeightAC, getIdAC } from '../redux/reduxStore';
import Element from './Element';


let mapStateToProps = (state, ownProps) => {
    return {
        status: state.status,
        select: state.select,
        currentWeight: state.currentWeight,
        taste: state.taste,
        currentText: state.currentText,
        signText: state.signText,
        weight: state.weight,
        index: ownProps.index,
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

export default connect(mapStateToProps, mapDispatchToProps)(Element);
