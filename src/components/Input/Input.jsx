import React from 'react';

import './Input.scss';

const Input = ({ type, classes, placeholder }) => {
    return <input type={type} className={classes} placeholder={placeholder} />;
};

export default Input;
