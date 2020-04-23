import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.scss';

const Filter = ({ placeholder, onChange }) => (
    <div className={style.wrapper}>
        <input
            type="text"
            placeholder={placeholder}
            className={style.input}
            onChange={onChange}
        />
    </div>
);

Filter.propTypes = {
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
