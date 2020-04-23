import React from 'react';
import PropTypes from 'prop-types';
import style from './Input.module.scss';

const Input = ({ placeholder, onChange }) => (
    <div className={style.wrapper}>
        <input
            type="text"
            placeholder={placeholder}
            className={style.input}
            onChange={onChange}
        />
    </div>
);

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Input;
