import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.scss';

const Header = ({ title }) => <div className={style.wrapper}>{title}</div>;

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
