import React from 'react';
import s from './SignText.module.css'

const SignText = (props) => {

    let selectElement = () => {
        props.changeIsActive(props.index)
    }
    let printText = () => {
        switch (props.status) {
            case "active":
                return <p>{props.signText[1]}</p>;
            case "end":
                return <p style={{color: '#ffff66'}}>{props.signText[2]}</p>;
            default:
                return <p>{props.signText[0]} <span onClick={selectElement}>купи.</span></p>;
        }
    }
    return <div className={s.elementSignText}>
        {printText()}
    </div>
}

export default SignText
