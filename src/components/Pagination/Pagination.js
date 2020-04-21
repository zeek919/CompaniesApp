import React from 'react';
import style from './Pagination.module.scss';

const Pagination = ({ array, onClick }) => {
    const paginationButtons = array.map((item, index) => (
        <button className={style.button} onClick={() => onClick(item)}>
            {index + 1}
        </button>
    ));

    return <div className={style.wrapper}>{paginationButtons}</div>;
};

export default Pagination;
