import React from 'react';

import './Button.scss';

const Button = ({ classes, btnText }) => {
    return <button className={classes}>{btnText}</button>;
};

export default Button;
