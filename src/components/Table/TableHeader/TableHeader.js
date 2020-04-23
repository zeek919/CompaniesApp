import React from 'react';
import PropTypes from 'prop-types';
import style from './TableHeader.module.scss';

const TableHeader = (headersArray, sortHandler, sortImageHandler) => {
    const headers = headersArray.map((element) => {
        return (
            <th
                onClick={() => sortHandler(element)}
                className={style.header}
                key={element}
            >
                {element}
                {sortImageHandler(element)}
            </th>
        );
    });

    return headers;
};

TableHeader.propTypes = {
    headersArray: PropTypes.array.isRequired,
    sortHandler: PropTypes.func.isRequired,
    sortImageHandler: PropTypes.func,
};

TableHeader.defaultProps = {
    sortImageHandler: () => '',
};

export default TableHeader;
