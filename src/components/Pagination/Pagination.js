import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Pagination.module.scss';

const Pagination = ({ blocksToPaginate, onClick }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const onClickHandler = (item, index) => {
        setCurrentPage(index);
        onClick(item);
    };

    const paginationButtons = blocksToPaginate.map((item, index) => {
        const isActived = index === currentPage;

        return (
            <button
                key={index + 1}
                className={!isActived ? style.button : style.activedItem}
                onClick={() => onClickHandler(item, index)}
                type="button"
            >
                {index + 1}
            </button>
        );
    });

    return <div className={style.wrapper}>{paginationButtons}</div>;
};

Pagination.propTypes = {
    blocksToPaginate: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};
export default React.memo(Pagination);
