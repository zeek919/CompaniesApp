import React from 'react';
import PropTypes from 'prop-types';
import style from './TableHeader.module.scss';

const TableHeader = (array, sort, sortImage) => {
    const headers = array.map((element) => {
        return (
            <th
                onClick={() => sort(element)}
                className={style.header}
                key={element}
            >
                {element}
                {sortImage(element)}
            </th>
        );
    });

    const mobileHeaders = array.map((element) => {
        return (
            <button
                className={style.button}
                onClick={() => sort(element)}
                key={element}
            >
                {element}
                {sortImage(element)}
            </button>
        );
    });

    if (window.screen.width > 600) {
        return headers;
    } else {
        return mobileHeaders;
    }
};

TableHeader.propTypes = {
    array: PropTypes.array.isRequired,
    sort: PropTypes.func.isRequired,
    sortImage: PropTypes.func,
};

TableHeader.defaultProps = {
    sortImage: () => '',
};

export default TableHeader;
