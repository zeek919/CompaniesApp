import React from 'react';
import PropTypes from 'prop-types';
import style from './TableHeader.module.scss';

const TableHeader = (
    headersArray,
    sortHandler,
    sortImageHandler,
    wasUsedBefore,
    changeValueUsedBefore
) => {
    const headers = headersArray.map((element) => {
        return (
            <th
                onClick={() => {
                    wasUsedBefore(true);
                    sortHandler(element);
                }}
                className={style.header}
                key={element}
            >
                {element}
                {changeValueUsedBefore()}
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
    wasUsedBefore: PropTypes.func.isRequired,
    changeValueUsedBefore: PropTypes.func.isRequired,
};

TableHeader.defaultProps = {
    sortImageHandler: () => '',
};

export default TableHeader;
