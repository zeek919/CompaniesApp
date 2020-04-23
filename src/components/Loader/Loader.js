import React from 'react';
import loader from '../../assets/loader.png';
import style from './Loader.module.scss';

const Loader = () => (
    <div className={style.wrapper}>
        <img alt="loader" src={loader} className={style.animation} />
        <p className={style.text}>Loading...</p>
    </div>
);

export default Loader;
