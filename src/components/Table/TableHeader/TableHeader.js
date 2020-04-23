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

    return headers;
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
