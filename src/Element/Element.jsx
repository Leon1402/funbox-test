import React from 'react';
import Circle from './Circle/Circle';
import Description from './Description/Description';
import s from './Element.module.css'
import SignText from './SignText/SignText';

const Element = (props) => {
    let index = props.index;
    let status = props.state.status[index];

    let selectElement = () => {
        props.changeIsActive(index)
    }
    let selectClassName = () => {
        switch (props.state.status[index]) {
            case 'active':
                return s.active;
            case 'end':
                return s.ended;
            default:
                return;
        }  
    };
    let changeTextOver = () => {
        props.changeDescriptionText(index, 0);
    }
    let changeTextEnter = () => {
        props.changeDescriptionText(index, 1);
    }

    return (
        <div className={s.element}>
            <div className={`${s.elementBlock} ${selectClassName()}`} 
            onClick={status==="end"? undefined: selectElement}
            onMouseLeave={status==="active"? changeTextOver:undefined}
            onMouseEnter={status==="active"? changeTextEnter:undefined}>
                <div className={`${s.corner} ${selectClassName()}`}></div>

                <Description select={props.state.select[props.state.currentWeight[index]]}
                    taste={props.state.taste[index]} 
                    descriptionText={props.state.descriptionText[index]}/>

                <div className={s.cat}>
                    <div className={s.pictureCat}></div>
                </div>

                <Circle weight={props.state.weight}
                    currentWeight={props.state.currentWeight[index]}
                    changeWeight={props.changeWeight}
                    index={index}
                    status={status} 
                    selectClassName={selectClassName}/>

                <div className={`${s.isEnded} ${selectClassName()}`}></div>
            </div>

            <SignText index={index}
            changeIsActive={props.changeIsActive}
            signText={props.state.signText[index]}
            status={status}/>
        </div>
    );
}

export default Element
