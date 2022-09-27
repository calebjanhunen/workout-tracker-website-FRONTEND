import React from 'react';

import './Button.scss';

const Button = ({ classes, btnText, clickFunction }) => {
    return (
        <button className={classes} onClick={clickFunction}>
            {btnText}
        </button>
    );
};

export default Button;
