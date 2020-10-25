import React from 'react';
import './SignText.css'

const SignText = (props) => {
    let printText = () => {
        switch (props.status) {
            case "active":
                return <p>{props.signText[1]}</p>;
            case "end":
                return <p style={{color: '#ffff66'}}>{props.signText[2]}</p>;
            default:
                return <p>{props.signText[0]} <span className='element__sign-text-span' onClick={props.selectElement}>купи.</span></p>;
        }
    }
    return <div className='element__sign-text'>
        {printText()}
    </div>
}

export default SignText
