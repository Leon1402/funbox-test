import React from 'react';
import Circle from './Circle/Circle';
import Description from './Description/Description';
import s from './Element.module.css'
import SignText from './SignText/SignText';

const Element = (props) => {
    let index = props.index;
    let status = props.store.getState().status[index];

    // меняем упаковку на выбранную и наоборот
    let selectElement = () => {
        props.store.changeIsActive(index)
    }
// Добавляем новый класс к элементам, для смены стилей при смене выбора упаковки
    let selectClassName = () => {
        switch (props.store.getState().status[index]) {
            case 'active':
                return s.active;
            case 'end':
                return s.ended;
            default:
                return;
        }  
    };
    // Функции отвечающие за смену текста активной упаковке при наведеннии на нее и ухода
    let changeTextOver = () => {
        props.store.changeDescriptionText(index, 1);
    }
    let changeTextEnter = () => {
        props.store.changeDescriptionText(index, 0);
    }

    return (
        <div className={s.element}>
            <div className={`${s.elementItem} ${selectClassName()}`} 
            onClick={status==="end"? undefined: selectElement}
            onMouseLeave={status==="active"? changeTextOver:undefined}
            onMouseEnter={status==="active"? changeTextEnter:undefined}>
                {/* Элемент с классом elementCorner отвечает за отрисовку верхней части
                упаковки, в которой срезан левый угол*/}

                <div className={`${s.elementCorner} ${selectClassName()}`}></div>
                
                <Description 
                select={props.store.getState().select[props.store.getState().currentWeight[index]]}
                    taste={props.store.getState().taste[index]} 
                    currentText={props.store.getState().currentText[index]}/>

                <div className={s.elementImage}>
                    <div className={s.elementImageItem}></div>
                </div>

                <Circle weight={props.store.getState().weight}
                    currentWeight={props.store.getState().currentWeight[index]}
                    changeWeight={props.store.changeWeight.bind(props.store)}
                    index={index}
                    status={status} 
                    selectClassName={selectClassName}/>

                <div className={`${s.isEnded} ${selectClassName()}`}></div>
            </div>

            <SignText index={index}
            changeIsActive={props.store.changeIsActive.bind(props.store)}
            signText={props.store.getState().signText[index]}
            status={status}/>
        </div>
    );
}

export default Element
