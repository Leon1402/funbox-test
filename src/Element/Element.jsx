import React from 'react';
import Circle from './Circle/Circle';
import Description from './Description/Description';
import s from './Element.module.css'
import SignText from './SignText/SignText';


const Element = (props) => {
    let index = props.index;
    let status = props.status[index];
    
    let changeWeight = (e) => {
        e.stopPropagation();
        props.changeWeight();
    }
    let selectElement = () => {
        props.selectElement();
    }
    let changeTextOver = () => {
        props.changeTextOver();
    }
    let changeTextEnter = () => {
        props.changeTextEnter();
    }

    // Добавляем новый класс к элементам, для смены стилей при смене выбора упаковки
    let selectClassName = () => {
        switch (status) {
            case 'active':
                return s.active;
            case 'end':
                return s.ended;
            default:
                return;
        }
    };

    return (
        <div className={s.element}>
            <div className={`${s.elementItem} ${selectClassName()}`}
                onClick={status === "end" ? undefined : selectElement}
                onMouseLeave={status === "active" ? changeTextOver : undefined}
                onMouseEnter={status === "active" ? changeTextEnter : undefined}>
                {/* Элемент с классом elementCorner отвечает за отрисовку верхней части
                упаковки, в которой срезан левый угол*/}

                <div className={`${s.elementCorner} ${selectClassName()}`}></div>

                <Description
                    select={props.select[props.currentWeight[index]]}
                    taste={props.taste[index]}
                    currentText={props.currentText[index]} />

                <div className={s.elementImage}>
                    <div className={s.elementImageItem}></div>
                </div>

                <Circle weight={props.weight}
                    currentWeight={props.currentWeight[index]}
                    index={index}
                    status={status}
                    selectClassName={selectClassName} 
                    changeWeight={changeWeight}/>

                <div className={`${s.isEnded} ${selectClassName()}`}></div>
            </div>

            <SignText index={index}
                selectElement={selectElement}
                signText={props.signText[index]}
                status={status} />
        </div>
    );
}

export default Element
