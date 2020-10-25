import React from 'react';
import Weight from './Weight/Weight';
import Description from './Description/Description';
import './Element.css'
import SignText from './SignText/SignText';

const Element = (props) => {

    let changeTextOver = () => {
        props.changeCurrentText(1)
    }
    let changeTextEnter = () => {
        props.changeCurrentText(0)
    }
    
    // Добавляем новый класс к элементам, для смены стилей при смене выбора упаковки
    let selectClassName = () => {
        switch (props.status) {
            case 'active':
                return 'active';
            case 'end':
                return 'ended';
            default:
                return;
        }
    };
    return (
        <div className='element'>
            <div className={`element__item ${selectClassName()}`}
                onClick={props.status === "end" ? null : props.selectElement}
                onMouseLeave={props.status === "active" ? changeTextOver : null}
                onMouseEnter={props.status === "active" ? changeTextEnter : null}>

                {/* Элемент с классом elementCorner отвечает за отрисовку верхней части
                упаковки, в которой срезан левый угол*/}

                <div className={`element__corner ${selectClassName()}`}></div>

                <Description
                    currentWeight={props.currentWeight}
                    taste={props.taste}
                    currentText={props.currentText} />

                <div className='element__image'>
                    <div className='element__image-item'></div>
                </div>

                <Weight changeCurrentWeight={props.changeCurrentWeight}
                    currentWeight={props.currentWeight}
                    selectClassName={selectClassName} />
                <div className={`element-end ${selectClassName()}`}></div>
            </div>

            <SignText 
                selectElement={props.selectElement}
                signText={props.signText}
                status={props.status} />
        </div>
    );
}

export default Element
